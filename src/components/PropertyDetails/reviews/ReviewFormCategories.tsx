import {Box, Typography} from "@mui/material";
import ReviewFormCategoryRating from "./ReviewFormCategoryRating.tsx";
import {memo} from "react";

interface Ratings {
  cleanliness: number
  accuracy: number
  check_in: number
  communication: number
  location: number
  value: number
}

interface Props {
  handleChange: (key: keyof Ratings, value: number) => void
  ratings: Ratings
}

const ReviewFormCategories = ({handleChange, ratings}: Props) => {


  return (
    <Box>
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 700,
          mb: 0.5,
        }}
      >
        Category ratings
      </Typography>

      <Typography
        sx={{
          color: "#6B6B6B",
          mb: 3,
          fontSize: 14,
        }}
      >
        Rate specific aspects of your stay
      </Typography>

      <Box
      >
        <ReviewFormCategoryRating
          label="Cleanliness"
          value={ratings.cleanliness}
          onChange={(v: number) => handleChange("cleanliness", v)}
        />

        <ReviewFormCategoryRating
          label="Accuracy"
          value={ratings.accuracy}
          onChange={(v: number) => handleChange("accuracy", v)}
        />

        <ReviewFormCategoryRating
          label="Check-in"
          value={ratings.check_in}
          onChange={(v: number) => handleChange("check_in", v)}
        />
        <ReviewFormCategoryRating
          label="Communication"
          value={ratings.communication}
          onChange={(v: number) => handleChange("communication", v)}
        />

        <ReviewFormCategoryRating
          label="Location"
          value={ratings.location}
          onChange={(v: number) => handleChange("location", v)}
        />

        <ReviewFormCategoryRating
          label="Value for money"
          value={ratings.value}
          onChange={(v: number) => handleChange("value", v)}
        />
      </Box>
    </Box>
  );
};

export default memo(ReviewFormCategories);