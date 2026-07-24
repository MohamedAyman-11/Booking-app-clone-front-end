import {Stack, Typography} from "@mui/material";
import Rate from "./Rate.tsx";

interface Props {
  propertyType: string,
  stars: number
}

const PropertyCardContentHeader = ({propertyType, stars}: Props) => {
  return (
    <Stack direction={'row'} sx={{alignItems: 'center', mb: '5px'}}>
      <Typography component={'span'} sx={{
        color: '#595959',
        fontSize: '12px',
        mr: '8px',
        textTransform: 'capitalize'
      }}>{propertyType}</Typography>
      <Rate rate={stars} showEmptyIcon={false}/>
    </Stack>
  );
};

export default PropertyCardContentHeader;