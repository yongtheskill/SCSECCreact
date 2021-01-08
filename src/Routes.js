import React, {Component} from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
  

import './css/index.css'

import Home from './home/Home';
import Navbar from './home/Navbar';
import about from './home/about';


class Routes extends Component {
    render(){
        return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/how" component={Navbar} />
            <Route path="/about" component={about} />
        </Switch>
        );
    }
}

export default Routes;