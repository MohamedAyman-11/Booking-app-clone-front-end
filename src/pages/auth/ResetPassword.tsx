import {Box, Container, Typography} from "@mui/material";
import ResetPasswordForm from "../../components/auth/ResetPasswordForm.tsx";

const ResetPassword = () => {
  return (
    <Box sx={{py: '100px'}}>
      <Container maxWidth={'xl'}>
        <Box sx={{mx: 'auto', mb: '30px', maxWidth: '420px', textAlign: 'center'}}>
          <Typography component={'h3'}
                      sx={{color: '#1A1A1A', fontSize: '30px', fontWeight: 'bold', mb: '10px', textAlign: 'center'}}>
            Reset your password
          </Typography>
          <Typography component={'span'}
                      sx={{color: '#1A1A1A', fontSize: '14px', mb: '5px', textAlign: 'center', display: 'block'}}>
            Enter a new password to regain access to your account.
          </Typography>
        </Box>
        <ResetPasswordForm/>
      </Container>
    </Box>
  );
};

export default ResetPassword;