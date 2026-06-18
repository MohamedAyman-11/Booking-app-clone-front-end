import {Box, Container, Stack, Typography} from "@mui/material";
import RegisterForm from "../components/RegisterForm.tsx";
import Avatar from "@mui/material/Avatar";
import Logo from "../svg/Logo.tsx";

const Register = () => {
  return (
    <Box sx={{py: '40px'}}>
      <Container maxWidth={'lg'}>
        <Box sx={{mx: 'auto', mb: '30px', maxWidth: '420px', textAlign: 'center'}}>
          <Stack sx={{flexDirection: 'row', gap: '10px', justifyContent: 'center', alignItems: 'center', mb: '20px'}}>
            <Avatar src="/public/favicon.png" sx={{
              borderRadius: 0,
              width: '40px',
              height: '40px'
            }}/>
            <Logo color={'#0057b8'}/>
          </Stack>
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