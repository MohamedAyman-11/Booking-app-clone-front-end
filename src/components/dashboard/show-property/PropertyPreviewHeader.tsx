import {Box, Stack, Typography} from "@mui/material";
import type {Property} from "../../../interfaces";
import Actions from "./Actions.tsx";

interface Props {
  property: Property
}

const PropertyPreviewHeader = ({property}: Props) => {
  return (
    <Stack direction={'row'} sx={{
      mb: '15px',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box className={'property-name'} sx={{flexGrow: 1, display: 'flex', alignItems: 'center', gap: '5px'}}>
        <Typography component={'h2'} sx={{
          color: '#1A1A1A',
          fontSize: {
            xs: '16px',
            md: '26px'
          },
          fontWeight: 'bold',
        }}>
          {property.name}
        </Typography>
        <Typography sx={{
          color: '#595959', fontSize: {
            xs: '13px',
            md: '16px'
          },
        }}>({property.propertyType})</Typography>
      </Box>
      {property.status === 'pending' && <Actions property={property}/>}
    </Stack>
  );
};

export default PropertyPreviewHeader;