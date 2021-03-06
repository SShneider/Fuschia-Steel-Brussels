import React, { Component} from "react";
import {hot} from "react-hot-loader";
import {Navbar} from './client/components/indexComponents'
import Routes from './client/routes.js'
import {Router} from 'react-router-dom'
import history from './history'
import {Auth} from 'aws-amplify'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{
  state = {
    user: null,
    isAuthenticating: true
  }

  setUser = (user) =>{
    this.setState({user: user})
  }

  async componentDidMount(){
    try {
      const awsSess = await Auth.currentSession();
      const awsUser = await Auth.currentAuthenticatedUser();
      if(awsUser){
        this.setUser(awsUser)
        this.setState({isAuthenticating: false})
      }
    } catch (error) {
      console.error(error)
    }
  }
  render(){
    const authProps = {
      user: this.state.user,
      setUser: this.setUser
    }
    return(
      !this.state.Authenticating &&  
        <div>
            <Router  history={history}>
                <Navbar authProps = {authProps}/>
                <Routes authProps = {authProps}/>
            </Router>
        </div>
    );
  }
}

export default hot(module)(App);