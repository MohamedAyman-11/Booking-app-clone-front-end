import {Box, Typography} from "@mui/material";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import {memo} from "react";

type Props = {
  label: string;
  value: number;
  onChange: (value: number) => void;
};

const ReviewFormCategoryRating = ({label, value, onChange,}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 3,
        py: 1,
      }}
    >
      <Typography
        sx={{
          minWidth: 120,
          fontSize: "16px",
          color: "#1A1A1A",
          fontWeight: 500,
        }}
      >
        {label}
      </Typography>

      <Rating
        value={value}
        precision={0.5}
        onChange={(_, newValue) => {
          if (newValue) onChange(newValue);
        }}
        icon={<StarIcon fontSize="inherit"/>}
        emptyIcon={<StarBorderIcon fontSize="inherit"/>}
        sx={{
          "& .MuiRating-icon": {
            fontSize: 25,
          },

          "& .MuiRating-iconHover": {
            transform: "scale(1.08)",
            transition: ".2s",
          },
        }}
      />
    </Box>
  );
};

export default memo(ReviewFormCategoryRating);