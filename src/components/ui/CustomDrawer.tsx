import Toolbar from "@mui/material/Toolbar";
import {XIcon} from "lucide-react";
import {Box, Divider, IconButton} from "@mui/material";
import type {User} from "../../interfaces";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Avatar from "../layout/Avatar.tsx";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteAccount from "../dashboard/profile/DeleteAccount.tsx";
import useDeleteAccountHandler from "../../hooks/handlers/useDeleteAccountHandler.ts";
import DashboardItems from "../layout/DashboardItems.tsx";

interface Props {
  handleDrawerClose: () => void
  user: User,
}

const CustomDrawer = ({handleDrawerClose, user}: Props) => {
  const {onOpenModal, onCloseModal, open, onConfirmDeleteHandler, isPending} = useDeleteAccountHandler()
  return (
    <>
      <Toolbar sx={{
        display: {
          xs: 'flex',
          md: 'none',
        },
        ml: 'auto',
        minHeight: '50px !important',
      }}>
        <IconButton onClick={handleDrawerClose} sx={{
          ml: "auto",
          p: 0,
          '& svg': {transition: 'all 0.3s ease'},
          '&:hover svg': {color: '#1A1A1A'}
        }}><XIcon/></IconButton>
      </Toolbar>
      <Divider/>
      <List>
        <ListItem>
          <ListItemIcon>
            <Avatar user={user}/>
          </ListItemIcon>
          <ListItemText primary={user.name} sx={{
            ml: '10px',
            textTransform: 'capitalize'
          }}/>
        </ListItem>
      </List>
      <Divider/>
      <List sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
        <Box>
          <DashboardItems role={user?.role} handleDrawerClose={handleDrawerClose}/>
        </Box>
        <ListItem sx={{mx: 'auto', alignItems: 'flex-end'}}>
          <DeleteAccount onOpenModel={onOpenModal} onCloseModel={onCloseModal} open={open} isLoading={isPending}
                         onConfirmDeleteHandler={onConfirmDeleteHandler}/>
        </ListItem>
      </List>
    </>
  )
}
export default CustomDrawer