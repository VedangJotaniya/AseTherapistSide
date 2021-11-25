import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./css/bootstrap.min.css"
import "./dist/css/adminlte.min.css"
import "./css/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
// import "./css/plugins/jquery/jquery.js"
// import "./css/plugins/bootstrap/js/bootstrap.js"
// import "./css/plugins/bootstrap/js/bootstrap.bundle.js"

function NewAssignment() {


    // return();

}


function Client(props) {
    console.log(props);
    const clientName = props.value.name;
    const clientID = props.value.id;
    const clientHeading = "Child";
    const clientAbout = " Client about";
    const clientTask = props.value.task;

    return (
        <BrowserRouter>
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
        </BrowserRouter>
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
                        <button className='btn-primary'>Add</button>
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
        )
    }
}



