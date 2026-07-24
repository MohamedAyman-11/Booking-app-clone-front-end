import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";
import {Fragment} from "react/jsx-runtime";
import Button from "@mui/material/Button";
import {Box} from "@mui/material";
import UserAvatar from "../Avatar.tsx";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom";


const MobileAuthMenu = () => {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <Fragment>
          <Button
            variant="text"
            sx={{
              padding: '6px 6px',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: '#ffffff21',
              },
            }}
            {...bindTrigger(popupState)}
          >
            <Box sx={{display: 'flex', alignItems: 'center', gap: '5px'}}>
              <UserAvatar/>
            </Box>
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem component={Link} to={'/register'}
                      onClick={popupState.close}
                      sx={{width: '200px', pb: 0}}
            >
              Register
            </MenuItem>
            <MenuItem component={Link} to={'/login'}
                      onClick={popupState.close}
                      sx={{width: '200px',}}
            >
              Sign in
            </MenuItem>
          </Menu>
        </Fragment>
      )}
    </PopupState>
  );
};

export default MobileAuthMenu;