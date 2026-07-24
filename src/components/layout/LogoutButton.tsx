import {type ButtonProps, CircularProgress, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {CircleArrowLeft} from "lucide-react";

interface Props extends ButtonProps {
  isPending: boolean,
}

const LogoutButton = ({isPending, ...reset}: Props) => {
  return (
    <Button
      sx={{
        color: '#1A1A1A', p: '12px 16px', width: '100%', justifyContent: 'flex-start',
        minHeight: '40px',
        ':hover': {
          background: 'rgba(0, 0, 0, 0.04)'
        }
      }}
      disabled={isPending} loading={isPending}
      loadingIndicator={
        <CircularProgress
          size={20}
          sx={{
            color: "#1A1A1A",
          }}
        />
      }
      {...reset}
    >
      {!isPending && <>
        <CircleArrowLeft width={16} height={16}/> <Typography
        component={'span'}
        sx={{ml: '10px', fontWeight: 400, fontSize: '14px', color: '#1A1A1A'}}
      >
        Sign out
      </Typography>
      </>}
    </Button>
  );
};

export default LogoutButton;