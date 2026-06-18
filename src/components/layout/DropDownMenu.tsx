import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Fragment } from 'react/jsx-runtime';
import UserAvatar from './Avatar';
import { Box, Typography } from '@mui/material';
import { dropDownMenuData } from '../../data/dropDownMenu';
const MenuPopupState = () => {
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <UserAvatar />
              <Typography
                sx={{ fontSize: {
                  xs:'14px',
                    md:'16px'
                  }, color: '#fff', fontWeight: 600 }}
              >
                Mohamed Ayman
              </Typography>
            </Box>
          </Button>
          <Menu {...bindMenu(popupState)}>
            {dropDownMenuData.map((item) => {
              const Icon = item.icon;
              return (
                <MenuItem
                  key={item.text}
                  onClick={popupState.close}
                  sx={{ width: '200px', py: '12px' }}
                >
                  <Icon className="menu-icon" />
                  <Typography
                    component={'span'}
                    sx={{ fontWeight: 400, fontSize: '14px', color: '#1A1A1A' }}
                  >
                    {item.text}
                  </Typography>
                </MenuItem>
              );
            })}
          </Menu>
        </Fragment>
      )}
    </PopupState>
  );
};
export default MenuPopupState;
