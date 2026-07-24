import {Box, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography,} from "@mui/material";
import {TriangleAlert} from "lucide-react";
import toast from "react-hot-toast";
import Button from "./Button.tsx";
import useInvalidateQueries from "../../hooks/handlers/useInvalidateQueries.ts";
import {handleAxiosError} from "../../utils/functions.ts";
import useDeleteMyReview from "../../hooks/user/useDeleteMyReview.ts";
import {QUERY_KEYS} from "../../constants";

interface Props {
  reviewId: string;
  propertyName: string
  onCloseDeleteModal: () => void;
}

const DeleteReviews = ({reviewId, propertyName, onCloseDeleteModal}: Props) => {
  const {mutateAsync, isPending} = useDeleteMyReview();
  const {invalidateQueries} = useInvalidateQueries();

  const onDeleteReviewHandler = async () => {
    try {
      await mutateAsync({id: reviewId});

      toast.success("Review deleted successfully");

      await invalidateQueries(
        QUERY_KEYS.userReviews,
        QUERY_KEYS.globalProperties,
        QUERY_KEYS.property
      );

      onCloseDeleteModal();
    } catch (e) {
      handleAxiosError(e);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: 72,
          height: 72,
          mx: "auto",
          mt: 3,
          borderRadius: "50%",
          bgcolor: "#FFF4E5",
          border: "1px solid #F8D8A8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TriangleAlert
          size={36}
          color="#ED6C02"
          strokeWidth={2.3}
        />
      </Box>

      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "1.55rem",
          pb: 1,
        }}
      >
        Delete Review
      </DialogTitle>

      <DialogContent sx={{px: 4}}>
        <DialogContentText
          sx={{
            textAlign: "center",
            color: "text.secondary",
            fontSize: 15,
            lineHeight: 1.9,
          }}
        >
          You are about to permanently delete your review for{" "}
          <strong>{propertyName}</strong>.
          <br/>
          Your rating and comment will be removed and will no longer appear on
          the property's page.
        </DialogContentText>

        <Typography
          sx={{
            mt: 2.5,
            textAlign: "center",
            color: "error.main",
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          ⚠️ This action is permanent and cannot be undone.
        </Typography>
      </DialogContent>

      <DialogActions
        sx={{
          px: 3,
          pb: 3,
          pt: 1,
          gap: 1.5,
          flexDirection: "column",
        }}
      >
        <Button
          fullWidth
          variant="contained"
          color="error"
          isLoading={isPending}
          onClick={onDeleteReviewHandler}
          sx={{
            py: 1.3,
            borderRadius: 2,
            fontWeight: 700,
            textTransform: "none",
          }}
        >
          Delete Review
        </Button>

        <Button
          isLoading={false}
          fullWidth
          variant="outlined"
          onClick={onCloseDeleteModal}
          sx={{
            py: 1.3,
            borderRadius: 2,
            textTransform: "none",
            borderColor: "#D0D5DD",
            color: "text.primary",
            "&:hover": {
              borderColor: "#98A2B3",
              bgcolor: "#F9FAFB",
            },
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </>
  );
};

export default DeleteReviews;