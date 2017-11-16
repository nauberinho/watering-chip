

import React, { Component } from 'react';


export default class Authentication extends Component {
    render(){
        let state = this.props.state;
        let self = this;
        return (
            <div className="header-container">
                <div className="home-logo">
                    <span className="lightpurple-text">C.H.I.P.</span><span className="lightpurple-text"> Watering</span>
                </div>
            </div>

        )
    }
}
