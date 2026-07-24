import {useState} from "react";
import {alpha, Box, Paper,} from "@mui/material";
import ReviewFormOverAllRating from "../../../PropertyDetails/reviews/ReviewFormOverAllRating.tsx";
import ReviewFormCategories from "../../../PropertyDetails/reviews/ReviewFormCategories.tsx";
import ReviewFormComment from "../../../PropertyDetails/reviews/ReviewFormComment.tsx";
import Button from "../../../ui/Button.tsx";
import ReviewFormHeader from "../../../PropertyDetails/reviews/ReviewFormHeader.tsx";
import type {UserReview} from "../../../../interfaces";
import toast from "react-hot-toast";
import useInvalidateQueries from "../../../../hooks/handlers/useInvalidateQueries.ts";
import {QUERY_KEYS} from "../../../../constants";
import {handleAxiosError} from "../../../../utils/functions.ts";
import useUpdateReviews from "../../../../hooks/useUpdateReviews.ts";

interface Props {
  onClose: () => void;
  review: UserReview
}

const defaultRatings = {
  cleanliness: 4.5,
  accuracy: 4.5,
  check_in: 4.5,
  communication: 4.5,
  location: 4.5,
  value: 4.5,
};

const msgValidation = (comment: string) => {
  if (!comment.trim()) return "Review comment is required";
  if (comment.trim().length < 10)
    return "Review comment must be at least 10 characters";
  return "";
};

const UpdateReview = ({onClose, review}: Props) => {
  const {invalidateQueries} = useInvalidateQueries()
  const {isPending, mutateAsync} = useUpdateReviews()
  const [err, setErr] = useState("");
  const [overAllRating, setOverAllRating] = useState<number | null>(4.5);
  const [reviewMsg, setReviewMsg] = useState(review.message || '');
  const [ratings, setRatings] = useState(review.categories);
  console.log(review.categories)
  console.log(ratings)
  const handleChange = (
    key: keyof typeof ratings,
    value: number
  ) => {
    setRatings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onCloseHandler = () => {
    onClose();
    setReviewMsg("");
    setRatings(defaultRatings);
    setOverAllRating(4.5);
  };
  const onUpdateReviewHandler = async () => {
    const err = msgValidation(reviewMsg)
    setErr(err);
    if (err) return
    try {
      await mutateAsync({id: review._id, overAllRating: overAllRating || 4.5, categories: ratings, message: reviewMsg})
      onCloseHandler()
      toast.success('Review updated successfully')
      await invalidateQueries(QUERY_KEYS.globalProperties,
        QUERY_KEYS.property, QUERY_KEYS.savedProperties, QUERY_KEYS.myProperties, QUERY_KEYS.userReviews, QUERY_KEYS.adminReviews)
    } catch (e) {
      handleAxiosError(e)
    }
  }
  const onSetReviewComment = (comment: string) =>
    setReviewMsg(comment);

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: 700,
        bgcolor: "#fff",
        borderRadius: 4,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        maxHeight: "90vh",
        boxShadow: "0 20px 60px rgba(0,0,0,.12)",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          px: 3,
          py: 2,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <ReviewFormHeader onClose={onCloseHandler}/>
      </Box>

      {/* Scrollable Content */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          px: 3,
          py: 3,
        }}
      >
        {/* Overall Rating */}
        <Paper
          elevation={0}
          sx={{
            p: 2,
            borderRadius: 3,
            bgcolor: "grey.50",
            border: "1px solid",
            borderColor: "grey.200",
          }}
        >

          <ReviewFormOverAllRating
            overAllRating={overAllRating}
            setOverAllRating={setOverAllRating}
          />
        </Paper>


        {/* Categories */}
        <Paper
          elevation={0}
          sx={{
            p: 2,
            my: 3,
            borderRadius: 3,
            bgcolor: "grey.50",
            border: "1px solid",
            borderColor: "grey.200",
          }}
        >

          <ReviewFormCategories
            handleChange={handleChange}
            ratings={ratings}
          />
        </Paper>

        {/* Review */}
        <Paper
          elevation={0}
          sx={{
            p: 2,
            borderRadius: 3,
            bgcolor: "grey.50",
            border: "1px solid",
            borderColor: "grey.200",
          }}
        >
          <ReviewFormComment
            review={reviewMsg}
            onSetReviewComment={onSetReviewComment}
            err={err}
            setErr={setErr}
          />
        </Paper>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          p: 3,
          display: "flex",
          gap: 2,
          justifyContent: "flex-end",
          borderTop: "1px solid",
          borderColor: "divider",
          bgcolor: "#fff",
        }}
      >
        <Button
          isLoading={false}
          variant="outlined"
          fullWidth
          size="large"
          onClick={onCloseHandler}
          sx={{
            minWidth: 150,
            borderRadius: 3,
            fontWeight: 600,
            transition: ".3s",
            "&:hover": {
              transform: "translateY(-2px)",
              bgcolor: "grey.100",
              boxShadow: `0 8px 20px ${alpha("#000", 0.08)}`,
            },
          }}
        >
          Cancel
        </Button>

        <Button
          onClick={onUpdateReviewHandler}
          fullWidth
          variant="contained"
          size="large"
          isLoading={isPending}
          sx={{
            minWidth: 180,
            borderRadius: 3,
            fontWeight: 700,
            background:
              "linear-gradient(135deg,#007AFF,#2A7EDA)",
            transition: ".3s",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: `0 12px 25px ${alpha(
                "#007AFF",
                0.35
              )}`,
            },
          }}
        >
          Update Review
        </Button>
      </Box>
    </Paper>
  );
};

export default UpdateReview;