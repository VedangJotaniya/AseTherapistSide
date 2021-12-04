import React, { Component } from "react";
import axios from "axios";

export default class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            contact: "",
            address: "",
            isTherapist: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.RegisterUser = this.RegisterUser.bind(this);
        this.handleTherapist = this.handleTherapist.bind(this);
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    RegisterUser = () => {

        const NewUser = {
            name: this.state.fname + " " + this.state.lname,
            email: this.state.email,
            password: this.state.password,
            contact: this.state.contact,
            address: this.state.address,
            isTherapist: this.state.isTherapist
        };


        const sample = {
            "name": "admin11",
            "password": "admin",
            "email": "jay11@gmail.com",
            "contact": "113456789",
            "address": "Johson Street",
            "isTherapist": "0"
        };

        this.props.setThisUserName(NewUser.name);
        this.props.setThisUserID(NewUser.contact);
        if (NewUser.isTherapist === "0")
            this.props.testing("/client");
        else
            this.props.testing("/home");
        // axios.post("http://localhost:3001/auth/register", { sample })
        //     .then(res => {
        //         alert(res.message);

        //         if (res.message === "Successfully Registered") {
        //             //this.history.push("/home");
        //             this.props.authUser(this.state.isTherapist);
        //         }


        //     })



    }

    handleTherapist(props) {
        this.setState({
            isTherapist: props.target.value
        })
    }

    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group" onClick={this.handleTherapist}>
                    <label>I`m </label>
                    &nbsp; &nbsp;&nbsp;
                    <input type="radio" id="Therapist" name="who" value="0" />&nbsp;
                    <label htmlFor="Therapist">Therapist</label>
                    &nbsp; &nbsp;&nbsp;
                    <input type="radio" id="Patient" name="who" value="1" />&nbsp;
                    <label htmlFor="Patient">Patient</label>
                </div>

                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label>First name</label>
                            <input type="text"
                                className="form-control"
                                placeholder="John"
                                value={this.state.fname}
                                name="fname"
                                onChange={this.handleChange} />
                        </div>
                        <div className="col">
                            <label>Last name</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Doe"
                                value={this.state.lname}
                                name="lname"
                                onChange={this.handleChange} />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
                        className="form-control"
                        placeholder="John.Doe01@example.ca"
                        value={this.state.email}
                        name="email"
                        onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={this.state.password}
                        name="password"
                        onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Contact</label>
                    <input type="number"
                        className="form-control"
                        placeholder="111-222-3333"
                        value={this.state.contact}
                        name="contact"
                        onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>City</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Toronto, CA"
                        value={this.state.address}
                        name="address"
                        onChange={this.handleChange} />
                </div>

                <button type="button" className="btn btn-primary btn-block" onClick={this.RegisterUser}>Sign Up</button>
                <p className="forgot-password text-right">

                    Already registered? <a href="/">Sign in</a>
                </p>
            </form>
        );
    }
}