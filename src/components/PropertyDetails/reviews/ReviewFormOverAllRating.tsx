import {Box, Typography} from "@mui/material";
import Rating from "@mui/material/Rating";
import {type Dispatch, memo, type SetStateAction, type SyntheticEvent} from "react";
import {StarBorderOutlined} from "@mui/icons-material";


interface Props {
  overAllRating: number | null
  setOverAllRating: Dispatch<SetStateAction<number | null>>
}

const ReviewFormOverAllRating = ({overAllRating, setOverAllRating}: Props) => {
  const onChange = (_: SyntheticEvent, newValue: number | null) => {
    setOverAllRating(newValue)
  }
  return (
    <Box>
      <Box>
        <Typography sx={{color: '#1A1A1A', fontWeight: 'bold', fontSize: '18px'}}>Overall rating</Typography>
        <Typography sx={{color: '#595959', fontSize: '13px'}}>How would you rate your over experience</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mt: 2,
        }}
      >
        <Rating
          name="hover-feedback"
          value={overAllRating}
          precision={0.5}
          onChange={onChange}

          emptyIcon={
            <StarBorderOutlined
              style={{opacity: 1}}
            />
          }
          sx={{
            "& .MuiRating-icon": {
              fontSize: "30px",
              transition: "all 0.2s ease",
              strokeWidth: 0
            },

            '& .MuiRating-iconEmpty svg': {
              fontSize: '30px'
            },
            "& .MuiRating-iconFilled": {},
          }}
        />
      </Box>
    </Box>
  );
};

export default memo(ReviewFormOverAllRating);