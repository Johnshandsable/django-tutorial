import React, {Component} from 'react'; 
import BrowserRouter as Router

import CreateRoom from './CreateRoom';
import {
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link, 
    Redirect
} from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/'>
                        <p>This is the homepage</p>
                    </Route>
                    <Route path='join' component={RoomJoin}></Route>
                    <Route path='create' component={CreateRoom}></Route>
                </Switch>
            </Router>
        )
    }
}