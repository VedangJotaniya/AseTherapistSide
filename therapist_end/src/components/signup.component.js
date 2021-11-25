import React, { Component } from "react";


export default class SignUp extends Component {

    constructor() {
        super();
<<<<<<< HEAD
        this.setState ={
            FName: "",
            LName: "",
            email: "",
            location: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.Senddata = this.Senddata.bind(this);
    }
    Senddata = (event) => {
        console.log(event);
        console.log(this.state);
        alert("Success");
    }
    
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.state = {
          [name]: value
        };
      }
    

=======

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
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    RegisterUser = () => {
        var isTherapist = document.getElementsByName("who").value;
        alert(isTherapist);
    }
>>>>>>> be2af17e6c37ce6d65d799334ec91d4787351b75

    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>I`m </label>
                    &nbsp; &nbsp;&nbsp;
                    <input type="radio" id="Therapist" name="who" value="0" />&nbsp;
                    <label for="Therapist">Therapist</label>
                    &nbsp; &nbsp;&nbsp;
                    <input type="radio" id="Patient" name="who" value="1" />&nbsp;
                    <label for="Patient">Patient</label>
                </div>

                <div className="form-group">
<<<<<<< HEAD
                    <label>First name</label>
                    <input type="text" className="form-control" onChange={(e) => {this.handleChange(e)}}/>
=======
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
>>>>>>> be2af17e6c37ce6d65d799334ec91d4787351b75
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

<<<<<<< HEAD
                <button type="submit" className="btn btn-primary btn-block" onClick={() => {this.Senddata()}}>Sign Up</button>
=======
                <button type="button" className="btn btn-primary btn-block" onClick={this.RegisterUser}>Sign Up</button>
>>>>>>> be2af17e6c37ce6d65d799334ec91d4787351b75
                <p className="forgot-password text-right">

                    Already registered? <a href="/">Sign in</a>
                </p>
            </form>
        );
    }
}