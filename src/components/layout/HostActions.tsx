import Button from "../ui/Button.tsx";
import {Box, Typography} from "@mui/material";
import {Link, useLocation} from "react-router-dom";

const HostActions = () => {
  const location = useLocation()
  const isDashboard = location.pathname.startsWith("/dashboard")
  return (
    <Box>
      <Button
        isLoading={false}
        sx={{
          color: '#fff',
          fontSize: {
            xs: '14px',
            md: '16px'
          },
          transition: 'all 0.3s ease',
          '&:hover': {
            background: '#ffffff21',
          },
        }}

      >
        <Typography component={Link} to={isDashboard ? '/' : '/dashboard/my-account'} sx={{
          textDecoration: 'none', color: '#fff',
          fontSize: {
            xs: '14px',
            md: '16px'
          },
          display: 'block'
        }}>
          {isDashboard ? 'Switch to traveling' : 'Switch to hosting'}
        </Typography>
      </Button>
    </Box>
  );
};

export default HostActions;