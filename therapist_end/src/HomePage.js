import React from 'react';
import Appointments from './Appointments';
import Profile from './Profile';
import Chat from './Chat';
import Assignment from './Assignment';
import FAQ from './FAQ';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            thisUserName: "",
            thisUserID: ""
        }
    }

    componentDidMount() {

    }

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
                            <li className="nav-item  md-inline-block">
                                <Link to='/home/FAQ' className='nav-link'>FAQ</Link>
                            </li>
                            <li>
                                CN:{this.props.thisUserName}
                                ID:{this.props.thisUserID}
                            </li>

                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/home/Profile">
                            <Profile />
                        </Route>
                        <Route path="/home/Assignments" component={Assignment} />
                        <Route path="/home/Chat" component={Chat} />
                        <Route path="/home/Appointment" component={Appointments} />
                        <Route path="/home/FAQ" component={FAQ} />
                    </Switch>
                </Router>

            </div>

        );
    }


}

