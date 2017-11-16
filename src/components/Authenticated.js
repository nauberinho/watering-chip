
import React, { Component } from 'react';
import SignInOrSignUp from './SignInOrSignUp.js';
import { BrowserRouter, Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';
import MyPlants from './MyPlants.js';
import MyStations from './MyStations.js';
import ViewStation from './ViewStation.js';
import AddStation from './AddStation.js';
import AddPlant from './AddPlant.js';
import ViewPlant from './ViewPlant.js';
import ProfileMenu from './ProfileMenu.js';
import MyProfile from './MyProfile.js';



export default class Authenticated extends Component {

    componentDidMount(){
        let self = this;

        console.log(this.props.match);
    }

    render(){
        let state = this.props.state;
        let mainState = this.props.mainState;
        let self = this;

        return (
            <BrowserRouter>

                {mainState.auth.signedIn === true ?
                    <div className="authenticated-container">

                        <div className="authenticated-content">

                            <div className="content-header">
                                <div className="content-header-title">
                                    C.H.I.P. Watering <br/>
                                    <span className="header-content-span">Don't give up on your plants</span>
                                </div>

                                    <div className="content-header-menu">
                                    <span className="content-header-menu-span">
                                        <i className="fa fa-bars" aria-hidden="true"></i>
                                    </span>
                                        <button data-id="toggleUserMenu" className="btn-cover" onClick={this.props.toggleMenu}></button>
                                    </div>
                            </div>
                            <div className="content-wrapper">
                                {
                                    state.userMenu === "visible" ?
                                        <ProfileMenu
                                            navigate={this.props.navigate}
                                            handleSignOut={this.props.handleSignOut}
                                        />
                                    : null
                                }
                                <Switch>

                                    <Route exact path="/signedin" render={(props) =>
                                        (
                                            <Redirect to="/signedin/mystations"/>
                                        )
                                    }>
                                    </Route>

                                    <Route exact path="/signedin/mystations" render={(props) => (
                                        <MyStations
                                            state={state}
                                            plantsState={this.props.plantsState}
                                            stationsState={this.props.stationsState}
                                            match={props.match}
                                            mainState={this.props.mainState}
                                            fetchPlants={this.props.fetchPlants}
                                            fetchStations={this.props.fetchStations}
                                        />
                                    )}>
                                    </Route>

                                    <Route exact path="/signedin/mystations/addstation" render={(props) => (
                                        <AddStation
                                            state={state}
                                            plantsState={this.props.plantsState}
                                            match={props.match}
                                            mainState={this.props.mainState}
                                            fetchPlants={this.props.fetchPlants}
                                            fetchStations={this.props.fetchStations}
                                            fetchOneStation={this.props.fetchOneStation}
                                            stationsState={this.props.stationsState}
                                            updateStationToAdd={this.props.updateStationToAdd}
                                            addStation={this.props.addStation}
                                        />
                                    )}>
                                    </Route>

                                    <Route exact path="/signedin/mystations/:station" render={(props) => (
                                        <ViewStation
                                            state={state}
                                            plantsState={this.props.plantsState}
                                            match={props.match}
                                            mainState={this.props.mainState}
                                            fetchPlants={this.props.fetchPlants}
                                            fetchStations={this.props.fetchStations}
                                            fetchOneStation={this.props.fetchOneStation}
                                            stationsState={this.props.stationsState}

                                        />
                                    )}>
                                    </Route>

                                    <Route exact path="/signedin/mystations/:station/addplant" render={(props) => (
                                        <AddPlant
                                            state={state}
                                            match={props.match}
                                            plantsState={this.props.plantsState}
                                            updatePlantToAdd={this.props.updatePlantToAdd}
                                            addPlant={this.props.addPlant}
                                            mainState={this.props.mainState}
                                            fetchStations={this.props.fetchStations}
                                            fetchOneStation={this.props.fetchOneStation}
                                            stationsState={this.props.stationsState}
                                        />
                                    )}>
                                    </Route>
                                    <Route exact path="/signedin/mystations/:station/:plant" render={(props) => (
                                        <ViewPlant
                                            match={props.match}
                                            water={this.props.water}
                                            focusOnPlant={this.props.focusOnPlant}
                                            state={this.props.stationsState}
                                            mainState={this.props.mainState}
                                            fetchPlants={this.props.fetchPlants}
                                            removeOnePlant={this.props.removeOnePlant}
                                            focusOffPlant={this.props.focusOffPlant}
                                            fetchStations={this.props.fetchStations}
                                            fetchOneStation={this.props.fetchOneStation}
                                        />
                                    )}>

                                    </Route>


                                    <Route path="/signedin/myprofile" render={(props) => (
                                        <MyProfile
                                        state={this.props.mainState}
                                        />
                                    )}>
                                    </Route>

                                    <Route path="/signedin/mysettings" render={(props) => (
                                        <div className="content content-main">
                                            MY SETTINGS
                                        </div>

                                    )}>
                                    </Route>

                                    <Route path="/signedin/updateplants" render={(props) => (
                                        <div className="content content-main">
                                            UPDATE MY PLANTS
                                        </div>
                                    )}>
                                    </Route>

                                    <Route exact path="/" render={(props) => (
                                        <Redirect to="/home"/>

                                    )}>
                                    </Route>

                                </Switch>
                        </div>
                            {/*<button className="btn-all btn-big my-plants-button" onClick={this.props.fetchPlants}>Uppdatera plantor</button>*/}
                        </div>

                    </div>

                    : null
                }

            </BrowserRouter>
        )
    }
}
