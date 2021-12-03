import React from "react";
import "./css/bootstrap.min.css"
import "./dist/css/adminlte.min.css"
import "./css/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
import "./css//plugins/daterangepicker/daterangepicker.css"
import Modal from "react-bootstrap/Modal";


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
            <div class="col-md-6">
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Date picker</h3>
              </div>
              <div class="card-body">
               
                
              

              
                <div class="form-group">
                  <label>Date and time range:</label>

                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="far fa-clock"></i></span>
                    </div>
                    <input type="text" class="form-control float-right" id="reservationtime" />
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
            modalShow: false
        }
    }
    
    render() {

        
        
        return (<div> Appointments

            <div class="card">
                <div class="card-header border-transparent">
                    <h3 class="card-title">Latest Appointments</h3>

                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse">
                            <i class="fas fa-minus"></i>
                        </button>
                        <button type="button" class="btn btn-tool" data-card-widget="remove">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table m-0">
                            <thead>
                                <tr>
                                    <th> ID</th>
                                    <th>Client</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a href="pages/examples/invoice.html">9842</a></td>
                                    <td>Sarah Johnes</td>
                                    <td><span class="badge badge-success">Task 1 Done</span></td>
                                    <td>
                                        <div class="sparkbar" data-color="#00a65a" data-height="20">2021/10/10</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="pages/examples/invoice.html">848</a></td>
                                    <td>John Doe</td>
                                    <td><span class="badge badge-warning">Task 1</span></td>
                                    <td>
                                        <div class="sparkbar" data-color="#f39c12" data-height="20">2021/21/2</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="pages/examples/invoice.html">29</a></td>
                                    <td>David johnes</td>
                                    <td><span class="badge badge-danger">Meeting 1</span></td>
                                    <td>
                                        <div class="sparkbar" data-color="#f56954" data-height="20">2021/10/01</div>
                                    </td>
                                </tr>

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