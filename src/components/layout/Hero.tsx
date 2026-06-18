import { Box, Container, Typography } from '@mui/material';

const Hero = () => {
  const user = '';
  return (
    <Box
      sx={(theme)=>({
        py: '80px',
        background:theme.palette.brand.primary
      })}
    >
      <Container maxWidth="lg">
        {user ? (
          <Box>
            <Typography
              component={'h3'}
              sx={{
                fontSize: {
                  xs:'34px',
                  md:'48px'
                },
                color: '#fff',
                fontWeight: 'bold',
              }}
            >
              Where to next, {'Mohamed'}?
            </Typography>
            <Typography
              component={'p'}
              sx={{
                fontSize: {
                  xs:'16px',
                  md:'24px'
                },
                my: '5px',
                color: '#fff',
              }}
            >
              Find exclusive Genius rewards in every corner of the world!
            </Typography>
          </Box>
        ) : (
          <Box>
            <Typography
              component={'h3'}
              sx={{
                fontSize: {
                  xs:'34px',
                  md:'48px'
                },
                color: '#fff',
                fontWeight: 'bold',
              }}
            >
              Find your next stay
            </Typography>
            <Typography
              component={'p'}
              sx={{
                fontSize: {
                  xs:'16px',
                  md:'24px'
                },
                my: '5px',
                color: '#fff',
              }}
            >
              Search deals on hotels, homes, and much more...
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Hero;
