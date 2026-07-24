import {IconButton, Stack} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {useState} from "react";
import Modal from "./Modal.tsx";
import DeleteReviews from "./DeleteReviews.tsx";
import UpdateReview from "../dashboard/user/reviews/UpdateReview.tsx";
import type {UserReview} from "../../interfaces";

interface Props {
  review: UserReview
}

const MyReviewsCardAction = ({review}: Props) => {
  const [openDelete, setOpenDelete] = useState<boolean>(false)
  const handelOpenDelete = () => setOpenDelete(true);
  const handelCloseDelete = () => setOpenDelete(false);
  const [openUpdate, setOpenUpdate] = useState<boolean>(false)
  const handelOpenUpdate = () => setOpenUpdate(true);
  const handelCloseUpdate = () => setOpenUpdate(false);
  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          mx: {
            xs: 'auto !important',
            lg: '0 !important'
          }
        }}
      >
        <IconButton
          onClick={handelOpenUpdate}
          sx={{
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <EditOutlinedIcon/>
        </IconButton>

        <IconButton
          onClick={handelOpenDelete}
          sx={{
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <DeleteOutlineOutlinedIcon/>
        </IconButton>
      </Stack>
      <Modal open={openDelete} onClose={handelCloseDelete} maxWidth={'550px'}>
        <DeleteReviews reviewId={review._id} propertyName={review.property.name}
                       onCloseDeleteModal={handelCloseDelete}/>
      </Modal>
      <Modal open={openUpdate} onClose={handelCloseUpdate} maxWidth={'550px'}>
        <UpdateReview onClose={handelCloseUpdate} review={review}/>
      </Modal>
    </>
  );
};

export default MyReviewsCardAction;
