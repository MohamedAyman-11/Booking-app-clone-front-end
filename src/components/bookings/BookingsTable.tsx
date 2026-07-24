import {Box, Paper, Typography} from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import type {Booking} from "../../interfaces";
import {formatPrice, getBookingStatusColor, getPaymentStatusColor, textSlice} from "../../utils/functions.ts";
import Avatar from "../layout/Avatar.tsx";
import dayjs from "dayjs";
import {Users} from "lucide-react";
import Chip from "@mui/material/Chip";

const head = ['Property', 'User', 'Check-in', 'Check-out', 'Total price', 'Guests', 'Status', 'Payment Status']

interface Props {
  bookings: Booking[]
}

const BookingsTable = ({bookings}: Props) => {
  return (
    <TableContainer sx={{borderRadius: '12px', boxShadow: '0 0 10px #eee', overflowX: 'auto'}} component={Paper}>
      <Table sx={{minWidth: 650, border: '1px solid #eee'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            {head.map(el => <TableCell key={el} align="left">{el}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow
              key={booking._id}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell component="th" scope="row">
                <Box sx={{display: 'flex', alignItems: 'center', gap: '20px', width: '100%'}}>
                  <Box component={'img'} src={booking.property.images[0].url}
                       sx={{width: '120px', height: '80px', borderRadius: '8px'}}/>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <Typography sx={{color: '#1A1A1A', fontWeight: 500, fontSize: '16px'}}>
                      {textSlice(booking.property.name, 25)}
                    </Typography>
                    <Typography sx={{color: '#595959', fontSize: '13px'}}>
                      {booking.property.propertyType}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell component="th" scope="row">
                <Box sx={{display: 'flex', alignItems: 'center', gap: '20px', width: '100%'}}>
                  <Avatar user={booking.user}/>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <Typography sx={{color: '#1A1A1A', fontWeight: 500, fontSize: '16px'}}>
                      {booking.user.name}
                    </Typography>
                    <Typography sx={{color: '#595959', fontSize: '13px'}}>
                      {booking.user.email}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography sx={{color: '#1A1A1A', fontWeight: 500, fontSize: '16px'}}>
                  {dayjs(booking.checkIn).format("DD-MMM-YYYY")}
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography sx={{color: '#1A1A1A', fontWeight: 500, fontSize: '16px'}}>
                  {dayjs(booking.checkOut).format("DD-MMM-YYYY")}
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography sx={{color: '#1A1A1A', fontWeight: 500, fontSize: '16px'}}>
                  {formatPrice(booking.totalPrice)}
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Box sx={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                  <Users size={16} color={'#1A1A1A'}/>
                  <Typography sx={{color: '#1A1A1A', fontWeight: 500, fontSize: '16px'}}>
                    {booking.guests}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell component="th" scope="row">
                <Chip
                  label={booking.status}
                  sx={{
                    ...getBookingStatusColor(booking.status),
                    fontWeight: 600,
                    borderRadius: "12px",
                  }}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <Chip
                  label={booking.paymentStatus}
                  sx={{
                    ...getPaymentStatusColor(booking.paymentStatus),
                    fontWeight: 600,
                    borderRadius: "12px",
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookingsTable;