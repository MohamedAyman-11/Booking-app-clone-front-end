import { Box, Container, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import Logo from "../../../svg/Logo.tsx";
import NotLoggedIn from "./NotLoggedIn.tsx";
import LoggedIn from "./LoggedIn.tsx";
const MobileNavbar = () => {
  const { pathname } = useLocation();
  const user = '';
  return (
    <Container maxWidth={'lg'}>
      <Stack
        direction={'row'}
        sx={{
          alignItems: 'center',
          padding: '10px 0',
        }}
      >
        <Box sx={{ flex: 1 }} component={Link} to={pathname}>
          <Logo />
        </Box>
        <Stack
          component={'nav'}
          sx={{ alignItems: 'center', gap: '30px' }}
          direction={'row'}
        >

          {!user ? <NotLoggedIn /> : <LoggedIn />}
        </Stack>
      </Stack>
    </Container>
  );
};

export default MobileNavbar;
