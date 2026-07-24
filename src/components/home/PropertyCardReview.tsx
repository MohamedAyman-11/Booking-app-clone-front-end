import {Box, Stack, Typography} from "@mui/material";
import {getRatingLabel} from "../../utils/functions.ts";

interface Props {
  averageRating: number
  ratingsQuantity: number
}

const PropertyCardReview = ({averageRating, ratingsQuantity}: Props) => {
  return (
    <Stack direction={'row'} sx={{
      alignItems: 'center',
      mt: '10px'
    }}>
      <Box sx={(theme) => ({
        padding: '4px',
        color: '#fff',
        fontWeight: 500,
        bgcolor: theme.palette.brand.primary,
        mr: '10px',
        borderRadius: '5px'
      })}>{averageRating.toFixed(1)}</Box>
      <Stack>
        <Typography component={'span'} sx={{
          color: '#1A1A1A',
          fontSize: '12px',
          fontWeight: 400
        }}>{getRatingLabel(averageRating, ratingsQuantity)}</Typography>
        <Typography component={'span'} sx={{
          color: '#595959',
          fontSize: '12px'
        }}>{ratingsQuantity} reviews</Typography>
      </Stack>
    </Stack>
  );
};

export default PropertyCardReview;