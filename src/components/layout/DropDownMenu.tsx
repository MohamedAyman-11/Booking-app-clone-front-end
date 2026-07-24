import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, {bindMenu, bindTrigger} from 'material-ui-popup-state';
import {Fragment} from 'react/jsx-runtime';
import UserAvatar from './Avatar';
import {Box, Typography} from '@mui/material';
import useLogout from "../../hooks/auth/useLogout.ts";
import toast from "react-hot-toast";
import {QueryClient} from "@tanstack/react-query";
import useCurrentUser from "../../hooks/user/useCurrentUser.ts";
import {Link} from "react-router-dom";
import LogoutButton from "./LogoutButton.tsx";
import {UserRound} from "lucide-react";

const DropDownMenu = () => {
  const {data} = useCurrentUser()
  const user = data?.user
  const queryClient = new QueryClient()
  const {mutateAsync, isPending} = useLogout()
  const onLogoutHandler = async () => {
    try {
      const response = await mutateAsync()
      queryClient.clear();
      toast.success(response.message)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <Fragment>
          <Button
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
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              zIndex: 1
            }}>
              <UserAvatar user={user}/>
              <Typography
                sx={{
                  fontSize: {
                    xs: '14px',
                    md: '16px'
                  }, color: '#fff', fontWeight: 600
                }}
              >
                {user.name}
              </Typography>
            </Box>
          </Button>
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
            {/*Logout Button*/}
            <Box>
              <LogoutButton isPending={isPending} onClick={async () => {
                await onLogoutHandler()
                popupState.close()
                setTimeout(() => window.location.replace('/login'), 500)
              }}/>
            </Box>
          </Menu>
        </Fragment>
      )}
    </PopupState>
  );
};
export default DropDownMenu;
