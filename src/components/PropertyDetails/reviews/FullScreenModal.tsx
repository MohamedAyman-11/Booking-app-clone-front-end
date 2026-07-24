import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {type TransitionProps} from '@mui/material/transitions';
import {forwardRef, type ReactElement, type Ref} from "react";
import type {Review} from "../../../interfaces";
import GuestReviewCard from "./GuestReviewCard.tsx";

interface Props {
  open: boolean,
  handleClose: () => void
  reviews: Review[];
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<unknown>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenModal = ({open, handleClose, reviews}: Props) => {
  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        slots={{
          transition: Transition,
        }}
      >
        <AppBar sx={{position: 'relative', bgcolor: '#fff', color: '#000',}}>
          <Toolbar>
            <Typography sx={{flex: 1}} variant="h6" component="div">
              All Reviews ({reviews.length})
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          {reviews.map(review => (<GuestReviewCard key={review._id} review={review}/>))}
        </List>
      </Dialog>
    </>
  );
}
export default FullScreenModal