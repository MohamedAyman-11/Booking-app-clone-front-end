import {Box, Container} from "@mui/material";
import PropertyPreview from "../../../components/dashboard/show-property/PropertyPreview.tsx";

const Show = () => {
  return (
    <Box sx={{py: '20px', px: '20px'}}>
      <Container maxWidth={'xl'}>
        <PropertyPreview/>
      </Container>
    </Box>
  );
};

export default Show;