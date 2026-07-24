import {Box, Stack} from '@mui/material';
import {Link} from 'react-router-dom';

import Logo from "../../../svg/Logo.tsx";
import MobileAuthMenu from "./MobileAuthMenu.tsx";
import MobileUserMenu from "./MobileUserMenu.tsx";
import type {User} from "../../../interfaces";

interface Props {
  user: User
}

const MobileNavbar = ({user}: Props) => {
  return (
    <Stack
      direction={'row'}
      sx={{
        alignItems: 'center',
        padding: '10px 0',
        justifyContent: 'space-between',
        flexGrow: 1
      }}
    >
      <Box sx={{flex: 1, display: 'flex'}} component={Link} to={'/'}>
        <Logo color={'#fff'}/>
      </Box>
      <Stack
        component={'nav'}
        sx={{alignItems: 'center', gap: '30px'}}
        direction={'row'}
      >
        {!user ? <MobileAuthMenu/> : <MobileUserMenu user={user}/>}
      </Stack>
    </Stack>
  );
};

export default MobileNavbar;
