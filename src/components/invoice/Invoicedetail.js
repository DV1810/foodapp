import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Leftsidebar from '../../pages/Leftsidebar';
import Rightsidebar from '../../pages/Rightsidebar';
import Topbar from '../../pages/Topbar';


export default class Invoicedetail extends Component {
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
                      <li className="breadcrumb-item"><NavLink to="#"><i className="material-icons">home</i> Home</NavLink>
                      </li>
                      <li className="breadcrumb-item"><NavLink to="#">Invoice</NavLink>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">Invoice Details</li>
                    </ol>
                  </nav>
                  <div className="ms-panel">
                    <div className="ms-panel-header header-mini">
                      <div className="d-flex justify-content-between">
                        <h6>Invoice</h6>
                        <h6>#135178</h6>
                      </div>
                    </div>
                    <div className="ms-panel-body">
                      {/* Invoice To */}
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <div className="invoice-address">
                            <h3>Reciever: </h3>
                            <h5>Anny Farisha</h5>
                            <p>Anny.123@hotmail.com</p>
                            <p className="mb-0">1642 Cambridge Drive, Phoenix, 85029 Arizona</p>
                            <p className="mb-0">Arizona</p>
                            <p>Phoenix</p>
                          </div>
                        </div>
                        <div className="col-md-6 text-md-right">
                          <ul className="invoice-date">
                            <li>Invoice Date : Saturday, April 07 2019</li>
                            <li>Due Date : Sunday, April 19 2019</li>
                          </ul>
                        </div>
                      </div>
                      {/* Invoice Table */}
                      <div className="ms-invoice-table table-responsive mt-5">
                        <table className="table table-hover text-right thead-light">
                          <thead>
                            <tr className="text-capitalize">
                              <th className="text-center w-5">id</th>
                              <th className="text-left">description</th>
                              <th>qty</th>
                              <th>Unit Cost</th>
                              <th>total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center">1</td>
                              <td className="text-left">Grilled Sandwich</td>
                              <td>1</td>
                              <td>$30</td>
                              <td>$30</td>
                            </tr>
                            <tr>
                              <td className="text-center">2</td>
                              <td className="text-left">Fried Egg Sandwich</td>
                              <td>1</td>
                              <td>$69</td>
                              <td>$69</td>
                            </tr>
                            <tr>
                              <td className="text-center">2</td>
                              <td className="text-left">Spicy Grilled Burger</td>
                              <td>2</td>
                              <td>$19</td>
                              <td>$38</td>
                            </tr>
                            <tr>
                              <td className="text-center">2</td>
                              <td className="text-left">Peri Peri Fries</td>
                              <td>2</td>
                              <td>$9</td>
                              <td>$18</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <td colSpan={4}>Total Cost:</td>
                              <td>$155</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                      <div className="invoice-buttons text-right"> <NavLink to="#" className="btn btn-primary mr-2">Print Invoice</NavLink>
                        <NavLink to="#" className="btn btn-primary">Send Invoice</NavLink>
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
