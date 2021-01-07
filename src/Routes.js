import React, {Component} from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
  

import './css/index.css'

import Home from './home/Home';
import Navbar from './home/Navbar';


class Routes extends Component {
    render(){
        return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/navbar" component={Navbar} />
        </Switch>
        );
    }
}

export default Routes;