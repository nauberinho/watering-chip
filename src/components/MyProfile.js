import React, { Component } from 'react';
import SignInOrSignUp from './SignInOrSignUp.js'
import { BrowserRouter, Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';

export default class MyProfile extends Component{
    render(){
        let state = this.props.state;
        let user = state.auth.sessionUser;
        return (
            <div className="content content-main">
                <div className="my-profile-username">
                    {user.username}
                </div>

            </div>
        )
    }
}
