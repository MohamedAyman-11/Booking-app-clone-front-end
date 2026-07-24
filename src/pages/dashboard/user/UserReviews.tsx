import {Box} from "@mui/material";
import MyReviews from "../../../components/dashboard/user/reviews/MyReviews.tsx";

const UserReviews = () => {
  return (
    <Box sx={{py: '20px', px: '20px'}}>
      <MyReviews/>
    </Box>
  );
};

export default UserReviews;