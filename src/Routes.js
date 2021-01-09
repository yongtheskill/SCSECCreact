import React, {Component} from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
  

import './css/index.css'

import Home from './home/Home';
import about from './home/about';
import HowItWorks from './how/HowItWorks';


class Routes extends Component {
    render(){
        return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/how" component={HowItWorks} />
            <Route path="/about" component={about} />
        </Switch>
        );
    }
}

export default Routes;