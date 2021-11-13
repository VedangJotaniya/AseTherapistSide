import logo from './image/logo.svg';
import './css/App.css';
// import Registration from './Registration';
import Appointments from './Appointments';
import Profile from './Profile';
import Chat from './Chat';
import Assignment from './Assignment';
import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";
// import { }


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
