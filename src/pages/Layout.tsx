import {Box, Container, useMediaQuery} from '@mui/material';
import type {User} from "../interfaces";
import CustomToaster from "../components/ui/CustomToaster.tsx";
import {Outlet} from "react-router-dom";
import MobileNavbar from "../components/layout/mobile/MobileNavbar.tsx";
import Navbar from "../components/layout/Navbar.tsx";

interface Props {
  user: User
}

const MainLayout = ({user}: Props) => {
  const isMobile = useMediaQuery('(max-width: 667px)');
  return (
    <>
      <Box
        component={'header'}
        sx={(theme) => ({
          background: theme.palette.brand.primary,
        })}
      >
        <Container maxWidth={'xl'}>

          {isMobile ? <MobileNavbar user={user}/> : <Navbar user={user}/>}
        </Container>
      </Box>
      <main>
        <Outlet/>
      </main>
      <CustomToaster/>
    </>
  );
};
export default MainLayout;
