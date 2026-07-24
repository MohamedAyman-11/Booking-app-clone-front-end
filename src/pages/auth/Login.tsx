import {Box, Container, Typography} from "@mui/material";
import LoginForm from "../../components/auth/LoginForm.tsx";

const Login = () => {
  return (
    <Box sx={{py: '60px'}}>
      <Container maxWidth={'xl'}>
        <Box sx={{mx: 'auto', mb: '30px', maxWidth: '420px', textAlign: 'center'}}>
          <Typography component={'h3'} sx={{color: '#1A1A1A', fontSize: '30px', fontWeight: 'bold', mb: '10px'}}>
            Sign in to get access
          </Typography>
        </Box>
        <LoginForm/>
      </Container>
    </Box>
  );
};

export default Login;