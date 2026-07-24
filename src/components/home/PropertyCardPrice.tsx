import {Stack, Typography} from "@mui/material";
import {formatPrice, getPriceAfterDiscount} from "../../utils/functions.ts";

interface Props {
  price: number,
  discount?: number
}

const PropertyCardPrice = ({price, discount}: Props) => {
  return (
    <Stack direction={'row'} sx={{alignItems: 'center', justifyContent: 'flex-end', mt: '10px'}}>
      {/*Price Before Discount*/}
      {discount && discount > 0 ? <Typography sx={{
        fontSize: '14px',
        color: '#d4111e',
        textDecoration: 'line-through',
        fontWeight: 500,
        ml: '6px'
      }}>
        $ {formatPrice(price)}
      </Typography> : null}
      <Typography sx={{
        fontSize: '16px',
        color: '#1A1A1A',
        fontWeight: 500,
        ml: '6px'
      }}>
        $ {formatPrice(getPriceAfterDiscount(price, discount ? discount : undefined))}
      </Typography>
      <Typography component={'span'} sx={{
        color: '#595959',
        fontSize: '12px',
        ml: '3px',
        display: 'block'
      }}>
        / night
      </Typography>
    </Stack>
  );
};

export default PropertyCardPrice;