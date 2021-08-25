import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Leftsidebar from '../../pages/Leftsidebar';
import Rightsidebar from '../../pages/Rightsidebar';
import Topbar from '../../pages/Topbar';


export default class Transaction extends Component {
  render() {
    return (
      <div>

        <Leftsidebar />
        {/* Main Content */}
        <main className="body-content">
          <Topbar />
          {/* Body Content Wrapper */}
          <div className="ms-content-wrapper">
            <div className="row">
              <div className="col-md-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb pl-0">
                    <li className="breadcrumb-item"><NavLink to="#"><i className="material-icons">home</i> Home</NavLink>
                    </li>
                    <li className="breadcrumb-item"><NavLink to="#">Transactions</NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Transaction History</li>
                  </ol>
                </nav>
                <div className="ms-panel">
                  <div className="ms-panel-header">
                    <h6>Transaction History</h6>
                  </div>
                  <div className="ms-panel-body">
                    <div className="table-responsive">
                      <table id="example" className="display" style={{ minWidth: 845 }}>
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Account</th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Aug 10, 2021</td>
                            <td><img src="../../assets/img/costic/french-fries.jpg" style={{ width: 50, height: 30 }} />french fries</td>
                            <td><NavLink to="javascript:void(0);"><strong>Saving account</strong></NavLink></td>
                            <td><NavLink to="javascript:void(0);"><strong>food</strong></NavLink></td>
                            <td>$47</td>
                            <td><span className="badge badge-success">Success</span>
                            </td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                          <tr>
                            <td>Aug 08, 2021</td>
                            <td><img src="../../assets/img/costic/french-fries.jpg" style={{ width: 50, height: 30 }} />French Crostini</td>
                            <td><NavLink to="javascript:void(0);"><strong>saving account</strong></NavLink></td>
                            <td><NavLink to="javascript:void(0);"><strong>Food</strong></NavLink></td>
                            <td>$16</td>
                            <td><span className="badge badge-success">Success</span>
                            </td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                          <tr>
                            <td>Aug 08, 2021</td>
                            <td><img src="../../assets/img/costic/egg-sandwich.jpg" style={{ width: 50, height: 30 }} />Noodels</td>
                            <td><NavLink to="javascript:void(0);"><strong>Visa card</strong></NavLink></td>
                            <td><NavLink to="javascript:void(0);"><strong> Food</strong></NavLink></td>
                            <td>$43</td>
                            <td><span className="badge badge-success">Success</span>
                            </td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                          <tr>
                            <td>Aug 07,2021</td>
                            <td><img src="../../assets/img/costic/egg-sandwich.jpg" style={{ width: 50, height: 30 }} />Garlic Bread</td>
                            <td><NavLink to><strong>UPI-Phonepe </strong></NavLink></td>
                            <td><NavLink to><strong> Food</strong></NavLink></td>
                            <td>$3</td>
                            <td><span className="badge badge-success">Success</span>
                            </td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                          <tr>
                            <td>Aug 06,2021</td>
                            <td><img src="../../assets/img/costic/french-fries.jpg" style={{ width: 50, height: 30 }} />Pizza</td>
                            <td><NavLink to><strong>Visa Card</strong></NavLink></td>
                            <td><NavLink to><strong>Food</strong></NavLink></td>
                            <td>$85</td>
                            <td><span className="badge badge-danger">Cancelled</span>
                            </td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                          <tr>
                            <td>Aug 04,2021</td>
                            <td><img src="../../assets/img/costic/egg-sandwich.jpg" style={{ width: 50, height: 30 }} />Lemon Rice</td>
                            <td><NavLink to><strong>UPI-Paytm</strong></NavLink></td>
                            <td><NavLink to><strong>Food</strong></NavLink></td>
                            <td>$21</td>
                            <td><span className="badge badge-success">Success</span>
                            </td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                          <tr>
                            <td>Aug 03,2021</td>
                            <td><img src="../../assets/img/costic/pizza.jpg" style={{ width: 50, height: 30 }} />Fried Rice</td>
                            <td><NavLink to><strong>mastercard</strong></NavLink></td>
                            <td><NavLink to><strong> Food</strong></NavLink></td>
                            <td>$32</td>
                            <td><span className="badge badge-success">Success</span>
                            </td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                          <tr>
                            <td>Aug 03,2021</td>
                            <td><img src="../../assets/img/costic/french-fries.jpg" style={{ width: 50, height: 30 }} />Baked Nachos</td>
                            <td><NavLink to><strong>saving account</strong></NavLink></td>
                            <td><NavLink to><strong> Food</strong></NavLink></td>
                            <td>$10</td>
                            <td><span className="badge badge-danger">Cancelled</span>
                            </td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                          <tr>
                            <td>Aug 02,2021</td>
                            <td><img src="../../assets/img/costic/egg-sandwich.jpg" style={{ width: 50, height: 30 }} />Multigrain Hot Cereal</td>
                            <td><NavLink to><strong>Visa Card</strong></NavLink></td>
                            <td><NavLink to><strong>Food</strong></NavLink></td>
                            <td>$13</td>
                            <td><span className="badge badge-danger">Cancelled</span>
                            </td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                          <tr>
                            <td>Aug 01,2021</td>
                            <td><img src="../../assets/img/costic/cereals.jpg" style={{ width: 50, height: 30 }} /> Sandwich</td>
                            <td><NavLink to><strong>UPI-Paytm</strong></NavLink></td>
                            <td><NavLink to><strong>Food</strong></NavLink></td>
                            <td>$37</td>
                            <td><span className="badge badge-success">Success</span>
                            </td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
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
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              </div>
              <form>
                <div className="modal-body">
                  <div className="ms-form-group">
                    <label>Remind me about</label>
                    <textarea className="form-control" name="reminder" defaultValue={""} />
                  </div>
                  <div className="ms-form-group">
                    <span className="ms-option-name fs-14">Repeat Daily</span>
                    <label className="ms-switch float-right">
                      <input type="checkbox" />
                      <span className="ms-switch-slider round" />
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
                  <button type="button" className="btn btn-secondary shadow-none" data-dismiss="modal">Add
                    Reminder</button>
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
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
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
                  <button type="button" className="btn btn-secondary shadow-none" data-dismiss="modal">Add
                    Note</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
