import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ThemeProvider} from "@mui/material";
import reportWebVitals from './reportWebVitals';
import App from './components/app/App';
import theme from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
<ThemeProvider theme={theme}>
    <App/>
</ThemeProvider>);

reportWebVitals();
