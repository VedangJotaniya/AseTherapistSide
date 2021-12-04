import React from 'react';
import Appointments from './Appointments';
import Profile from './Profile';
import Chat from './Chat';
import Assignment from './Assignment';
import FAQ from './FAQ';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import headimg from './image/img1.jpg';


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
                            <li className="nav-item  md-inline-block">
                                <Link to='/home/FAQ' className='nav-link'>FAQ</Link>
                            </li>
                             <li className="nav-item  md-inline-block">
                                <Link to='/home/FAQ' className='nav-link'>FAQ</Link>
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
                {/* <div className="headimg">
                <img src={headimg} width="1300" height="550"/>        
            </div>
            <div className='div2'>
                    <p style={{textAlign:'center', fontWeight:'bold'}}>Let clients schedule therapy appointments online with ease</p>
                    <p style={{textAlign:'center'}}>With Art Aid clients can schedule appointments in just seconds at any convenient time. The schedule allows you to add therapist, also offer different services in one schedule. Would you like to synchronize your online appointment schedule with your private agenda to make sure no therapy appointments can be booked when you have a private appointment? No problem ..................    
                    We are here!</p>
            </div> */}
            
            </div>

        );
    }


}

