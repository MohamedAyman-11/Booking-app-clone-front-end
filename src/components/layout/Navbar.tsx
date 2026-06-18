import {Box, Button, Container, Stack} from '@mui/material';
import Logo from '../../svg/Logo';
import {Link, useLocation} from 'react-router-dom';
import NotLoggedIn from './NotLoggedIn';
import LoggedIn from './LoggedIn';

const Navbar = () => {
  const {pathname} = useLocation();
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
        <Box sx={{flex: 1}} component={Link} to={pathname}>
          <Logo color={"#fff"}/>
        </Box>
        <Stack
          component={'nav'}
          sx={{alignItems: 'center', gap: '30px'}}
          direction={'row'}
        >
          <Button
            sx={{
              color: '#fff',
              padding: '8px 12px',
              fontSize: {
                xs: '14px',
                md: '16px'
              },
              transition: 'all 0.3s ease',
              '&:hover': {
                background: '#ffffff21',
              },
            }}
          >
            List your property
          </Button>
          {!user ? <NotLoggedIn/> : <LoggedIn/>}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
