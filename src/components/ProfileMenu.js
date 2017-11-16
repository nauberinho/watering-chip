

import React, { Component } from 'react';
import SignInOrSignUp from './SignInOrSignUp.js'
import { BrowserRouter, Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';

export default class ProfileMenu extends Component {

    render(){
        let state = this.props.state;
        return (
            <div className="profile-menu">
                <NavLink to="/signedin/mystations" className="profile-menu-button btn-all column" id="mystations" onClick={this.props.navigate}>
                    <div className="vertically centered">
                        My stations
                    </div>
                </NavLink>
                <NavLink to="/signedin/myprofile" className="profile-menu-button btn-all column" id="myprofile" onClick={this.props.navigate}>
                    <div className="vertically centered">
                        My profile
                    </div>
                </NavLink>
                <NavLink to="/signedin/mysettings" className="profile-menu-button btn-all column" id="mysettings" onClick={this.props.navigate}>
                    <div className="vertically centered">
                        Settings
                    </div>
                </NavLink>
                <NavLink onClick={this.props.handleSignOut} to="/" className="profile-menu-button btn-all column">
                    <div className="vertically centered">
                        Sign Out
                    </div>
                </NavLink>
            </div>
        )
    }
}
