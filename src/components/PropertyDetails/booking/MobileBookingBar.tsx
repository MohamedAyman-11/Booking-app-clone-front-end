import {alpha, Box, IconButton} from "@mui/material";
import BookingBoxHeader from "./BookingBoxHeader.tsx";
import Button from "../../ui/Button.tsx";
import type {Property} from "../../../interfaces";
import Modal from "../../ui/Modal.tsx";
import Booking from "./Booking.tsx";
import {useState} from "react";
import {XIcon} from "lucide-react";

interface Props {
  property: Property
}

const MobileBookingBar = ({property}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          left: 16,
          right: 16,
          display: {
            xs: 'flex',
            lg: 'none'
          },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: "0 12px 30px rgba(0,0,0,.12)",
          border: "1px solid",
          borderColor: "divider",
          p: 2,
          zIndex: 1300,
          maxWidth: 600,
          mx: "auto",
        }}
      >
        <BookingBoxHeader
          pricePerNight={property.pricePerNight}
          discount={property.discount}
        />
        <Button
          onClick={handleOpen}
          variant="contained"
          size="large"
          sx={{
            minWidth: 140,
            borderRadius: 2,
            px: 4,
            whiteSpace: "nowrap",
            fontWeight: 700,
            fontSize: 16,
            transition: 'all 0.3s ease',
            ':hover': {
              transform: 'translateY(-2px) scale(1.001)',
              boxShadow: `0 1px 10px ${alpha('#007aff', 0.9)}`
            }
          }}
          isLoading={false}
        >
          Reserve
        </Button>
      </Box>
      <Modal onClose={handleClose} open={open}>
        <IconButton disableRipple={true} sx={theme => ({
          border: '1px solid',
          borderColor: 'divider',
          width: 'fit-content',
          p: 1,
          m: '10px 10px 0 auto',
          '& svg': {transition: 'all 0.3s ease'},
          ':hover svg': {color: theme.palette.error.light, rotate: '90deg'}
        })} onClick={handleClose}><XIcon/></IconButton>
        <Booking property={property}/>
      </Modal>
    </>
  );
};

export default MobileBookingBar;