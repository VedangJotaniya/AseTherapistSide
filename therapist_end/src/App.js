import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import "./css/bootstrap.min.css"
import "./dist/css/adminlte.min.css"
import "./css/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from 'react-router';

import Reg from './Reg';
import HomePage from './HomePage';

function NotFound() {
  const history = useHistory();
  <div>
    Error 404 : Not Found
  </div>
  // history.push({ pathname: "/home" });

}


function App() {

  const [thisUserName, setThisUserName] = useState("");
  const [thisUserID, setThisUserID] = useState("");


  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Reg
              setThisUserName={setThisUserName}
              setThisUserID={setThisUserID} />
          </Route>
          <Route exact path="/home" component={HomePage} >
            <HomePage thisUserName={thisUserName} thisUserID={thisUserID} />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
      {/* <Reg /> */}

    </div>

  );
}

export default App;