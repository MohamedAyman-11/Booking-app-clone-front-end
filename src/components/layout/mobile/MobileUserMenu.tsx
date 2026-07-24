import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";
import {Fragment} from "react/jsx-runtime";
import {Box, Button as MuiButton, Typography} from "@mui/material";
import UserAvatar from "../Avatar.tsx";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {useQueryClient} from "@tanstack/react-query";
import useLogout from "../../../hooks/auth/useLogout.ts";
import toast from "react-hot-toast";
import type {User} from "../../../interfaces";
import axios from "axios";
import BecomeHostButton from "./BecomeHostButton.tsx";
import HostActions from "./HostActions.tsx";
import LogoutButton from "../LogoutButton.tsx";
import {Link} from "react-router-dom";
import {UserRound} from "lucide-react";

interface Props {
  user: User
}

const MobileUserMenu = ({user}: Props) => {
  const queryClient = useQueryClient()
  const {mutateAsync, isPending} = useLogout()
  const onLogoutHandler = async () => {
    try {
      const response = await mutateAsync()
      queryClient.clear();
      toast.success(response.message)
    } catch (e) {
      const errMsg = axios.isAxiosError(e) ? e.response?.data?.message : 'Something went wrong';
      toast.error(errMsg);
    }
  }
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <Fragment>
          <MuiButton
            variant="text"
            sx={{
              padding: '6px 10px',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: '#ffffff21',
              },
            }}
            {...bindTrigger(popupState)}
          >
            <Box sx={{display: 'flex', alignItems: 'center', gap: '5px'}}>
              <UserAvatar user={user}/>
              <Typography
                sx={{
                  fontSize: {
                    xs: '14px',
                    md: '16px'
                  }, color: '#fff', fontWeight: 600
                }}
              >
                Mohamed Ayman
              </Typography>
            </Box>
          </MuiButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem
              component={Link}
              to={`/dashboard/my-account`}
              onClick={popupState.close}
              sx={{width: '200px', py: '12px'}}
            >
              <UserRound size={18}/>
              <Typography
                component={'span'}
                sx={{fontWeight: 400, fontSize: '14px', color: '#1A1A1A', ml: '6px'}}
              >
                My account
              </Typography>
            </MenuItem>
            <LogoutButton isPending={isPending} onClick={async () => {
              await onLogoutHandler()
              popupState.close()
              window.location.replace('/login')
            }}/>
            {user.role === 'host' ? <HostActions onClose={() => popupState.close()}/> :
              <BecomeHostButton onClose={() => popupState.close()}/>}
          </Menu>
        </Fragment>
      )}
    </PopupState>
  );
};

export default MobileUserMenu;