import React from "react";
import ProfilePhoto from "./image/user4-128x128.jpg"


export default class Profile extends React.Component {





    render() {
        return (
            <div>
                {/* <!-- Profile Image --> */}
                <div className="card card-primary card-outline">
                    <div className="card-body box-profile">
                        <div className="text-center">
                            <img className="profile-user-img img-fluid img-circle"
                                src={ProfilePhoto}
                            />
                        </div>

                        <h3 className="profile-username text-center">Nina Mcintire</h3>

                        <p className="text-muted text-center">Psychotherapist, MA, RP</p>

                        <ul className="list-group list-group-unbordered mb-3">
                            <li className="list-group-item">
                                <b>Office</b> <a className="float-right">312, John Doe Street, Toronto (A1B 2C3)</a>
                            </li>
                            <li className="list-group-item">
                                <b>Phone</b> <a className="float-right">(543) 123-5889</a>
                            </li>
                            <li className="list-group-item">
                                <b>Clients</b> <a className="float-right">87</a>
                            </li>
                        </ul>


                    </div>
                    {/* <!-- /.card-body --> */}
                </div>
                {/* <!-- /.card --> */}

                {/* <!-- About Me Box --> */}
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">About Me</h3>
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div className="card-body">
                        <strong><i className="fas fa-book mr-1"></i> Education</strong>

                        <p className="text-muted">
                            B.S. in PSycology from the University of Tennessee at Knoxville
                        </p>

                        <hr />

                        <strong><i className="fas fa-map-marker-alt mr-1"></i> Location</strong>

                        <p className="text-muted">Malibu, California</p>

                        <hr />

                        <strong><i className="fas fa-pencil-alt mr-1"></i> Skills</strong>

                        <p className="text-muted">
                            <span className="tag tag-danger">Cognitive Therapy</span>
                            <span className="tag tag-success">Art Therapy</span>
                            <span className="tag tag-info">Painting Skills</span>
                            <span className="tag tag-warning">Music enthusiast</span>

                        </p>

                        <hr />

                        <strong><i className="far fa-file-alt mr-1"></i> Notes</strong>

                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
                    </div>
                    {/* <!-- /.card-body --> */}
                </div>


            </div>
        )
    }
}



