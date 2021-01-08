import React, {Component} from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
  

import './css/index.css'

import Home from './home/Home';
<<<<<<< HEAD
import Navbar from './home/Navbar';
import about from './home/about';
=======
import HowItWorks from './how/HowItWorks';
import Navbar from './Navbar';
>>>>>>> 33812c78d7c6d57fa216d73e598a3e793e2a931d


class Routes extends Component {
    render(){
        return(
        <Switch>
            <Route exact path="/" component={Home} />
<<<<<<< HEAD
            <Route path="/how" component={Navbar} />
            <Route path="/about" component={about} />
=======
            <Route path="/how" component={HowItWorks} />
            <Route path="/about" component={Navbar} />
>>>>>>> 33812c78d7c6d57fa216d73e598a3e793e2a931d
        </Switch>
        );
    }
}

export default Routes;