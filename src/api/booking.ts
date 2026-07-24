import {bookingInstance} from "../lib/axios.ts";

interface BookingProps {
  property: string,
  checkIn: string,
  checkOut: string,
  guests: number,
}

export const createBooking = async ({...userdata}: BookingProps) => {
  const {data} = await bookingInstance.post('/', userdata)
  return data
}
export const getAllBookings = async ({page}: { page: number }) => {
  const {data} = await bookingInstance.get('/', {params: {page}})
  return data.data.bookings
}