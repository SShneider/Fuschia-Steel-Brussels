import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {EntryPage, AuthPage} from './components/indexComponents.js'

class Routes extends Component{
    render(){
        return(
            <Switch>   
                <Route path="/signup" render ={(props)=> <AuthPage {...props} authProps={this.props.authProps}/>}/>
                <Route path="/login" render ={(props)=> <AuthPage {...props} authProps={this.props.authProps}/>}/>
                <Route path="/" component={EntryPage}/>
            </Switch>
        )
    }
}

export default Routes