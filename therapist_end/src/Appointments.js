import React from "react";
import "./css/bootstrap.min.css"
import "./dist/css/adminlte.min.css"
import "./css/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
import "./css//plugins/daterangepicker/daterangepicker.css"
import Modal from "react-bootstrap/Modal";
import axios from "axios";


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
                    Set Appointment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="col-md-6">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Date picker</h3>
                        </div>
                        <div className="card-body">





                            <div className="form-group">
                                <label>Date and time range:</label>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-clock"></i></span>
                                    </div>
                                    <input type="text" className="form-control float-right" id="reservationtime" />
                                </div>

                            </div>




                        </div>

                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <button onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>

    );

}


export default class Appointment extends React.Component {

    constructor() {
        super();
        this.state = {
            modalShow: false,
            appointments: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/user/allSlots/${this.props.thisUserId}`)
            .then(result =>{
                console.log(result.data[0].slots)
            })
            .catch(err =>{
                console.log(err)
            });
    }


    render() {

        const appointmentEntries = this.state.appointments.map((app) => {
            return (
                <tr>
                    <td><a href="pages/examples/invoice.html">{app.Num}</a></td>
                    <td>{app.Name}</td>
                    <td><span className="badge badge-success">{app.Status}</span></td>
                    <td>
                        <div className="sparkbar" data-color="#00a65a" data-height="20">{app.Date}</div>
                    </td>
                </tr>
            );
        })





        return (<div> Appointments

            <div className="card">
                <div className="card-header border-transparent">
                    <h3 className="card-title">Latest Appointments</h3>

                    <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                            <i className="fas fa-minus"></i>
                        </button>
                        <button type="button" className="btn btn-tool" data-card-widget="remove">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table m-0">
                            <thead>
                                <tr>
                                    <th> ID</th>
                                    <th>Client</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointmentEntries}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer clearfix">

                    <a href="javascript:void(0)" > <button className='btn-primary' onClick={() => { this.setState({ modalShow: true }); }} >New Appointments</button></a>
                    <a href="javascript:void(0)" class="btn btn-sm btn-secondary float-right">View All Appointments</a>
                </div>
            </div>





            <NewAssignment show={this.state.modalShow} onHide={() => { this.setState({ modalShow: false }); }} />

        </div>


        );
    }
}