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
                    <div className="green-text font-md add-station-title">Add a station</div>
                    <div className="add-input-div">
                        <input className="input-all add-plant-input" type="text" data-id="name"
                               placeholder="Your station's name" onKeyUp={this.props.updateStationToAdd}/>
                        {this.props.stationsState.stationToAdd.validation.name === true && this.props.stationsState.stationToAdd.object.name !== "" ?
                            <i className="material-icons green-text">done</i>
                            : null
                        }
                        {this.props.stationsState.stationToAdd.validation.name === false ?
                            <i className="fa fa-times red-text" aria-hidden="true"></i>
                            : null
                        }

                    </div>

                    <div className="add-input-div">

                        <input className="input-all add-plant-input" type="text" data-id="key"
                               placeholder="KEY (XXXX-XXX-XXX-XXX)" onKeyUp={this.props.updateStationToAdd}/>
                        {this.props.stationsState.stationToAdd.validation.key === true && this.props.stationsState.stationToAdd.object.key !== "" ?
                            <i className="material-icons green-text">done</i>
                            : null
                        }
                        {this.props.stationsState.stationToAdd.validation.key === false && this.props.stationsState.stationToAdd.object.key !== ""?
                            <i className="fa fa-times red-text" aria-hidden="true"></i>
                            : null
                        }

                    </div>
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
