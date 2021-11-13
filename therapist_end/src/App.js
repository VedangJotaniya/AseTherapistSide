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


function App() {
  return (
    <div>
      <Router>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* <!-- Left navbar links --> */}
          <ul className="navbar-nav">
            <li className="nav-item  md-inline-block">
              <Link to='/Profile' className='nav-link'>Profile</Link>
            </li>
            <li className="nav-item d-none d-md-inline-block">
              <Link to="/Appointment" className='nav-link'>Appointments</Link>
            </li>
            <li className="nav-item d-none d-md-inline-block">
              <Link to="/Chat" className='nav-link'>Chats</Link>
            </li>
            <li className="nav-item d-none d-md-inline-block">
              <Link to="/Assignments" className='nav-link'>Assignments</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Assignments" component={Assignment} />
          <Route path="/Chat" component={Chat} />
          <Route path="/Appointment" component={Appointments} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
