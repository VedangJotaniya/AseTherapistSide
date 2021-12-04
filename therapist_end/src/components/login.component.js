import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
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

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    LoginUser() {

        alert("Logincalled" + this.state.email + " " + this.state.password);
        // const User = 
        this.props.setThisUserName(this.state.email.split("@")[0]);
        this.props.setThisUserID('61ab1954f142eb05816ef617');
        if (this.state.email == 'v1@gmail.com') {
            this.props.testing('/client');
        } else {
            this.props.testing('/home')
        }
        // axios.post("http://localhost:3001/auth/login", { email: this.state.email, password: this.state.password })
        //     .then(res => {
        //         alert(res)
        //         if (res.status == 200) {
        //             console.log("res");
        //             console.log(res);
        //             alert(res)
        //             this.props.setThisUserName(this.state.email);
        //             this.props.setThisUserID(res.data._id);
        //             if (res.data.isTherapist === 0)
        //                 this.props.testing("/client");
        //             else
        //                 this.props.testing("/home");
        //         }
        //         else {
        //             alert(res.message);
        //         }
        //     });

    }




    render() {


        return (
            <Router>
                <form>
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={this.handleChange} />
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