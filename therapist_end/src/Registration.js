import React from 'react';
import './css/bootstrap.min.css';
import './css/Registration.css';
import { Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function Registration() {
  return (<Router>
    <div className="Registration">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
          <div class="d-flex justify-content-center">
            <div class="banner">Art Aid</div>
          </div>

        </div>
      </nav>
      <pre></pre>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />

          </Routes>
        </div>
      </div>
    </div></Router>
  );
}

export default Registration;