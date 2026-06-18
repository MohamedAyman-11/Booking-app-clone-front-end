import {Outlet} from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import {Box, useMediaQuery} from '@mui/material';
import MobileNavbar from "../components/layout/mobile/MobileNavbar.tsx";
import {Toaster} from "react-hot-toast";
import theme from "../config/mui.config.ts";

const Layout = () => {
  const isMobile = useMediaQuery('(max-width: 667px)');
  return (
    <>
      <Box
        component={'header'}
        sx={(theme) => ({
          background: theme.palette.brand.primary,
        })}
      >
        {isMobile ? <MobileNavbar/> : <Navbar/>}
      </Box>
      <main>
        <Outlet/>
      </main>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={
          {
            style: {
              fontFamily: theme.typography.fontFamily,
              fontWeight: 500,
              minWidth: '250px',
              maxWidth: '440px',
              whiteSpace: 'nowrap',
            }
          }
        }
      />
    </>
  );
};
export default Layout;
