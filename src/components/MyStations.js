import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';
import PulseLoaderViewstation from './PulseLoader.js';

export default class MyStations extends Component {
    componentWillMount(){
        let sessionUser = this.props.mainState.auth.sessionUser;
        let username = sessionUser.username;
        let password = sessionUser.password;
        this.props.fetchStations(username);
    }
    render(){
        let state = this.props.state;
        let stations = this.props.stationsState.stations;
        let stationsList = stations.map(function(station, key){
            return (

                <Link to={"/signedin/mystations/" + station.name} key={key} className="my-stations-station-div col-xs-6 col-sm-4 col-md-3">
                    <div className="station-div-name column"><div className="centered green-text font-md">{station.name}</div></div>
                    <div className="station-div-name column"><div className="centered">{station.plants.length} plants</div></div>
                </Link>

            )
        });
        return (

            <main className="content content-main">

                {stations[0].name.length !== 0 ?

                    <section className="div-cover">

                        <header className="my-stations-header">
                            <div className="my-stations-header-overview column font-md">
                                <span className="green-text">My stations</span>
                            </div>
                            <Link to="/signedin/mystations/addstation" className="my-stations-header-add-btn btn-all column">
                                <div className="vertically-centered"><i className="material-icons">add</i></div>
                            </Link>
                        </header>
                        <section className="display-stations-div">
                            {stationsList}
                        </section>
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
