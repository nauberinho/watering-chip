import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';

export default class MyPlants extends Component {
    componentDidMount(){
        let sessionUser = this.props.mainState.auth.sessionUser;
        let username = sessionUser.username;
        this.props.fetchPlants(username);
    }
    render(){
        let state = this.props.state;
        let plants = this.props.plantsState.plants;
        let plantList = plants.map(function(plant, key){

            return (
                <Link to={"/signedin/myplants/" + plant._id} key={key} className="my-plants-plant-div col-xs-6 col-sm-4 col-md-3">
                    <div className="plant-div-name column"><div className="centered">{plant.name}</div></div>
                    <div className="plant-div-name column"><div className="centered">{plant.date}</div></div>
                    <div className="plant-div-img-wrapper column"><img className="plant-div-plant-img centered" src={plant.imgUrl} alt={plant.imgUrl}/></div>
                    <Link to={"/signedin/myplants/" + plant._id} className="btn-all btn-big plant-div-view-button">View</Link>
                </Link>
            )
        })

        return (
            <div className="content content-main">
                <div className="my-plants-header">
                    <div className="my-plants-header-overview column"><div className="vertically-centered">You've got {plants.length} plants registered</div></div>
                    <Link to="/signedin/addplant" className="my-plants-header-add-btn btn-all column"><div className="vertically-centered"><i className="material-icons">add</i></div></Link>
                </div>
                <div className="display-plants-div">
                    {plantList}
                </div>

            </div>
        )
    }
}
