import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "./css/bootstrap.min.css"
import "./dist/css/adminlte.min.css"
import "./css/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
import { unstable_getThreadID } from "scheduler/tracing";
import axios from 'axios';

function NewAssignment(props) {

    const [state, setState] = useState({
        assignment: "",
        name: ""
    });

    function handlenameChange(event) {
        alert("name");
        setState({ name: event.target.value });
    }

    function handleAssignmentChange(event) {
        setState({ assignment: event.target.value });
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Set New Appointment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <label>Client</label>
                    <select className="form-control" name="name" >
                        <option value="John">John</option>
                        <option value="Jason">Jason</option>
                        <option value="Lawerence">Lawrence</option>
                        <option value="Aznam">Aznam</option>
                        <option value="Lorn">Lorn</option>
                        <option value="Mick">Mick</option>
                    </select>
                    <label className="form-label" >Type</label>
                    <div >
                        <input type="text" name="assignment" className="form-control" />
                    </div>

                </div>

            </Modal.Body>
            <Modal.Footer>
                <button className="submit" onClick={() => {
                    axios.post("http://localhost:3001/assignments/addAssignment", {
                        name: "Mick",
                        assignment: "Sketch",
                        date: "2021/11/26",
                        status: "Given"
                    }).then(res => {
                        console.log(res);
                        console.log(res.data);
                    })
                    props.onHide();
                }
                }>Submit</button>

                <button onClick={props.onHide}>Close</button>

            </Modal.Footer>
        </Modal >
    );

}


function Client(props) {
    console.log(props);
    const clientName = props.value.clientName;
    const clientID = props.value.id;
    const clientHeading = "Child";
    const clientAbout = props.value.assignment;
    const clientStatus = props.value.status;
    const clientDate = props.value.date;
    const clientTask = props.value.assignment;

    return (

        <div className="card bg-light w-25">
            <div className="card-header text-muted border-bottom-0">
                {clientHeading}
            </div>
            <div className="card-body pt-0">
                <div className="row">
                    <div className="col-auto">
                        <h2 className="lead"><b>{clientName}</b></h2>
                        <p className="text-muted text-sm"><b>About: </b> {clientAbout}</p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                            <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building"></i></span> {clientTask}</li>
                            <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone"></i></span> Phone #: + 800 - 12 12 23 52</li>
                        </ul>
                    </div>
                    <div className="col-5 text-center">
                        <img src="image/user1-128x128.jpg" alt="" className="img-circle img-fluid" />
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="text-right">
                    <button className="btn btn-sm bg-teal">
                        <i className="fas fa-comments"></i> M
                    </button>
                    <button className="btn btn-sm btn-primary">
                        <i className="fas fa-user"></i> View Profile
                    </button>
                </div>
            </div>
        </div>


    );
}





export default class Assignment extends React.Component {

    constructor() {
        super();
        this.state = {
            clients: [
                {
                    clientName: "Jason Horn",
                    id: "0",
                    assigment: "Sketching",
                    date: "Dec 01",
                    status: "InProgress"
                },
                {
                    clientName: "Mayank",
                    id: "1",
                    assigment: "Music Therapy #11",
                    date: "November 29",
                    status: "InProgress"
                },
                {
                    clientName: "Jayesh",
                    id: "2",
                    assigment: "Drawing #23",
                    date: "November 28",
                    status: "InProgress"
                },
                {
                    clientName: "Danielle",
                    id: "3",
                    assigment: "Meditation #12",
                    date: "November 26",
                    status: "InProgress"
                }


            ],
            modalShow: false
        }
    }

    componentDidMount() {
        var clients = axios.get("localhost:3001/getAssigments")
            .then(res => {
                this.setState({ clients: res.data })
            })
    }

    render() {

        const clients = this.state.clients.map((client) => {
            console.log(client);
            return <Client key={client.id} value={client} />
        });

        return (
            <div>
                <div className="card card-solid">
                    <div>
                        <button className='btn-primary' onClick={() => { this.setState({ modalShow: true }); }} >Add Assignment</button>
                    </div>
                    <div className="card-body pb-0">
                        <div className="row d-flex align-items-stretch">
                            <div className="col w-100">
                                {clients}
                            </div>
                            <NewAssignment show={this.state.modalShow} onHide={() => { this.setState({ modalShow: false }); }} />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

