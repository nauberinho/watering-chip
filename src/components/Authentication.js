
import React, { Component } from 'react';
import SignInOrSignUp from './SignInOrSignUp.js'
import Header from './Header.js'
import { BrowserRouter, Route, Switch, Redirect, Link} from 'react-router-dom';

export default class Authentication extends Component {
    render(){
        let state = this.props.state;
        return (
            <div className="auth-container">
                <Header/>
                {state.auth.create === false && state.auth.signIn === false ?

                    <SignInOrSignUp sayHello={this.props.sayHello} changeView={this.props.changeView} changeAuthType={this.props.changeAuthType} state={this.props.state}/>

                    :

                    <div className="container auth-div">



                            { state.auth.create === true ?

                                <div className="col-sm-6 form-container">
                                    <button className='col-sm-6 btn-all btn-go-back'><i className="material-icons">highlight_off</i>
                                        <button className="btn-cover" id={this.props.state.view} onClick={this.props.changeView}></button></button>
                                    <h3 className="auth-h2 lightpurple-text">Create account</h3>
                                    <input type="text" data-id="username" id="usernameInput" className="input-all auth-input"
                                           placeholder="Your username"
                                           onKeyUp={this.props.updateAuthObject}/>
                                    <input type="password" data-id="password" id="passwordInput" className="input-all auth-input"
                                           placeholder="Your password" onKeyUp={this.props.updateAuthObject}/>

                                  <input type="checkbox" value="remember-me"/> Remember me

                                    <button className="col-sm-6 btn-all btn-big form-btn" onClick={this.props.handleCreateAccount}>Create account</button>
                                </div>

                                :


                                <div className="col-sm-6 form-container">
                                    <button className='col-sm-6 btn-all btn-go-back'><i className="material-icons">highlight_off</i>
                                        <button className="btn-cover" id={this.props.state.view} onClick={this.props.changeView}></button>
                                    </button>

                                    <h3 className="auth-h2 lightpurple-text">Sign In</h3>

                                    <input className="input-all auth-input" type="email" data-id="username" id="usernameInput"
                                           placeholder="Your username"
                                           autoFocus onKeyUp={this.props.updateAuthObject}/>

                                    <input className="input-all auth-input" type="password" data-id="password" id="passwordInput"
                                           placeholder="Your password" onKeyUp={this.props.updateAuthObject}/>
                                    <div className="checkbox">

                                        <input type="checkbox" value="remember-me"/> Remember me

                                    </div>
                                    <Link to="/signedin" className="col-sm-6 btn-all btn-big form-btn" onClick={this.props.handleSignIn}>Sign In</Link>


                                </div>
                            }


                            <div className="col-sm-3"></div>

                    </div>

                }




            </div>
        )
    }
}
