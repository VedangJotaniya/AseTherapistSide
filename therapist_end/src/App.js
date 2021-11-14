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
// import { }

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Reg from './Reg';
import HomePage from './HomePage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Router>
            <Route path="/" component={<Reg />} />
            <Route path="/home" component={<HomePage />} />
          </Router>
        </Switch>
      </Router>
    </div>

  );
}

export default App;