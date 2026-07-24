import {Box, IconButton} from "@mui/material";
import {EyeIcon, Trash} from "lucide-react";
import {useState} from "react";
import Modal from "../../../ui/Modal.tsx";
import DeleteProperty from "./DeleteProperty.tsx";
import type {Property} from "../../../../interfaces";
import {Link} from "react-router-dom";
import {ROUTES_PATHS_DATA} from "../../../../constants";

interface Props {
  property: Property
}

const AdminPropertiesActions = ({property}: Props) => {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const onOpenDeleteModal = () => setOpenDeleteModal(true);
  const onCloseDeleteModal = () => setOpenDeleteModal(false);
  return (
    <Box>
      <IconButton component={Link} to={`${ROUTES_PATHS_DATA.showProperty}?property_id=${property._id}`}><EyeIcon
        size={18}/></IconButton>
      <IconButton onClick={onOpenDeleteModal} sx={theme => ({
        ' & svg': {
          transition: 'all 0.3s ease'
        },
        ':hover svg': {
          color: theme.palette.error.light
        }
      })}><Trash size={18}/></IconButton>
      <Modal onClose={onCloseDeleteModal} open={openDeleteModal} maxWidth={'550px'}>
        <DeleteProperty onCloseDeleteModal={onCloseDeleteModal} open={openDeleteModal} property={property}/>
      </Modal>
    </Box>
  );
};

export default AdminPropertiesActions;