import {Box, Stack, Typography} from "@mui/material";
import PropertySaved from "./PropertySaved.tsx";
import SaveProperty from "./SaveProperty.tsx";
import AddReviewAction from "./reviews/AddReviewAction.tsx";

interface Props {
  name: string,
  isSaved: boolean,
  propertyId: string,
  propertyType: string
}

const PropertyDetailsHeader = ({name, isSaved, propertyId, propertyType}: Props) => {
  return (
    <Stack direction={'row'} sx={{
      alignItems: 'center',
      gap: '10px',
      mb: '15px'
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
          {name}
        </Typography>
        <Typography sx={{
          color: '#595959', fontSize: {
            xs: '13px',
            md: '16px'
          },
        }}>({propertyType})</Typography>
      </Box>
      <Box className={'actions'} sx={{display: 'flex', alignItems: 'center'}}>
        <AddReviewAction propertyId={propertyId}/>
        {isSaved ? <PropertySaved propertyId={propertyId} isSaved={isSaved}/> :
          <SaveProperty propertyId={propertyId} isSaved={isSaved}/>}
      </Box>
    </Stack>
  );
};

export default PropertyDetailsHeader;