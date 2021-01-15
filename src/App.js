import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <button className="btn btn-primary">Ey Oy</button>
      </div>
    );
  }
}

export default hot(module)(App);