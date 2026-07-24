import {useMutation} from "@tanstack/react-query";
import {createBooking} from "../../api/booking.ts";

const useCreateBooking = () => {
  return useMutation({
    mutationFn: createBooking
  })
}

export default useCreateBooking