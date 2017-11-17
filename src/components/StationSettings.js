

import React, { Component } from 'react';
import SignInOrSignUp from './SignInOrSignUp.js'
import { BrowserRouter, Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';
import PulseLoaderViewPlant from './PulseLoader.js';
import "react-toggle/style.css"
import Toggle from 'react-toggle'

export default class StationSettings extends Component{
    componentWillMount(){
        let username = this.props.mainState.auth.sessionUser.username;
        let stationName= this.props.match.params.station;
        this.props.fetchOneStation(username, stationName);
    }
    render(){
        let username = this.props.mainState.auth.sessionUser.username;
        let stationName= this.props.match.params.station;
        let state = this.props.state;
        return (

            <main className="div-cover station-settings">
                <div className="centered station-settings-wrapper col-xs-12 col-sm-6 col-md-4 column">
                        <Link to="/signedin/mystations" onClick={() => {this.props.deleteOneStation(username, stationName)}} className="btn-all btn-big station-settings-delete-btn centered">Delete this station</Link>
                </div>
            </main>
        )
    }
}
