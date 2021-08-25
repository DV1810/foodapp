import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Leftsidebar from '../../pages/Leftsidebar';
import Rightsidebar from '../../pages/Rightsidebar';
import Topbar from '../../pages/Topbar';

export default class Orderlist extends Component {
  render() {
    return (
      <div>
        <Leftsidebar />


        <div>
          {/* Main Content */}
          <main className="body-content">
            <Topbar />
            {/* Body Content Wrapper */}
            <div className="ms-content-wrapper">
              <div className="row">
                <div className="col-md-12">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb pl-0">
                      <li className="breadcrumb-item"><NavLink to="#"><i className="material-icons">home</i> Home</NavLink></li>
                      <li className="breadcrumb-item"><NavLink to="#">Order</NavLink></li>
                      <li className="breadcrumb-item active" aria-current="page">Order List</li>
                    </ol>
                  </nav>
                </div>
                {/* Recent Placed Orders< */}
                <div className="col-12">
                  <div className="ms-panel">
                    <div className="ms-panel-header">
                      <h6>placed Orders</h6>
                    </div>
                    <div className="ms-panel-body">
                      <div className="table-responsive">
                        <table className="table table-hover thead-primary">
                          <thead>
                            <tr>
                              <th scope="col">Order ID</th>
                              <th scope="col">Items</th>
                              <th scope="col">Customer Name</th>
                              <th scope="col">Location</th>
                              <th scope="col">Order Status</th>
                              <th scope="col">Delivered Time</th>
                              <th scope="col">Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>1</td>
                              <td>Jhon Leo</td>
                              <td>New Town</td>
                              <td><span className="badge badge-primary">Pending</span>
                              </td>
                              <td>10:05</td>
                              <td>$10</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>1</td>
                              <td>Kristien</td>
                              <td>Old Town</td>
                              <td><span className="badge badge-dark">Cancelled</span>
                              </td>
                              <td>14:05</td>
                              <td>$9</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>1</td>
                              <td>Jack Suit</td>
                              <td>Oxford Street</td>
                              <td><span className="badge badge-success">Delivered</span>
                              </td>
                              <td>12:05</td>
                              <td>$19</td>
                            </tr>
                            <tr>
                              <th scope="row">4</th>
                              <td>1</td>
                              <td>Alesdro Guitto</td>
                              <td>Church hill</td>
                              <td><span className="badge badge-success">Delivered</span>
                              </td>
                              <td>12:05</td>
                              <td>$18</td>
                            </tr>
                            <tr>
                              <th scope="row">5</th>
                              <td>1</td>
                              <td>Jacob Sahwny</td>
                              <td>palace Road</td>
                              <td><span className="badge badge-success">Delivered</span>
                              </td>
                              <td>12:05</td>
                              <td>$21</td>
                            </tr>
                            <tr>
                              <th scope="row">6</th>
                              <td>1</td>
                              <td>Peter Gill</td>
                              <td>Street 21</td>
                              <td><span className="badge badge-primary">Pending</span>
                              </td>
                              <td>12:05</td>
                              <td>$8</td>
                            </tr>
                            <tr>
                              <th scope="row">7</th>
                              <td>4</td>
                              <td>Peter</td>
                              <td>Street 21</td>
                              <td><span className="badge badge-success">Delivered</span>
                              </td>
                              <td>12:05</td>
                              <td>$15</td>
                            </tr>
                            <tr>
                              <th scope="row">8</th>
                              <td>2</td>
                              <td>stefan</td>
                              <td>Street 21</td>
                              <td><span className="badge badge-primary">Pending</span>
                              </td>
                              <td>12:05</td>
                              <td>$12</td>
                            </tr>
                            <tr>
                              <th scope="row">9</th>
                              <td>3</td>
                              <td>alena</td>
                              <td>Street 21</td>
                              <td><span className="badge badge-success">Delivered</span>
                              </td>
                              <td>12:05</td>
                              <td>$15</td>
                            </tr>
                            <tr>
                              <th scope="row">10</th>
                              <td> 1</td>
                              <td>marry</td>
                              <td>Street 21</td>
                              <td><span className="badge badge-primary">Pending</span>
                              </td>
                              <td>12:05</td>
                              <td>$10</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Recent Orders< */}
              </div>
            </div>
          </main>
          {/* MODALS */}
          <Rightsidebar/>

          {/* Reminder Modal */}
          <div className="modal fade" id="reminder-modal" tabIndex={-1} role="dialog" aria-labelledby="reminder-modal">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header bg-secondary">
                  <h5 className="modal-title has-icon text-white"> New Reminder</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span>
                  </button>
                </div>
                <form>
                  <div className="modal-body">
                    <div className="ms-form-group">
                      <label>Remind me about</label>
                      <textarea className="form-control" name="reminder" defaultValue={""} />
                    </div>
                    <div className="ms-form-group"> <span className="ms-option-name fs-14">Repeat Daily</span>
                      <label className="ms-switch float-right">
                        <input type="checkbox" /> <span className="ms-switch-slider round" />
                      </label>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="ms-form-group">
                          <input type="text" className="form-control datepicker" name="reminder-date" defaultValue />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="ms-form-group">
                          <select className="form-control" name="reminder-time">
                            <option value>12:00 pm</option>
                            <option value>1:00 pm</option>
                            <option value>2:00 pm</option>
                            <option value>3:00 pm</option>
                            <option value>4:00 pm</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-secondary shadow-none" data-dismiss="modal">Add Reminder</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Notes Modal */}
          <div className="modal fade" id="notes-modal" tabIndex={-1} role="dialog" aria-labelledby="notes-modal">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header bg-secondary">
                  <h5 className="modal-title has-icon text-white" id="NoteModal">New Note</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span>
                  </button>
                </div>
                <form>
                  <div className="modal-body">
                    <div className="ms-form-group">
                      <label>Note Title</label>
                      <input type="text" className="form-control" name="note-title" defaultValue />
                    </div>
                    <div className="ms-form-group">
                      <label>Note Description</label>
                      <textarea className="form-control" name="note-description" defaultValue={""} />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-secondary shadow-none" data-dismiss="modal">Add Note</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>


      </div>

    )
  }
}
