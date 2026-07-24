import {ADMIN_DASHBOARD_ITEMS, HOST_DASHBOARD_ITEMS, USER_DASHBOARD_ITEMS} from "../../constants";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import {NavLink} from "react-router-dom";
import {listItemStyle} from "../../styles/styles.ts";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface Props {
  role: string | undefined;
  handleDrawerClose: () => void
}

const DashboardItems = ({role, handleDrawerClose}: Props) => {
  if (role === 'host') {
    return (
      HOST_DASHBOARD_ITEMS.map((el) => {
        const Icon = el.icon;
        return (
          <ListItem key={el.text} disablePadding sx={{mb: '10px', px: '10px'}} onClick={handleDrawerClose}>
            <ListItemButton component={NavLink} to={el.path} sx={listItemStyle}>
              <ListItemIcon>
                <Icon/>
              </ListItemIcon>
              <ListItemText primary={el.text}/>
            </ListItemButton>
          </ListItem>
        )
      })
    )
  }
  if (role === 'admin') {
    return (
      ADMIN_DASHBOARD_ITEMS.map((el) => {
        const Icon = el.icon;
        return (
          <ListItem key={el.text} disablePadding sx={{mb: '10px', px: '10px'}} onClick={handleDrawerClose}>
            <ListItemButton component={NavLink} to={el.path} sx={listItemStyle}>
              <ListItemIcon>
                <Icon/>
              </ListItemIcon>
              <ListItemText primary={el.text}/>
            </ListItemButton>
          </ListItem>
        )
      })
    )
  }
  return (
    USER_DASHBOARD_ITEMS.map((el) => {
      const Icon = el.icon;
      return (
        <ListItem key={el.text} disablePadding sx={{mb: '10px', px: '10px'}} onClick={handleDrawerClose}>
          <ListItemButton component={NavLink} to={el.path} sx={listItemStyle}>
            <ListItemIcon>
              <Icon/>
            </ListItemIcon>
            <ListItemText primary={el.text}/>
          </ListItemButton>
        </ListItem>
      )
    })
  )
};

export default DashboardItems;