import PropertyDetailsContent from "../components/PropertyDetails/PropertyDetailsContent.tsx";
import {Box, Container} from "@mui/material";

const PropertyDetails = () => {
  return (
    <Box sx={{pt: '20px', pb: {xs: '80px', lg: '50px'}}}>
      <Container maxWidth={'xl'}>
        <PropertyDetailsContent/>
      </Container>
    </Box>
  );
};

export default PropertyDetails;