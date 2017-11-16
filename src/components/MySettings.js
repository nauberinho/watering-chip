

import React, { Component } from 'react';
import SignInOrSignUp from './SignInOrSignUp.js'
import { BrowserRouter, Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';
import PulseLoaderViewPlant from './PulseLoader.js';
import "react-toggle/style.css"
import Toggle from 'react-toggle'

export default class MySettings extends Component{
    componentWillMount(){
        let username = this.props.mainState.auth.sessionUser.username;
        console.log(this.props.match)

//        this.props.fetchOneUser(username)
    }
    render(){
        let username = this.props.mainState.auth.sessionUser.username;
        let state = this.props.state;
        return (

            <main className="content content-main">

                <section className="div-cover">

                    <header className="my-settings-header">
                        <div className="my-settings-header-overview column">
                            <div className="vertically-centered green-text"><h2>My Settings</h2></div>
                        </div>
                    </header>

                    <section className="my-settings-notifications-container col-xs-12 col-sm-6 col-md-4 column">
                        <div className="notification-title centered"><h3 className="green-text">Notify me when...</h3></div>
                        <div className="notification-div lightpurple-text centered">
                            <div className="notification-span">a plant has been watered</div>
                            <div className="notification-toggle"><Toggle/></div>
                        </div>
                        <div className="notification-div lightpurple-text centered">
                            <div className="notification-span">a plant has been measured</div>
                            <div className="notification-toggle"><Toggle/></div>
                        </div>
                        <div className="notification-div lightpurple-text centered">
                            <div className="notification-span">the water tank is empty</div>
                            <div className="notification-toggle"><Toggle/></div>
                        </div>
                        <div className="notification-div lightpurple-text centered">
                            <div className="notification-span">I need to check on my plants</div>
                            <div className="notification-toggle"><Toggle/></div>
                        </div>
                    </section>

                </section>

            </main>
        )
    }
}
