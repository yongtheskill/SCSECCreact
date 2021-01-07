import React from 'react';

import ReactDOM from 'react-dom';

import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

import Routes from './Routes';

import { BrowserRouter as Router } from "react-router-dom";


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
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
