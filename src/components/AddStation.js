import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';

export default class AddStation extends Component {
    componentDidMount(){
        let username = this.props.mainState.auth.sessionUser.username;
        let password = this.props.mainState.auth.sessionUser.password;
        let stationName = this.props.match.params.station;
    }
    render(){
        let username = this.props.mainState.auth.sessionUser.username;
        let password = this.props.mainState.auth.sessionUser.password;
        let state = this.props.state;
        return (
            <div className="content content-main">
                <div className="add-plant-input-container column centered">
                    <input className="input-all add-plant-input" type="text" data-id="name"
                           placeholder="Your station's name" onKeyUp={this.props.updateStationToAdd}/>
                    <input className="input-all add-plant-input" type="text" data-id="key"
                           placeholder="Your station's key" onKeyUp={this.props.updateStationToAdd}/>
                    <button className="btn-all btn-big add-plant-button" onClick={() => {this.props.addStation(username, password)}}>Add to my collection</button>
                </div>
                {
                    this.props.stationsState.addStationMessage.length > 0 ?
                        <div className="add-message">
                            {this.props.stationsState.addStationMessage}
                        </div>
                    : null
                }
            </div>
        )
    }
}
