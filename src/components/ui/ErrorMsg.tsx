import {Typography} from "@mui/material";

interface Props {
  msg: string | undefined
}

const ErrorMsg = ({msg}: Props) => {
  return (
    <Typography component={'span'} color={'error'}
                sx={{fontSize: '13px', display: 'block'}}>{msg}</Typography>
  );
};

export default ErrorMsg;