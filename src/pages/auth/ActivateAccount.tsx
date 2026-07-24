import {Box, Container, Typography} from "@mui/material";
import ActivateAccountForm from "../../components/auth/ActivateAccountForm.tsx";

const ActivateAccount = () => {
  return (
    <Box sx={{py: '100px'}}>
      <Container maxWidth={'xl'}>
        <Box sx={{mx: 'auto', mb: '20px', maxWidth: '420px', textAlign: 'center'}}>
          <Typography component={'h3'}
                      sx={{color: '#1A1A1A', fontSize: '24px', fontWeight: 'bold', mb: '5px', textAlign: 'center'}}>
            Verify Your Account
          </Typography>
          <Typography component={'h3'}
                      sx={{color: '#1A1A1A', fontSize: '18px', fontWeight: 'bold', mb: '5px', textAlign: 'center'}}>
            We've sent a 6-digit verification code to your email
          </Typography>
          <Typography component={'span'}
                      sx={{
                        color: '#1A1A1A',
                        fontSize: '16px',
                        mt: '20px',
                        mb: '5px',
                        textAlign: 'center',
                        display: 'block'
                      }}>
            Enter the code below to activate your account.
          </Typography>
        </Box>
        <ActivateAccountForm/>
      </Container>
    </Box>
  );
};

export default ActivateAccount;