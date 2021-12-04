import React from "react";
import ProfilePhoto from "./image/user4-128x128.jpg"
import "./css/plugins/fontawesome-free/css/all.min.css"

export default class Profile extends React.Component {


    constructor() {
        super();
        this.state = {
            name: "",
            degree: "",
            address: "",
            contact: "",
            clients: "",
            education: "",
            location: "",
            skills: "",
            Notes: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        this.setState({
            name: this.props.thisUserName,
            degree: "Psychotherapist, MA, RP",
            address: "312, John Doe Street, Toronto (A1B 2C3)",
            contact: "(543) 123-5889",
            clients: "21",
            education: "B.S. in PSycology from the University of Tennessee at Knoxville",
            location: "Malibu, California",
            skills: "Cognitive Therapy, Art Therapy, Painting Skills, Music enthusiast",
            Notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque."
        });
    }

    handleChange(event) {
        var newval = prompt("enter new value");

        var name = event.target.getAttribute('name');

        this.setState({ [name]: newval });

    }

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

                        <h3 className="profile-username text-center">{this.state.name}</h3>

                        <p className="text-muted text-center" name="degree" onClick={this.handleChange}>{this.state.degree} <i class="fa-solid fa-pencil"></i></p>

                        <ul className="list-group list-group-unbordered mb-3">
                            <li className="list-group-item">
                                <b>Office</b> <a className="float-right" name="address">{this.state.address}</a>
                            </li>
                            <li className="list-group-item">
                                <b>Phone</b> <a className="float-right" name="contact">{this.state.contact}</a>
                            </li>
                            <li className="list-group-item">
                                <b>Clients</b> <a className="float-right" name="clients">{this.state.clients}</a>
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
                        <strong ><i className="fas fa-book mr-1"></i> Education</strong>

                        <p className="text-muted" name="education">
                            {this.state.education}
                        </p>

                        <hr />

                        <strong><i className="fas fa-map-marker-alt mr-1"></i> Location</strong>

                        <p className="text-muted" name="location">{this.state.location}</p>

                        <hr />

                        <strong><i className="fas fa-pencil-alt mr-1"></i> Skills</strong>

                        <p className="text-muted">
                            <span className="tag tag-danger" name="skills">{this.state.skills}</span>
                            {/* <span className="tag tag-success">Art Therapy</span>
                            <span className="tag tag-info">Painting Skills</span>
                            <span className="tag tag-warning">Music enthusiast</span> */}

                        </p>

                        <hr />

                        <strong><i className="far fa-file-alt mr-1"></i> Notes</strong>

                        <p className="text-muted" name="Notes">{this.state.Notes}</p>
                    </div>
                    {/* <!-- /.card-body --> */}
                </div>


            </div>
        )
    }
}



