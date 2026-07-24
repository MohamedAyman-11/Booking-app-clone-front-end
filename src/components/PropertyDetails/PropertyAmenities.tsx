import {Box, Stack, Typography} from "@mui/material";
import type {TAmenities} from "../../types";
import {AMENITIES_DATA} from "../../constants";


interface Props {
  amenities: TAmenities[]
}

const PropertyAmenities = ({amenities}: Props) => {
  return (
    <Box sx={{
      pt: '20px',
      py: '40px'
    }}>
      <Typography sx={{
        fontSize: '20px',
        fontWeight: 'bold'
      }}>
        Most popular facilities
      </Typography>
      <Stack direction={'row'} sx={{
        alignItems: 'center',
        gap: '30px',
        mt: '20px',
        flexWrap: 'wrap',
        rowGap: '25px'
      }}>
        {amenities.map((amenity) => {
          const Icon = AMENITIES_DATA[amenity].icon
          const label = AMENITIES_DATA[amenity].label
          return <Box key={label} sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            border: '1px solid #e7e7e7',
            p: '12px',
            borderRadius: '12px'
          }}>
            <Icon color={'#008234'}/>
            <Typography sx={{
              color: '#1A1A1A'
            }}>
              {label}
            </Typography>
          </Box>
        })}
      </Stack>
    </Box>
  );
};

export default PropertyAmenities;