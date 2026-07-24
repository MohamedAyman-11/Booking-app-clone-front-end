import Button from "@mui/material/Button";
import {Typography} from "@mui/material";
import {Link, useLocation} from "react-router-dom";

interface Props {
  onClose: () => void
}

const HostActions = ({onClose}: Props) => {
  const location = useLocation()
  const isDashboard = location.pathname.startsWith("/dashboard")
  return (
    <Button
      key={'host'}
      onClick={onClose}
      sx={(theme) => ({
        width: 'fit-content',
        color: '#fff',
        background: theme.palette.brand.primary,
        mx: 'auto',
        textAlign: 'center',
        display: 'block',
        mt: '10px',
        px: '20px'
      })}
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
  );
};

export default HostActions;