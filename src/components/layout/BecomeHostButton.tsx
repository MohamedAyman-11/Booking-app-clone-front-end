import {Box} from "@mui/material";
import Button from "../ui/Button.tsx";
import useBecomeHostHandler from "../../hooks/handlers/useBecomeHostHandler.ts";

const BecomeHostButton = () => {
  const {isPending, onBecomeHost} = useBecomeHostHandler()
  return (
    <Box>
      <Button
        isLoading={isPending}
        onClick={onBecomeHost}
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
        Become a host
      </Button>
    </Box>
  );
};

export default BecomeHostButton;