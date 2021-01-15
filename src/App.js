import React, { Component} from "react";
import {hot} from "react-hot-loader";
import {Navbar} from './client/components/indexComponents'
import Routes from './client/routes.js'
import {Router} from 'react-router-dom'
import history from './history'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{
  render(){
    return(
        <div>
            <Router  history={history}>
                <Navbar />
                <Routes />
            </Router>
        </div>
    );
  }
}

export default hot(module)(App);