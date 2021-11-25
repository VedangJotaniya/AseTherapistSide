import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import "./css/bootstrap.min.css"
import "./dist/css/adminlte.min.css"
import "./css/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"


// import Registration from './Registration';
import Appointments from './Appointments';
import Profile from './Profile';
import Chat from './Chat';
import Assignment from './Assignment';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router';

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Reg from './Reg';
import HomePage from './HomePage';

function NotFound() {
  const history = useHistory();

  history.push({ pathname: "/home" });

}


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Reg} />
          <Route exact path="/home" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      {/* <Reg /> */}

    </div>

  );
}

export default App;