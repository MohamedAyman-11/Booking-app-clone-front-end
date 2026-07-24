import {Box, Stack} from '@mui/material';
import Logo from '../../svg/Logo';
import {Link} from 'react-router-dom';
import AuthButtons from './AuthButtons.tsx';
import type {User} from "../../interfaces";
import DropDownMenu from "./DropDownMenu.tsx";
import HostActions from "./HostActions.tsx";
import BecomeHostButton from "./BecomeHostButton.tsx";

interface Props {
  user: User
}

const Navbar = ({user}: Props) => {

  return (
    <Stack
      direction={'row'}
      sx={{
        alignItems: 'center',
        padding: '10px 0',
        justifyContent: 'space-between',
        flex: 1
      }}
    >
      {/*LOGO*/}
      <Box sx={{flex: 1, display: 'flex'}} component={Link} to={'/'}>
        <Logo color={"#fff"}/>
      </Box>
      <Stack
        component={'nav'}
        sx={{alignItems: 'center', gap: '20px'}}
        direction={'row'}
      >
        {/*Create Property Button*/}
        {user && user?.role && user?.role === 'host' ? <HostActions/> : user?.role && user?.role !== 'admin' ?
          <BecomeHostButton/> : null}
        {!user ? <AuthButtons/> : <DropDownMenu/>}
      </Stack>
    </Stack>
  );
};

export default Navbar;
