import {alpha, Box, Divider, Stack, Typography} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {useState} from "react";
import type {Dayjs} from "dayjs";
import Button from "../../ui/Button.tsx";
import type {PickerValue} from "@mui/x-date-pickers/internals";
import BookingBoxHeader from "./BookingBoxHeader.tsx";
import BookingBoxGuestsHandler from "./BookingBoxGuestsHandler.tsx";
import type {Property} from "../../../interfaces";
import {handleAxiosError} from "../../../utils/functions.ts";
import useCreateBooking from "../../../hooks/booking/useCreateBooking.ts";
import toast from "react-hot-toast";

interface Props {
  property: Property
}

const Booking = ({property}: Props) => {
  const {mutateAsync, isPending} = useCreateBooking()
  const [checkIn, setCheckIn] = useState<Dayjs | null>(null);
  const [checkOut, setCheckOut] = useState<Dayjs | null>(null);
  const [guests, setGuests] = useState<number>(1)
  const onCheckInChange = (value: PickerValue) => {
    setCheckIn(value);
  }
  const onCheckOutChange = (value: PickerValue) => {
    setCheckOut(value);
  }
  const onReserveHandler = async () => {
    if (!checkIn || !checkOut) return;
    try {
      const checkInDate = checkIn?.format("YYYY-MM-DD");
      const checkOutDate = checkOut?.format("YYYY-MM-DD");
      const data = await mutateAsync({
        checkIn: checkInDate,
        checkOut: checkOutDate,
        guests,
        property: property._id,
      })
      toast.success('Booking created. Redirecting to payment...')
      window.location.href = data.paymentUrl;
    } catch (e) {
      handleAxiosError(e)
    }
  }
  return (
    <Box sx={{
      bgcolor: "#fff",
      border: {
        xs: 'none',
        lg: "1px solid"
      },
      borderColor: {
        xs: 'none',
        lg: 'grey.300'
      },
      borderRadius: "20px",
      p: 3,
      boxShadow: "0 10px 30px rgba(0,0,0,.08)",
      position: "sticky",
      top: 100,
    }}>
      <BookingBoxHeader pricePerNight={property.pricePerNight} discount={property?.discount}/>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            border: "1px solid",
            borderColor: "grey.400",
            borderRadius: "14px",
            mb: 2,
          }}
        >
          <Stack sx={{
            flexDirection: {
              xs: 'column',
              sm: 'row'
            }
          }}>
            <Box sx={{flex: 1}}>
              <Typography sx={{p: '5px 14px '}}>CHECK-IN</Typography>
              <DatePicker
                closeOnSelect={true}
                value={checkIn}
                disablePast
                onChange={onCheckInChange}
                slotProps={{
                  textField: {
                    variant: "outlined",
                    fullWidth: true,
                    sx: {
                      width: '100%',
                      "& fieldset": {
                        border: "none !important",
                      },
                      '& .MuiPickersSectionList-root': {padding: 0, width: '120px'}
                    },
                  },
                }}
              />
            </Box>

            <Divider orientation="vertical" flexItem/>

            <Box sx={{flex: 1,}}>
              <Typography sx={{p: '5px 14px '}}>CHECK-OUT</Typography>
              <DatePicker
                closeOnSelect={true}
                value={checkOut}
                disablePast
                onChange={onCheckOutChange}
                slotProps={{
                  textField: {
                    variant: "outlined",
                    fullWidth: true,
                    sx: {
                      width: '100%',
                      "& fieldset": {
                        border: "none !important",
                      },
                      '& .MuiPickersSectionList-root': {padding: 0, width: '120px'}
                    },
                  },
                }}
              />
            </Box>
          </Stack>
        </Box>
      </LocalizationProvider>
      <BookingBoxGuestsHandler setGuests={setGuests} guests={guests} propertyGuests={property.guests}/>
      <Button
        onClick={onReserveHandler}
        isLoading={isPending}
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          height: 54,
          borderRadius: "14px",
          textTransform: "none",
          fontWeight: 700,
          fontSize: 16,
          transition: 'all 0.3s ease',
          ':hover': {
            transform: 'translateY(-2px) scale(1.001)',
            boxShadow: `0 1px 10px ${alpha('#007aff', 0.9)}`
          }
        }}
      >
        Reserve
      </Button>
    </Box>
  );
};

export default Booking;