import {Box, Typography} from "@mui/material";

const MyReviewsHeaderInfo = () => {
  return (
    <Box>
      <Typography sx={{fontSize: {xs: '24px', sm: '30px'}, fontWeight: 'bold'}}>
        My reviews
      </Typography>
      <Typography sx={{color: '#595959', fontSize: {xs: '13px', sm: '18px'}}}>
        Reviews you've written for properties you've stayed in.
      </Typography>
    </Box>
  );
};

export default MyReviewsHeaderInfo;