import React from "react";
import { BrowserRouter } from "react-router-dom";
import Modal from "bootstrap";
import "./css/bootstrap.min.css"
import "./dist/css/adminlte.min.css"
import "./css/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
import { unstable_getThreadID } from "scheduler/tracing";

function NewAssignment(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );

}


function Client(props) {
    console.log(props);
    const clientName = props.value.name;
    const clientID = props.value.id;
    const clientHeading = "Child";
    const clientAbout = " Client about";
    const clientTask = props.value.task;

    return (

        <div className="card bg-light">
            <div className="card-header text-muted border-bottom-0">
                {clientHeading}
            </div>
            <div className="card-body pt-0">
                <div className="row">
                    <div className="col">
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
                    name: "A",
                    id: "0",
                    task: "draw"
                },
                {
                    name: "A",
                    id: "1",
                    task: "draw"
                }


            ]
        }
        var modalShow = false;

    }


    render() {

        const clients = this.state.clients.map((client) => {
            console.log(client);
            return <Client key={client.id} value={client} />
        });

        return (
            <BrowserRouter>
                <div>
                    <div className="card card-solid">
                        <div>
                            <button className='btn-primary' onClick={() => { this.state.modalShow = true; }} >Add Assignment</button>
                        </div>
                        <div className="card-body pb-0">
                            <div className="row d-flex align-items-stretch">
                                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
                                    {clients}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <NewAssignment show={modalShow} onHide={() => { this.state.modalShow = false; }} />
            </BrowserRouter>
        )
    }
}



