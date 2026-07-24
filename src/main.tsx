import {createRoot} from 'react-dom/client';
import './index.css';
import {ThemeProvider} from '@emotion/react';
import App from './App';
import theme from './config/mui.config';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {GoogleOAuthProvider} from "@react-oauth/google";

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </QueryClientProvider>
  </GoogleOAuthProvider>
);
