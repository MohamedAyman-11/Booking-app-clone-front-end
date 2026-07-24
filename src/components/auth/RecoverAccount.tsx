import {Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {ROUTES_PATHS_DATA} from "../../constants";

const RecoverAccount = () => {
  return (
    <Typography sx={{fontSize: '14px', textAlign: 'center', mt: '20px'}}>Lost access to your email? <Box
      sx={(theme) => ({
        color: theme.palette.brand.primary,
        textDecoration: 'none',
        fontSize: '14px'
      })} component={Link} to={ROUTES_PATHS_DATA.recoveryEmail}>Recover your account</Box></Typography>
  );
};

export default RecoverAccount;