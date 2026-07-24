import {useQuery} from "@tanstack/react-query";
import {QUERY_KEYS} from "../../constants";
import {getAllBookings} from "../../api/booking.ts";

interface Pagination {
  page: number
}

const useGetAllBookings = ({page}: Pagination) => {
  return useQuery({
    queryKey: QUERY_KEYS.bookings,
    queryFn: () => getAllBookings({page})
  })
}

export default useGetAllBookings;