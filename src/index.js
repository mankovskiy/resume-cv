import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import './styles/reset.css';
import { theme } from './js/theme';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/my-resume-by-react1">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
