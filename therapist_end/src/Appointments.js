import React from "react";
import "./css/bootstrap.min.css"
import "./dist/css/adminlte.min.css"
import "./css/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"


export default class Appointment extends React.Component {


    render() {


        return (<div> Appointment
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* <!-- Left navbar links --> */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars"></i></a>
                    </li>
                    <li className="nav-item  md-inline-block">
                        <a href="index3.html" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item d-none d-md-inline-block">
                        <a href="#" className="nav-link">Appointments</a>
                    </li>
                    <li className="nav-item d-none d-md-inline-block">
                        <a href="#" className="nav-link">Chats</a>
                    </li>
                    <li className="nav-item d-none d-md-inline-block">
                        <a href="#" className="nav-link">Assignments</a>
                    </li>


                </ul>
            </nav>
        </div>
        )
    }
}