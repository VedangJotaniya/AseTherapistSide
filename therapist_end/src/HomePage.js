import React from 'react';
import Appointments from './Appointments';
import Profile from './Profile';
import Chat from './Chat';
import Assignment from './Assignment';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export default class HomePage extends React.Component {


    render() {
        return (
            <div>
                <Router>
                    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                        {/* <!-- Left navbar links --> */}
                        <ul className="navbar-nav">
                            <li className="nav-item  md-inline-block">
                                <Link to='/Home' className='nav-link'>Home</Link>
                            </li>

                            <li className="nav-item  md-inline-block">
                                <Link to='/home/Profile' className='nav-link'>Profile</Link>
                            </li>
                            <li className="nav-item d-none d-md-inline-block">
                                <Link to="/home/Appointment" className='nav-link'>Appointments</Link>
                            </li>
                            <li className="nav-item d-none d-md-inline-block">
                                <Link to="/home/Chat" className='nav-link'>Chats</Link>
                            </li>
                            <li className="nav-item d-none d-md-inline-block">
                                <Link to="/home/Assignments" className='nav-link'>Assignments</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* <Switch> */}
                    <Route path="/home/Profile">
                        <Profile />
                    </Route>
                    <Route path="/home/Assignments" component={Assignment} />
                    <Route path="/home/Chat" component={Chat} />
                    <Route path="/home/Appointment" component={Appointments} />
                    {/* </Switch> */}
                </Router>

            </div>

        );
    }


}

