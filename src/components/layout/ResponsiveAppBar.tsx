import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import {type ReactNode, useState} from "react";
import type {User} from "../../interfaces";
import Navbar from "./Navbar.tsx";
import {useMediaQuery} from "@mui/material";
import MobileNavbar from "./mobile/MobileNavbar.tsx";
import CustomDrawer from "../ui/CustomDrawer.tsx";

const drawerWidth = 240;

interface Props {
  user: User
  window?: () => Window;
  children: ReactNode
}

export default function ResponsiveDrawer(props: Props) {
  const {window, user, children} = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };


  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };


  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;
  const isMobile = useMediaQuery('(max-width: 820px)');
  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <CssBaseline/>
      <AppBar
        position="fixed"
        sx={(theme) => ({
          width: {md: `calc(100% - ${drawerWidth}px)`},
          ml: {md: `${drawerWidth}px`},
          background: theme.palette.brand.primary
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{mr: 2, display: {md: 'none'}}}
          >
            <MenuIcon/>
          </IconButton>
          <Box sx={{
            flexGrow: 1
          }}>
            {isMobile ? <MobileNavbar user={user}/> : <Navbar user={user}/>}
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: {md: drawerWidth},
          flexShrink: {md: 0},
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerClose}
          sx={{
            display: {xs: 'block', md: 'none'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          <CustomDrawer handleDrawerClose={handleDrawerClose} user={user}/>
        </Drawer>
        <Drawer
          open={mobileOpen}
          variant="permanent"
          sx={{
            display: {xs: 'none', md: 'block'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}
        >
          <CustomDrawer handleDrawerClose={handleDrawerClose} user={user}/>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{flexGrow: 1, p: 3, width: {md: `calc(100% - ${drawerWidth}px)`}}}
      >
        <Toolbar/>
        {children}
      </Box>
    </Box>
  );
}
