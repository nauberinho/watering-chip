import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';
import PulseLoaderViewstation from './PulseLoader.js';

export default class MyStations extends Component {
    componentWillMount(){
        let sessionUser = this.props.mainState.auth.sessionUser;
        let username = sessionUser.username;
        let password = sessionUser.password;
        this.props.fetchStations(username);
        console.log(this.props)
    }
    render(){
        let state = this.props.state;
        let stations = this.props.stationsState.stations;
        let stationsList = stations.map(function(station, key){
            return (

                <Link to={"/signedin/mystations/" + station.name} key={key} className="my-plants-plant-div col-xs-6 col-sm-4 col-md-3">
                    <div className="plant-div-name column"><div className="centered">{station.name}</div></div>
                    <div className="plant-div-name column"><div className="centered">{station.plants.length} plants</div></div>
                    <div className="btn-all btn-big plant-div-view-button">View</div>
                </Link>

            )
        });
        return (

            <main className="content content-main">

                {stations[0].name.length !== 0 ?

                    <section className="div-cover">

                        <div className="my-plants-header">
                            <div className="my-plants-header-overview column">
                                <div className="vertically-centered green-text"><h2>My Stations</h2></div>
                            </div>
                            <Link to="/signedin/mystations/addstation" className="my-plants-header-add-btn btn-all column">
                                <div className="vertically-centered"><i className="material-icons">add</i></div>
                            </Link>
                        </div>
                        <div className="display-plants-div">
                            {stationsList}
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
