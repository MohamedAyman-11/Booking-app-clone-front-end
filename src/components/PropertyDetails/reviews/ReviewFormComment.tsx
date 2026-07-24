import {Box, Typography} from "@mui/material";
import Input from "../../ui/Input.tsx";
import {type ChangeEvent, memo} from "react";

interface Props {
  review: string,
  onSetReviewComment: (comment: string) => void,
  err: string
  setErr: (val: string) => void,
}

const ReviewFormComment = ({review, onSetReviewComment, err, setErr}: Props) => {
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onSetReviewComment(e.target.value)
    if (review.trim().length > 15) setErr('')
  }
  return (
    <Box sx={{mb: '20px'}}>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: 700,
          color: "#1A1A1A",
          mb: 0.5,
        }}
      >
        Your review
      </Typography>

      <Typography
        sx={{
          fontSize: "14px",
          color: "#6B6B6B",
          mb: 2,
        }}
      >
        Write a few words about your stay
      </Typography>

      <Input
        fullWidth
        multiline
        rows={5}
        value={review}
        onChange={onChangeHandler}
        placeholder="What did you like? What could be improved?"
        slotProps={{
          htmlInput: {
            maxLength: 1000,
            minLength: 10
          }
        }}
        error={!!err}
        helperText={err}
        sx={{
          "& textarea": {
            fontSize: "15px",
            lineHeight: 1.6,
            color: "#1A1A1A",
          },
          '& p': {ml: 0},
          "& textarea::placeholder": {
            color: "#8C8C8C",
            opacity: 1,
          },
        }}
      />

    </Box>
  );
};

export default memo(ReviewFormComment);