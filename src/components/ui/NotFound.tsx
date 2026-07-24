import {Alert, Box} from "@mui/material";

interface Props {
  message: string;
}

const NotFound = ({message}: Props) => {
  return (
    <Box sx={{
      mx: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '100%',
    }}>
      <Alert sx={{
        width: '100%',
        borderRadius: '12px',
        fontSize: {xs: '16px', md: '18px'},
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        '& svg': {fontSize: {xs: '18', md: '22px'},}
      }} variant={'filled'} severity={'info'}>{message}</Alert>
    </Box>
  );
};

export default NotFound;