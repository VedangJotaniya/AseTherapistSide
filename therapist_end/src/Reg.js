import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

import App from './App';
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import HomePage from "./HomePage";


function Reg(props) {

  let history = useHistory();
  const props1 = props;
  const [count, setCount] = useState(0);
  const [element, setElement] = useState("<Login/>");

  function changeReg(toVal) {
    setCount(toVal);
  }

  function loadElement(props) {

    var E;

    if (count == 0) {

      E = <Login authUser={props.authUser}
        testing={testing}
        setThisUserName={props1.setThisUserName}
        setThisUserID={props1.setThisUserID} />;
    }
    else {
      E = <SignUp authUser={props.authUser}
        testing={testing}
        setThisUserName={props1.setThisUserName}
        setThisUserID={props1.setThisUserID} />;
    }

    return E;
  }

  function testing(props) {
    alert(props);
    history.push(props);
  }


  function authUser(type) {
    alert(type);
    if (type == 0) {
      history.push("/home");
    }
    else {
      history.push("/client");
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
                <li className="nav-item">
                  <button className="nav-link" onClick={() => { authUser(0) }}>Sign up</button>
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-center">
              <div className="banner">Art Aid</div>
            </div>

          </div>
        </nav>
        <pre></pre>
        <div className="auth-wrapper">
          <div className="auth-inner">
            {loadElement(authUser)}

          </div>
        </div>
      </div>
      <Route exact path="/home" component={HomePage} />
    </Router>
  );
}

export default Reg;