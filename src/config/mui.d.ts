import '@mui/material/styles';
import "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    brand: {
      primary: string;
      primaryHover: string;
    };
  }

  interface PaletteOptions {
    brand?: {
      primary?: string;
      primaryHover: string;
    };
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    brand: true;
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    bigXl: true
  }
}
