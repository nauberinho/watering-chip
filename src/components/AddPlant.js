import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';

export default class AddPlant extends Component {
    componentDidMount(){
        let username = this.props.mainState.auth.sessionUser.username;
        let stationName = this.props.match.params.station;
        this.props.fetchStations(username);
        this.props.fetchOneStation(username, stationName);
    }
    render(){
        let username = this.props.mainState.auth.sessionUser.username;
        let state = this.props.state;
                return (
            <div className="content content-main">
                <div className="add-plant-input-container column centered">
                    <input className="input-all add-plant-input" type="text" data-id="name"
                           placeholder="Your plant's name" onKeyUp={this.props.updatePlantToAdd}/>
                    <input className="input-all add-plant-input" type="text" data-id="description"
                           placeholder="Your plant's description" onKeyUp={this.props.updatePlantToAdd}/>
                    <input className="input-all add-plant-input" type="text" data-id="slot"
                           placeholder="To which slot is your plant connected?" onKeyUp={this.props.updatePlantToAdd}/>
                    <input className="input-all add-plant-input" type="text" data-id="imgUrl"
                           placeholder="Your plant's img url" onKeyUp={this.props.updatePlantToAdd}/>

                    <select className="input-all add-plant-input" onChange={this.props.updatePlantToAdd} name="Plant category" data-id="category">
                        <option value="vegetable">Vegetable</option>
                        <option value="plant">Plant</option>
                        <option value="flower">Flower</option>
                    </select>

                    <button className="btn-all btn-big add-plant-button" onClick={() => {this.props.addPlant(username)}}>Add to my collection</button>


                </div>
                {this.props.stationsState.addPlantMessage.length > 0 ?

                    <div className="add-message">
                        {this.props.stationsState.addPlantMessage}
                    </div>

                    : null
                }
            </div>
        )
    }
}
