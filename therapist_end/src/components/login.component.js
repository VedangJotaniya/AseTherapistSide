import React, { Component } from "react";
import axios from 'axios';
import App from "../App";

import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import HomePage from "../HomePage";




export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            view: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.LoginUser = this.LoginUser.bind(this);

    }

    handleChange = (event) => {
        this.state({ [event.target.name]: event.target.value });
    }

    LoginUser = () => {

        this.props.setThisUserName("vedang");
        this.props.setThisUserID("11111");
        this.props.testing("/home");

    }




    render() {


        return (
            <Router>
                <form>
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={() => { this.handleChange(); }} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={() => { this.handleChange(); }} />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">  Remember me</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" onClick={() => { this.LoginUser(); }} >Submit</button>
                    <p className="forgot-password text-right">
                        <button>Forgot password?</button>
                    </p>
                </form >
                <Route exact path="/home" component={HomePage} />

            </Router>
        );


    }
}