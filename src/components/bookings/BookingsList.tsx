import {Box} from "@mui/material";
import HeaderInfo from "../ui/HeaderInfo.tsx";
import BookingsTable from "./BookingsTable.tsx";
import NotFound from "../ui/NotFound.tsx";
import useGetAllBookings from "../../hooks/booking/useGetAllBookings.ts";
import LoadingSpinner from "../../svg/LoadingSpinner.tsx";

const BookingsList = () => {
  const {data, isPending} = useGetAllBookings({page: 1})
  if (isPending) return <LoadingSpinner/>
  return (
    <Box>
      <HeaderInfo title={'Reservations'} description={'Manage and view your property reservations'}/>
      {data.length ?
        <BookingsTable bookings={data}/> : <NotFound message={'No bookings have been added yet'}/>
      }
    </Box>
  );
};

export default BookingsList;