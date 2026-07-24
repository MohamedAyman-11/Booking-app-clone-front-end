import {Button, Stack} from '@mui/material';
import {Link} from "react-router-dom";

const AuthButtons = () => {
  return (
    <Stack direction={'row'} sx={{alignItems: 'center', gap: '20px'}}>
      <Button
        component={Link} to={'/register'}
        sx={(theme) => ({
          padding: '6px 12px',
          color: theme.palette.brand.primary,
          background: '#ffffff',
          fontSize: '13px',
        })}
      >
        Register
      </Button>
      <Button
        component={Link} to={'/login'}
        sx={(theme) => ({
          padding: '6px 12px',
          color: theme.palette.brand.primary,
          background: '#ffffff',
          fontSize: '13px',
        })}
      >
        Sign in
      </Button>
    </Stack>
  );
};

export default AuthButtons;
