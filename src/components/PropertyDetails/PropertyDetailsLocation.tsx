import {Box, Typography} from "@mui/material";
import type {Property} from "../../interfaces";

interface Props {
  property: Property
}

const PropertyDetailsLocation = ({property}: Props) => {
  return (
    <Box sx={{py: '30px'}}>
      <Box>
        <Typography sx={{
          fontSize: '22px',
          color: '#1A1A1A',
          fontWeight: 'bold'
        }}>
          {property.location.city}, {property.location.country}
        </Typography>
      </Box>
      <Box>
        <Typography sx={{
          fontSize: '16px',
          color: '#595959',
        }}>
          {property.guests} guests . {property.bedrooms} bedroom . {property.beds} bed . {property.bathrooms} bath
        </Typography>
      </Box>
    </Box>
  );
};

export default PropertyDetailsLocation;