import {Box, Button as MuiButton, DialogActions, DialogContent, DialogContentText, DialogTitle,} from "@mui/material";
import Modal from "../../ui/Modal.tsx";
import {TriangleAlert} from "lucide-react";
import Button from "../../ui/Button.tsx";

interface Props {
  onOpenModel: () => void,
  onCloseModel: () => void,
  open: boolean,
  isLoading: boolean,
  onConfirmDeleteHandler: () => void
}

const DeleteAccount = ({onOpenModel, onCloseModel, open, isLoading, onConfirmDeleteHandler}: Props) => {
  return (
    <Box sx={{mx: 'auto'}}>
      <MuiButton variant={'contained'} onClick={onOpenModel}
                 sx={{mb: '20px', mx: 'auto', display: 'block', bgcolor: '#d32f2f'}}>Delete My
        Account</MuiButton>
      <Modal open={open} onClose={onCloseModel}>
        <Box sx={{
          bgcolor: 'rgb(193 50 50 / 0.42)',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: '20px',
          mx: 'auto'
        }}><TriangleAlert color={'#e10202'}/></Box>
        <DialogTitle id="alert-dialog-title" sx={{
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          Are You Sure
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={
            {
              textAlign: 'center',
              padding: '0 20px',
              fontWeight: 500,
              fontSize: '16px'
            }
          }>
            Once you delete your account, all your personal information, bookings, reviews, and saved items will be
            permanently removed. This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{
          flexDirection: 'column',
          gap: '10px',
          px: '20px'
        }}>
          <Button isLoading={isLoading} variant={'contained'} color={'error'} fullWidth={true}
                  onClick={onConfirmDeleteHandler} sx={{
            py: '8px'
          }}>Delete My Account</Button>
          <MuiButton variant={'outlined'} fullWidth={true} onClick={onCloseModel} sx={{
            py: '8px',
            borderColor: '#aaa',
            color: '#1A1A1A',
            mx: '0px !important'
          }}
          >
            Cancel
          </MuiButton>
        </DialogActions>
      </Modal>
    </Box>
  );
};

export default DeleteAccount;