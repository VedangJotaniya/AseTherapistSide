import React, { Component } from "react";


export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>I`m </label>
                    &nbsp; &nbsp;&nbsp;
                    <input type="radio" id="Therapist" name="who" value="Therapist" />&nbsp;
                    <label for="Therapist">Therapist</label>
                    &nbsp; &nbsp;&nbsp;
                    <input type="radio" id="Patient" name="who" value="Patient" />&nbsp;
                    <label for="Patient">Patient</label>

                </div>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>



                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <pre></pre>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">

                    Already registered <a href="index.html">sign in?</a>
                </p>
            </form>
        );
    }
}