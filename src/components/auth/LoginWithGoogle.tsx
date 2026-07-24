import useGoogleAuthHandler from "../../hooks/handlers/useGoogleAuthHandler.ts";
import {Box} from "@mui/material";
import toast from "react-hot-toast";
import {GoogleLogin} from "@react-oauth/google";

const LoginWithGoogle = () => {
  const {onGoogleAuthSubmit} = useGoogleAuthHandler()
  return (
    <Box sx={{
      mt: '20px'
    }}>
      <GoogleLogin text={"continue_with"} size={'large'}
                   onSuccess={onGoogleAuthSubmit}
                   onError={() => toast.error("Google Login Failed")}/>
    </Box>
  );
};

export default LoginWithGoogle;