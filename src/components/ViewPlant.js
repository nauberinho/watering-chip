

import React, { Component } from 'react';
import SignInOrSignUp from './SignInOrSignUp.js'
import { BrowserRouter, Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';
import PulseLoaderViewPlant from './PulseLoader.js';
import "react-toggle/style.css"
import Toggle from 'react-toggle'

export default class ViewPlant extends Component{
    componentWillMount(){
        let username = this.props.mainState.auth.sessionUser.username;
        console.log(this.props.match)
        let plantId= this.props.match.params.plant;
        let stationName = this.props.match.params.station;
        console.log(this.props)
        //Retrieving desired plant from database on render, based on the "plant" parameter of the router.
        this.props.fetchOneStation(username, stationName);
        this.props.focusOnPlant(plantId, username, stationName);

    }
    render(){
        let username = this.props.mainState.auth.sessionUser.username;
        let stationParam = this.props.match.params.station;
        let state = this.props.state;
        let focusPlant = state.focusPlant;
        let plantId= this.props.match.params.plant;
        let focusStation = state.focusStation;
        let navButtons = state.focusStation.plants.map((plant, key ) => {
            return(
                <Link key={key} className="view-plant-nav-button centered" to={"/signedin/mystations/" + stationParam + "/" +  plant._id} onClick={()=> {this.props.focusOffPlant(), this.props.focusOnPlant(plant._id, username, stationParam)}}>

                    {plant._id === this.props.match.params.plant ?
                        <i className="fa fa-square" aria-hidden="true"></i>
                        :
                        <i className="fa fa-square-o" aria-hidden="true"></i>
                    }
                </Link>
            )
        });
        return (

            <div className="content content-main" id="Item_VIEW">

                { focusPlant._id === this.props.match.params.plant ?
                    <div>
                        <div className="view-plants-nav-wrapper column">
                            {navButtons}
                        </div>
                        <main>
                            <section>
                                <div className="img-center column">
                                    <img className="view-plant-img" src={focusPlant.imgUrl} alt={focusPlant.imgUrl}/>
                                </div>
                                <div>
                                    <div className="text-center">
                                        <h5>{focusPlant.name}</h5>
                                        <hr/>
                                        <p>{focusPlant.description}</p>
                                    </div>
                                    <div className="text-center column">
                                        <span>Automatic</span>
                                            <div className="toggle-div centered vetically centered">
                                                <Toggle
                                                />
                                            </div>
                                    </div>
                                    <div className="text-center">
                                        <span>Manual</span>
                                        <button className="btn btn-all btn-big" onClick={this.props.water}>Water now</button>
                                        <Link to={"/signedin/mystations/" + stationParam} className="btn btn-all" onClick={() => {this.props.removeOnePlant(focusPlant.name, username, stationParam), this.props.fetchOneStation(username, stationParam)}}>Remove this plant</Link>
                                    </div>
                                </div>
                            </section>
                            <aside>
                                <li>
                                    <div className="bullet">
                                        <div className="line zero"></div>
                                        <div className="line one"></div>
                                        <div className="line two"></div>
                                        <div className="line three"></div>
                                        <div className="line four"></div>
                                        <div className="line five"></div>
                                        <div className="line six"></div>
                                        <div className="line seven"></div>
                                    </div>
                            </li>
                            </aside>

                        </main>
                        <figure>
                            <div className="figure-corner-div"></div>
                            <div className="figure-corner-div"></div>
                        </figure>
                    </div>
                    :
                    <div className="col-sm-12 column div-cover">
                        <PulseLoaderViewPlant/>
                    </div>

                }
            </div>
        )
    }
}
