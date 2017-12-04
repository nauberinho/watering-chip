

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

            <section className="div-cover">
                <header className="my-stations-header">
                    <div className="my-stations-header-overview font-md">
                        <div className="my-stations-header-overview font-md">
                            <span className="lightgrey-text font-sm">My stations > </span>
                            <span className="lightgrey-text font-sm">{stationName} > </span>
                            <span className="green-text font-sm">Settings</span>
                        </div>
                    </div>
                </header>

                <div className="station-settings-wrapper row">
                    <section className="station-settings-notifications-container col-xs-12 col-sm-6 col-md-4 column">
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

                    <section className="station-settings-notifications-container col-xs-12 col-sm-6 col-md-4 column">
                        <div className="notification-title centered"><h3 className="green-text">Measure humidity...</h3></div>
                        <div className="measure-humidity-div lightpurple-text centered">
                            <select onChange={this.props.updateStationToChange} name="measure_humidity" data-property="settings" data-id="measure_humidity">
                                <option selected disabled>{this.props.state.focusStation.settings.measure_humidity}</option>
                                <option data-id="measure_humidity" type="checkbox" value="10">Every 10 minutes</option>
                                <option data-id="measure_humidity" type="checkbox" value="30">Every 30 minutes</option>
                                <option data-id="measure_humidity" type="checkbox" value="60">Every hour</option>
                                <option data-id="measure_humidity" type="checkbox" value="180">Every three hours</option>
                                <option data-id="measure_humidity" type="checkbox" value="720">Twice a day</option>
                                <option data-id="measure_humidity" type="checkbox" value="1440">Once a day</option>
                            </select>
                        </div>
                    </section>


                    <section className="my-settings-notifications-container col-xs-12 col-sm-6 col-md-4 column">
                        <div className="centered station-settings-wrapper col-xs-12 col-sm-6 col-md-4 column">
                            <Link to="/signedin/mystations" onClick={() => {this.props.deleteOneStation(username, stationName)}} className="btn-all btn-big station-settings-update-btn centered">Delete this station</Link>
                        </div>
                        <div className="centered station-settings-wrapper col-xs-12 col-sm-6 col-md-4 column">
                            <Link to="/signedin/mystations" onClick={() => {this.props.updateStation(username)}} className="btn-all btn-big station-settings-delete-btn centered">Confirm changes</Link>
                        </div>
                    </section>

                </div>

            </section>






        )
    }
}
