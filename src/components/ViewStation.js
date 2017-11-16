import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';
import SignInOrSignUp from './SignInOrSignUp.js';
import PulseLoaderViewstation from './PulseLoader.js';
import AddStation from './AddStation.js';
import "react-toggle/style.css";
import Toggle from 'react-toggle';

export default class ViewStation extends Component{
    componentWillMount(){
        this.forceUpdate()
        let username = this.props.mainState.auth.sessionUser.username;
        let stationName= this.props.match.params.station;
        console.log(this.props);
        //Retrieving desired station from database on render, based on the "station" parameter of the router.
        this.props.fetchOneStation(username, stationName);
    }

    render(){
        let state = this.props.stationsState;
        if(state.focusStation !== {}) {
            let username = this.props.mainState.auth.sessionUser.username;

            let focusStation = state.focusStation;
            console.log(focusStation, ' =plants')
            let stationParam = this.props.match.params.station;
            console.log(stationParam)
            let navButtons = state.stations.map((station, key) => {
                return (
                    <Link key={key} className="view-station-nav-button centered"
                          to={"/signedin/mystations/" + station.name} onClick={() => {
                        this.props.fetchOneStation(username, station.name)
                    }}>
                        {station._id === this.props.match.params.station ?
                            <i className="fa fa-square" aria-hidden="true"></i>
                            :
                            <i className="fa fa-square-o" aria-hidden="true"></i>
                        }
                    </Link>
                )
            });

            let plantsList = state.focusStation.plants.map(function (plant, key) {
                return (
                    <Link to={"/signedin/mystations/" + stationParam + "/" +  plant._id} key={key}
                          className="my-plants-plant-div col-xs-6 col-sm-4 col-md-3 vertically-centered">
                        <div className="plant-div-name column">
                            <div className="centered">{plant.name}</div>
                        </div>
                        <div className="plant-div-name column">
                            <div className="centered">{plant.date}</div>
                        </div>
                        <div className="plant-div-img-wrapper column"><img className="plant-div-plant-img centered"
                                                                           src={plant.imgUrl} alt={plant.imgUrl}/></div>
                        <Link to={"/signedin/myplants/" + plant._id} className="btn-all btn-big plant-div-view-button">View</Link>
                    </Link>
                )
            });


            return (


                    <main className="content content-main">

                        {focusStation.name === stationParam ?

                            <section className="div-cover">
                                <div className="view-plants-nav-wrapper column">
                                    {navButtons}
                                </div>

                                <div className="my-plants-header">
                                    <div className="my-plants-header-overview column">
                                        <div className="vertically-centered green-text"><h3>{focusStation.name}</h3></div>
                                        <div className="vertically-centered">{focusStation.plants.length} plants registered on this station</div>
                                    </div>
                                    <Link to={"/signedin/mystations/" + stationParam + "/addplant"} className="my-plants-header-add-btn btn-all column">
                                        <div className="vertically-centered"><i className="material-icons">add</i></div>
                                    </Link>
                                </div>
                                <div className="display-plants-div">
                                    {plantsList}
                                </div>
                            </section>



                        :

                            <section className="col-sm-12 column div-cover">
                                <PulseLoaderViewstation/>
                            </section>
                            }
                    </main>

            )
        }
    }
}

