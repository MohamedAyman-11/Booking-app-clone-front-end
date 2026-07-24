import {Box, Typography} from "@mui/material";

interface Props {
  description: string
}

const PropertyDescription = ({description}: Props) => {
  return (
    <Box sx={{
      py: '30px',
      borderTop: '1.5px solid #ddd',
      borderBottom: '1.5px solid #ddd',
      maxWidth: '700px', mx: {
        sx: 'auto',
        sm: '0'
      }
    }}>
      <Typography>
        {description}
      </Typography>
    </Box>
  );
};

export default PropertyDescription;