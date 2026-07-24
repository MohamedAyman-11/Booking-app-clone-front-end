import {Box, Container, Typography} from "@mui/material";
import RegisterForm from "../../components/auth/RegisterForm.tsx";

const Register = () => {
  return (
    <Box sx={{py: '60px'}}>
      <Container maxWidth={'xl'}>
        <Box sx={{mx: 'auto', mb: '30px', maxWidth: '420px', textAlign: 'center'}}>
          <Typography component={'h3'} sx={{color: '#1A1A1A', fontSize: '30px', fontWeight: 'bold', mb: '10px'}}>
            Register to get access
          </Typography>
        </Box>

        <RegisterForm/>
      </Container>
    </Box>
  );
};

export default Register;