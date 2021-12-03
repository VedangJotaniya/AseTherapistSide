import React from "react";
import "./css/bootstrap.min.css"
import "./dist/css/adminlte.min.css"
import "./css/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"


export default class Appointment extends React.Component {

    render() {

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
                                <tr>
                                    <td><a href="pages/examples/invoice.html">9842</a></td>
                                    <td>Sarah Johnes</td>
                                    <td><span className="badge badge-success">Task 1 Done</span></td>
                                    <td>
                                        <div className="sparkbar" data-color="#00a65a" data-height="20">2021/10/10</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="pages/examples/invoice.html">848</a></td>
                                    <td>John Doe</td>
                                    <td><span className="badge badge-warning">Task 1</span></td>
                                    <td>
                                        <div className="sparkbar" data-color="#f39c12" data-height="20">2021/21/2</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="pages/examples/invoice.html">29</a></td>
                                    <td>David johnes</td>
                                    <td><span className="badge badge-danger">Meeting 1</span></td>
                                    <td>
                                        <div className="sparkbar" data-color="#f56954" data-height="20">2021/10/01</div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer clearfix">

                    <button className="btn btn-sm btn-info float-left">Set new Appointementts</button>
                    <button className="btn btn-sm btn-secondary float-right">View All Appointments</button>
                </div>
            </div>


        </div>
        );
    }
}