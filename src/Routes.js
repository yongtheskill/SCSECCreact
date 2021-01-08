import React, {Component} from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
  

import './css/index.css'

import Home from './home/Home';
import HowItWorks from './how/HowItWorks';
import Navbar from './Navbar';


class Routes extends Component {
    render(){
        return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/how" component={HowItWorks} />
            <Route path="/about" component={Navbar} />
        </Switch>
        );
    }
}

export default Routes;