import {Box, Stack, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";

interface Props {
  name?: string,
  url?: string
}

const PropertyHostDetails = ({name, url}: Props) => {
  return (
    <Box sx={{
      py: '20px'
    }}>
      <Stack>
        <Box>
          <Stack direction={'row'} sx={{
            alignItems: 'center',
            gap: '15px'
          }}>
            <Avatar
              src={url}
              alt={'Host Photo'} sx={{
              width: '50px',
              height: '50px'
            }}/>
            <Typography sx={{
              fontSize: '18px',
              color: '#1A1A1A',
              fontWeight: 'bold'
            }}>
              Hosted by {name}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default PropertyHostDetails;