import type {ReactNode} from "react";
import {Typography} from "@mui/material";

interface Props {
  id: string,
  children: ReactNode
}

const Label = ({id, children}: Props) => {
  return (
    <Typography component={'label'} htmlFor={id}
                sx={{
                  fontSize: '14px',
                  color: '#1A1A1A',
                  mb: '5px',
                  display: 'block'
                }}>{children}</Typography>
  );
};

export default Label;