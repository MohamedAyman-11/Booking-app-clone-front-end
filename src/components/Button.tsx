import type {ReactNode} from "react";
import {Button as MuiButton, type ButtonProps, CircularProgress} from '@mui/material'

interface IProps extends ButtonProps {
  children: ReactNode,
  isLoading: boolean;
}

const Button = ({children, isLoading, ...rest}: IProps) => {
  return (
    <MuiButton disabled={isLoading} loading={isLoading} loadingIndicator={
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