import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from './App';
import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function Reg() {

  const [count, setCount] = useState(0);
  const [element, setElement] = useState("<Login/>");

  function changeReg(toVal) {
    setCount(toVal);
  }

  function loadElement() {

    if (count == 0) {

      return <Login />;
    }
    else {
      return <SignUp />;
    }
  }
  return (

    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <button className="nav-link" onClick={() => { changeReg(0) }}>Login</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={() => { changeReg(1) }}>Sign up</button>
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

            {loadElement()}

          </div>
        </div>
      </div>
    </Router>
  );
}

export default Reg;