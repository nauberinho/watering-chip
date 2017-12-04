import Header from './Header.js'
import Authenticated from './Authenticated.js';
import Authentication from './Authentication.js';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import '../App.css';
import {
    changeView,
    initRender,
    handleSignIn,
    updateAuthObject,
    handleCreateAccount,
    changeAuthType,
    handleSignOut,
    filter,
    fetchPlants,
    toggleMenu,
    navigate,
    focusOnPlant,
    focusOffPlant,
    updatePlantToAdd,
    addPlant,
    uploadImage,
    removeOnePlant,
    fetchStations,
    fetchOneStation,
    updateStationToAdd,
    addStation,
    deleteOneStation,
    updateStation,
    updateStationToChange,
    updatePlantSettings
} from '../actions/commonActions.js';

import {connect} from 'react-redux';
import React, { Component } from 'react';


class App extends Component {

    componentDidMount(){
    }

  render() {
      let state = this.props.mainState;
      return (

          <BrowserRouter>
              <div className="main-container container-fluid simplebar">

                  <Route exact path="/" render={(props) =>
                      (
                          <Redirect to="/home"/>
                      )
                  }>
                  </Route>

                          <Route path="/home" render={(props) =>
                              (
                                  <Authentication
                                      handleSignIn={this.props.handleSignIn}
                                      updateAuthObject={this.props.updateAuthObject}
                                      state={this.props.mainState}
                                      changeView={this.props.changeView}
                                      handleCreateAccount={this.props.handleCreateAccount}
                                      sayHello={this.props.sayHello}
                                  />
                              )
                          }>
                          </Route>

                          <Route path="/signedin" render={(props) =>
                              (
                                  state.auth.signedIn === true?
                                  <Authenticated
                                      state={this.props.authenticatedState}
                                      plantsState={this.props.plantsState}
                                      initRender={this.props.initRender}
                                      fetchPlants={this.props.fetchPlants}
                                      toggleMenu={this.props.toggleMenu}
                                      mainState={this.props.mainState}
                                      handleSignOut={this.props.handleSignOut}
                                      navigate={this.props.navigate}
                                      match={props.match}
                                      focusOnPlant={this.props.focusOnPlant}
                                      updatePlantToAdd={this.props.updatePlantToAdd}
                                      addPlant={this.props.addPlant}
                                      removeOnePlant={this.props.removeOnePlant}
                                      focusOffPlant={this.props.focusOffPlant}
                                      stationsState={this.props.stationsState}
                                      fetchStations={this.props.fetchStations}
                                      fetchOneStation={this.props.fetchOneStation}
                                      updateStationToAdd={this.props.updateStationToAdd}
                                      addStation={this.props.addStation}
                                      deleteOneStation={this.props.deleteOneStation}
                                      updateStation={this.props.updateStation}
                                      updateStationToChange={this.props.updateStationToChange}
                                      updatePlantSettings={this.props.updatePlantSettings}
                                      uploadImage={this.props.uploadImage}
                                  />
                              :
                              <Redirect to="/"/>
                              )
                          }>
                          </Route>
                  <Route exact path="/" render={(props) =>
                      (
                          <Redirect to="/home"/>
                      )
                  }>
                  </Route>

              </div>
          </BrowserRouter>


      );
  }
}

const mapStateToProps = (state) => {
    return {
        mainState: state.mainReducer,
        plantsState: state.plantsReducer,
        authenticatedState: state.authenticatedReducer,
        stationsState: state.stationsReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
            changeView: (event) => {
                dispatch(changeView(event))
            },

            filter: (event) => {
              dispatch(filter(event))
            },

            handleSignIn: (event) => {
                dispatch(handleSignIn (event))
            },

            updateAuthObject: (event) => {
                dispatch(updateAuthObject (event))
            },

            handleCreateAccount: (event) => {
                dispatch(handleCreateAccount (event))
            },

            changeAuthType: (event) => {
                dispatch(changeAuthType (event))
            },

            handleSignOut: (event) => {
                dispatch(handleSignOut(event))
            },

            initRender: () => {

                dispatch(initRender())
            },

            toggleMenu: (event) => {
                dispatch(toggleMenu(event))
            },

            navigate: (event) => {
                dispatch(navigate(event))
            },

            fetchPlants: (data) => {
                dispatch(fetchPlants(data))
            },

            focusOnPlant: (plantId,  username, stationName) => {
            dispatch(focusOnPlant(plantId, username, stationName))
            },

            focusOffPlant: (plantId, username) => {
                dispatch(focusOffPlant(plantId, username))
            },

            updatePlantToAdd: (event) => {
                dispatch(updatePlantToAdd(event))
            },

            updateStationToAdd: (event) => {
                dispatch(updateStationToAdd(event))
            },

            addPlant: (username) => {
                dispatch( addPlant(username))
            },

            uploadImage: (acceptedFile, rejectedFile) => {
                dispatch( uploadImage(acceptedFile, rejectedFile))
            },

            addStation: (username, password) => {
                dispatch( addStation(username))
            },
            removeOnePlant: (plantName, username, stationName) => {
                dispatch( removeOnePlant(plantName, username, stationName))
            },

            fetchStations: (username) => {
                dispatch( fetchStations(username))
            },

            fetchOneStation: (username, stationName) => {
                dispatch( fetchOneStation(username, stationName))
            },
            deleteOneStation: (username, stationName) => {
                dispatch( deleteOneStation(username, stationName))
            },

            updateStation: (username) => {
                 dispatch( updateStation(username))
            },
            updateStationToChange: (event) => {
                dispatch( updateStationToChange(event))
            },
            updatePlantSettings: (event) => {
                dispatch( updatePlantSettings(event))
            }
        }
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
