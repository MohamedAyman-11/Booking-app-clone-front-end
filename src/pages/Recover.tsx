import {Box, Container, Stack, Typography} from "@mui/material";
import Logo from "../svg/Logo.tsx";
import Avatar from "@mui/material/Avatar";
import RecoveryForm from "../components/RecoveryForm.tsx";


const Login = () => {
  return (
    <Box sx={{py: '40px'}}>
      <Container maxWidth={'lg'}>
        <Box sx={{mx: 'auto', mb: '20px', maxWidth: '420px', textAlign: 'center'}}>
          <Stack sx={{flexDirection: 'row', gap: '10px', justifyContent: 'center', alignItems: 'center', mb: '20px'}}>
            <Avatar src="/public/favicon.png" sx={{
              borderRadius: 0,
              width: '40px',
              height: '40px'
            }}/>
            <Logo color={'#0057b8'}/>
          </Stack>
          <Typography component={'h3'}
                      sx={{color: '#1A1A1A', fontSize: '24px', fontWeight: 'bold', mb: '5px', textAlign: 'start'}}>
            Enter your email address
          </Typography>
          <Typography component={'span'}
                      sx={{color: '#1A1A1A', fontSize: '14px', mb: '5px', textAlign: 'start', display: 'block'}}>
            Enter the email address linked to your Booking.com account
          </Typography>
        </Box>
        <RecoveryForm/>
      </Container>
    </Box>
  );
};

export default Login;