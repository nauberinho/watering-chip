
import React, { Component } from 'react';

export default class SignInOrSignUp extends Component {
    render() {
        return (
            <div className="sign-in-or-sign-up-container col-xs-12">
                    <button className="btn-default btn-all btn-big" data-id="create" onClick={this.props.changeView}>CREATE ACCOUNT</button>
                    <button className="btn-default btn-all btn-big" data-id="signIn" onClick={this.props.changeView}>SIGN IN</button>
            </div>

        )
    }
}

