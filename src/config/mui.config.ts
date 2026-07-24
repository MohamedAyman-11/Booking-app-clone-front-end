import {createTheme} from '@mui/material';

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
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
      bigXl: 1600
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({theme}) => ({
          "&.Mui-disabled": {
            backgroundColor: theme.palette.primary.light,
          },
        }),
      },
    },
  },
});
export default theme;
