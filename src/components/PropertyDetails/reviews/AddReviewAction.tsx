import Button from "../../ui/Button.tsx";
import {useState} from "react";
import Modal from "../../ui/Modal.tsx";
import ReviewForm from "./ReviewForm.tsx";
import {IconButton} from "@mui/material";
import {Star} from "lucide-react";

interface Props {
  propertyId: string
}

const AddReviewAction = ({propertyId}: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)
  return (
    <>
      <Button onClick={onOpen} disableRipple={true} isLoading={false} sx={{
        display: {
          xs: 'none',
          md: 'flex'
        }, alignItems: 'center', color: '#222222', gap: '8px', textDecoration: 'underline', p: 0,
        ':hover': {
          textDecoration: 'underline',
          background: 'none'
        }
      }}>Add review</Button>
      <IconButton onClick={onOpen} sx={{
        display: {
          xs: 'block',
          md: 'none',
        },
        py: 0
      }}>
        <Star color={'gold'} fill={'gold'}/>
      </IconButton>
      <Modal onClose={onClose} open={open}><ReviewForm onClose={onClose}
                                                       propertyId={propertyId}/></Modal>
    </>
  );
};

export default AddReviewAction;