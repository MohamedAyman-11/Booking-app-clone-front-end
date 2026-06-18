import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    brand: {
      primary: '#0057b8',
      primaryHover: '#003b95',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontWeight: 700,
    },

    h2: {
      fontWeight: 700,
    },

    body1: {
      fontWeight: 400,
    },

    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
});
export default theme;
