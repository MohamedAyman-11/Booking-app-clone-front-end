import {Box} from "@mui/material";
import Modal from "../../../ui/Modal.tsx";
import {useState} from "react";
import AdminToggleUserStatus from "./AdminToggleUserStatus.tsx";
import type {User} from "../../../../interfaces";
import Button from "@mui/material/Button";

interface Props {
  user: User
}

const AdminUsersActions = ({user}: Props) => {
  const isActive = user.active
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
  const onCloseDeleteModel = () => setOpenDeleteModal(false)
  const onOpenDeleteModel = () => setOpenDeleteModal(true)
  return (
    <Box>
      <Button onClick={onOpenDeleteModel} sx={theme => ({
        bgcolor: theme.palette[isActive ? 'error' : 'success'].main,
        color: '#fff',
        borderRadius: '8px',
        width: '100%'
      })}>{isActive ? 'Deactivate' : 'Activate'}</Button>
      <Modal onClose={onCloseDeleteModel} open={openDeleteModal} maxWidth={'550px'}>
        <AdminToggleUserStatus onCloseDeleteModal={onCloseDeleteModel} user={user}/>
      </Modal>
    </Box>)
};

export default AdminUsersActions;