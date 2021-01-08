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
    h4: {
      fontSize: '30px',
      flexGrow: '1'
    },
    body2: {
      fontSize: '18px',
      flexGrow: '1'
    },
    subtitle1: {
      fontFamily: 'Montserrat,Roboto',
      fontSize: '25px',
    }
  },  
  shape: {
    borderRadius: 10,
  }, 
  card:{
    color: "grey"
  },
  palette:{
    neutral: {
      main: '#fefefe',
    },
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
