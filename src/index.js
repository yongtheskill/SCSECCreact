import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css'

import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      'Arial',
      'Raleway',
    ].join(','),
    h2: {
      fontFamily: 'Raleway,Roboto,Montserrat',
      fontWeight: '900',
    },
    subtitle1: {
      fontFamily: 'Raleway,Roboto,Montserrat',
      fontSize: '25px',
    }
  },

  card:{
    color: "gray"
  }
});
theme = responsiveFontSizes(theme);


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
