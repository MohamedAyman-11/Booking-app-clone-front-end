import {Stack, Typography} from "@mui/material";
import {formatPrice, getPriceAfterDiscount} from "../../../utils/functions.ts";

interface Props {
  pricePerNight: number,
  discount?: number
}

const BookingBoxHeader = ({pricePerNight, discount}: Props) => {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 3
      }}
    >
      <Typography
        sx={{
          fontSize: {xs: 18, sm: 28},
          fontWeight: 700,
          display: "flex",
          alignItems: "end",
          gap: .5,
        }}
      >
        $ {formatPrice(getPriceAfterDiscount(pricePerNight, discount))}
        <Typography
          component="span"
          sx={{
            fontSize: {xs: 14, sm: 16},
            color: "text.secondary",
            fontWeight: 400,
          }}
        >
          / night
        </Typography>
      </Typography>
    </Stack>
  );
};

export default BookingBoxHeader;