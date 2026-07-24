import {alpha, Box, IconButton} from "@mui/material";
import {CheckIcon, XIcon} from "lucide-react";
import {useState} from "react";
import type {Property} from "../../../interfaces";
import ApprovePropertyDialog from "../admin/propertiesRequest/ApprovePropertyDialog.tsx";
import Modal from "../../ui/Modal.tsx";
import RejectPropertyDialog from "../admin/propertiesRequest/RejectPropertyDialog.tsx";


interface Props {
  property: Property
}

const Actions = ({property}: Props) => {
  const [openAcceptModal, setOpenAcceptModal] = useState<boolean>(false)
  const [openRejectModal, setOpenRejectModal] = useState<boolean>(false)
  const onOpenAcceptModal = () => setOpenAcceptModal(true)
  const onCloseAcceptModal = () => setOpenAcceptModal(false)
  const onOpenRejectModal = () => setOpenRejectModal(true)
  const onCloseRejectModal = () => setOpenRejectModal(false)
  return (
    <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center'}}>
      <IconButton onClick={onOpenAcceptModal} sx={theme => ({
        border: `1px solid ${theme.palette.success.main}`,
        borderRadius: '8px',
        p: '6px',
        ':hover': {
          bgcolor: alpha(theme.palette.success.main, 0.07)
        },
        '& svg': {
          color: theme.palette.success.main,
        }
      })}><CheckIcon/></IconButton>
      <IconButton onClick={onOpenRejectModal} sx={theme => ({
        border: `1px solid ${theme.palette.error.main}`,
        borderRadius: '8px',
        p: '6px',
        ':hover': {
          bgcolor: alpha(theme.palette.error.main, 0.07)
        },
        '& svg': {
          color: theme.palette.error.main,
        }
      })}><XIcon/></IconButton>
      <Modal onClose={onCloseAcceptModal} open={openAcceptModal}>
        <ApprovePropertyDialog property={property} onClose={onCloseAcceptModal}/>
      </Modal>
      <Modal onClose={onCloseRejectModal} open={openRejectModal}>
        <RejectPropertyDialog property={property} onClose={onCloseRejectModal}/>
      </Modal>
    </Box>
  );
};

export default Actions;