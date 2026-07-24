import {Box, Typography} from "@mui/material";
import {MapPin} from "lucide-react";
import {textSlice} from "../../utils/functions.ts";

interface Props {
  city: string;
  country: string
}


const PropertyCardLocation = ({country, city}: Props) => {
  return (
    <Box sx={{display: 'flex', alignItems: 'flex-start', gap: '3px', mt: '5px'}}>
      <MapPin size={15} color={'#595959'}/>
      <Typography component={'span'} sx={{
        color: '#595959',
        fontSize: '12px',
        fontStyle: 'italic'
      }}>{textSlice(city)}, {country}</Typography>
    </Box>
  );
};

export default PropertyCardLocation;