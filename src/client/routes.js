import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {EntryPage} from './components/indexComponents.js'
class Routes extends Component{
    render(){
        return(
            <Switch>
                <Route path="/" component={EntryPage}/>
            </Switch>
        )
    }
}

export default Routes