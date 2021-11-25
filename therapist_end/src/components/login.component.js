import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router";
import App from "../App";
import HomePage from "../HomePage";


export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            view: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.LoginUser = this.LoginUser.bind(this);
        // const history = useHistory();
    }

    handleChange = (event) => {
        // this.state[event.target.name] = event.target.value;
    }

    LoginUser = () => {


        this.props.history.push({ pathname: "/home/" });

    }




    render() {

        if (this.state.view != 0)
            return <App />;

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
                {/* 
                <Switch>
                    <Route exact path="/home" component={HomePage} />
                </Switch> */}
            </Router>
        );


    }
}