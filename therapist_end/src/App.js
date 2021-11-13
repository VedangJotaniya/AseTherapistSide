import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
// import Registration from './Registration';
import Appointments from './Appointments';
import Profile from './Profile';
import Chat from './Chat';
import Assignment from './Assignment';
import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";
// import { }

import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function App() {
  return (
    <div>
      <h1>ArtAid</h1>
      <Router>
        <Switch>
          <Route path="/Profile" component={Profile} />
          <Route path="/Assignments" component={Assignment} />
          <Route path="/Chat" component={Chat} />
          <Route path="/Appointment" component={Appointments} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;