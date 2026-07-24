import {Box} from "@mui/material";
import BookingsList from "../../components/bookings/BookingsList.tsx";

const Bookings = () => {
  return (
    <Box sx={{py: '20px', px: '20px'}}>
      <BookingsList/>
    </Box>
  );
};

export default Bookings;