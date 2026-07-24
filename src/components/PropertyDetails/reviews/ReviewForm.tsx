import {alpha, Box} from "@mui/material";
import ReviewFormHeader from "./ReviewFormHeader.tsx";
import ReviewFormOverAllRating from "./ReviewFormOverAllRating.tsx";
import ReviewFormCategories from "./ReviewFormCategories.tsx";
import {useState} from "react";
import ReviewFormComment from "./ReviewFormComment.tsx";
import Button from "../../ui/Button.tsx";
import useCreateReview from "../../../hooks/property/useCreateReview.ts";
import {handleAxiosError} from "../../../utils/functions.ts";
import useInvalidateQueries from "../../../hooks/handlers/useInvalidateQueries.ts";
import toast from "react-hot-toast";
import {QUERY_KEYS} from "../../../constants";

interface Props {
  onClose: () => void
  propertyId: string
}

const defaultRatings = {
  cleanliness: 4.5,
  accuracy: 4.5,
  check_in: 4.5,
  communication: 4.5,
  location: 4.5,
  value: 4.5,
}
const msgValidation = (comment: string) => {
  if (!comment.trim()) return 'Review comment is required'
  if (comment.trim() && comment.trim().length < 10) return 'Review comment must be 10 character at least'
  return ''
}
const ReviewForm = ({onClose, propertyId}: Props) => {
  const {mutateAsync, isPending} = useCreateReview()
  const {invalidateQueries} = useInvalidateQueries()
  const [err, setErr] = useState<string>('')
  const [overAllRating, setOverAllRating] = useState<number | null>(4.5);
  const [review, setReview] = useState("");
  const [ratings, setRatings] = useState(defaultRatings);

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
    onClose()
    setReview('');
    setRatings(defaultRatings)
    setOverAllRating(4.5)
  }
  const onCreateReviewHandler = async () => {
    const err = msgValidation(review)
    setErr(err);
    if (err) return
    try {
      await mutateAsync({
        propertyId, reviewData: {
          overAllRating: overAllRating || 4.5,
          categories: {
            location: ratings.location,
            communication: ratings.communication,
            check_in: ratings.check_in,
            cleanliness: ratings.cleanliness,
            accuracy: ratings.accuracy,
            value: ratings.value
          },
          message: review
        }
      })
      onCloseHandler()
      toast.success('Review added successfully')
      await invalidateQueries(QUERY_KEYS.globalProperties, QUERY_KEYS.property, QUERY_KEYS.savedProperties, QUERY_KEYS.myProperties)
    } catch (e) {
      handleAxiosError(e)
    }
  }
  const onSetReviewComment = (comment: string) => setReview(comment);
  return (
    <Box
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
          py: 2.5,
          borderBottom: "1px solid",
          borderColor: "divider",
          flexShrink: 0,
        }}
      >
        <ReviewFormHeader onClose={onCloseHandler}/>
      </Box>

      {/* Body */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          px: 3,
          py: 3,
        }}
      >
        {/* Overall Rating */}
        <Box
          sx={{
            p: 3,
            borderRadius: 3,
            border: "1px solid",
            borderColor: "grey.200",
            bgcolor: "#fafafa",
          }}
        >
          <ReviewFormOverAllRating
            overAllRating={overAllRating}
            setOverAllRating={setOverAllRating}
          />
        </Box>

        {/* Categories */}
        <Box
          sx={{
            p: 2,
            my: 3,
            borderRadius: 3,
            border: "1px solid",
            borderColor: "grey.200",
            bgcolor: "#fafafa",
          }}
        >
          <ReviewFormCategories
            handleChange={handleChange}
            ratings={ratings}
          />
        </Box>

        {/* Comment */}
        <Box
          sx={{
            p: 2,
            borderRadius: 3,
            border: "1px solid",
            borderColor: "grey.200",
            bgcolor: "#fafafa",
          }}
        >
          <ReviewFormComment
            review={review}
            onSetReviewComment={onSetReviewComment}
            err={err}
            setErr={setErr}
          />
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          gap: 2,
          borderTop: "1px solid",
          borderColor: "divider",
          bgcolor: "#fff",
          flexShrink: 0,
        }}
      >
        <Button
          isLoading={false}
          fullWidth
          variant="outlined"
          size="large"
          onClick={onCloseHandler}
          sx={{
            minWidth: 150,
            py: 1.4,
            borderRadius: 3,
            fontWeight: 600,
            transition: "all .3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              bgcolor: "grey.100",
              boxShadow: "0 10px 20px rgba(0,0,0,.08)",
            },
          }}
        >
          Cancel
        </Button>

        <Button
          fullWidth
          onClick={onCreateReviewHandler}
          isLoading={isPending}
          variant="contained"
          size="large"
          sx={{
            minWidth: 180,
            py: 1.4,
            borderRadius: 3,
            fontWeight: 700,
            background: "linear-gradient(135deg,#007AFF,#2A7EDA)",
            transition: "all .3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: `0 12px 25px ${alpha("#007AFF", 0.35)}`,
            },
          }}
        >
          Submit Review
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewForm;