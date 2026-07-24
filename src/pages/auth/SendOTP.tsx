import {Box, Container, Typography} from "@mui/material";
import SendOTPForm from "../../components/auth/SendOTPForm.tsx";


const SendOTP = () => {
  return (
    <Box sx={{py: '100px'}}>
      <Container maxWidth={'xl'}>
        <Box sx={{mx: 'auto', mb: '20px', maxWidth: '420px', textAlign: 'center'}}>
          <Typography component={'h3'}
                      sx={{color: '#1A1A1A', fontSize: '24px', fontWeight: 'bold', mb: '5px', textAlign: 'center'}}>
            Enter your email address
          </Typography>
          <Typography component={'span'}
                      sx={{color: '#1A1A1A', fontSize: '14px', mb: '5px', textAlign: 'center', display: 'block'}}>
            Enter the email address linked to your Booking.com account
          </Typography>
        </Box>
        <SendOTPForm/>
      </Container>
    </Box>
  );
};

export default SendOTP;