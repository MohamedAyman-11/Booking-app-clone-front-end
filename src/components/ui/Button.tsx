import type {ReactNode} from "react";
import {Button as MuiButton, type ButtonProps, CircularProgress} from '@mui/material'

interface Props extends ButtonProps {
  children: ReactNode,
  isLoading: boolean;
  fullWidth?: boolean
}

const Button = ({children, isLoading, fullWidth, ...rest}: Props) => {
  return (
    <MuiButton fullWidth={fullWidth} disabled={isLoading} loading={isLoading} loadingIndicator={
      <CircularProgress
        size={20}
        sx={{
          color: "white",
        }}
      />
    }{...rest}
    >{children}</MuiButton>
  );
};

export default Button;