import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#2c0000",
    },
    tercero: {
      main: "#bca26b",
    },
    cuarto:{
      main: "#819856",
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)