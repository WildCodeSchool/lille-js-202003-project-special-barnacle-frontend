import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App';
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2a96b0' },
    secondary: { main: '#91ba1e' },
    background: { main: '#edf1f5' },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
