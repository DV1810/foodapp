import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Select from 'react-select';
import Leftsidebar from '../../pages/Leftsidebar';
import Rightsidebar from '../../pages/Rightsidebar';
import Topbar from '../../pages/Topbar';

export default class List extends Component {
  render() {
    return (
      <div>

        <Leftsidebar />
        {/* Main Content */}
        <main className="body-content">
          <Topbar />
          <div className="ms-content-wrapper">
            <div className="row">
              <div className="col-md-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb pl-0">
                    <li className="breadcrumb-item"><NavLink to="#"><i className="material-icons">home</i> Home</NavLink>
                    </li>
                    <li className="breadcrumb-item"><NavLink to="#">Customer</NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">List</li>
                  </ol>
                </nav>
                <div className="ms-panel">
                  <div className="ms-panel-header">
                    <h6>Customer List</h6>
                  </div>
                  <div className="ms-panel-body">
                    <div className="table-responsive">
                      <table id="example" className="display" style={{ minWidth: 845 }}>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Joining Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Sonya Frost</td>
                            <td>Male</td>
                            <td><a href="javascript:void(0);"><strong>123 456 7890</strong></a></td>
                            <td><a href="javascript:void(0);"><strong>info@example.com</strong></a></td>
                            <td>2008/12/13</td>
                            <td>
                              <a href="#"><i className="fas fa-edit" /></a>
                              <a href="#"><i className="fa fa-trash" /></a>
                            </td>
                          </tr>
                          <tr>
                            <td>Jena Gaines</td>
                            <td>Female</td>
                            <td><a href="javascript:void(0);"><strong>123 456 7890</strong></a></td>
                            <td><a href="javascript:void(0);"><strong>info@example.com</strong></a></td>
                            <td>2008/12/19</td>
                            <td>
                              <a href="#"><i className="fas fa-edit" /></a>
                              <a href="#"><i className="fa fa-trash" /></a>
                            </td>
                          </tr>
                          <tr>
                            <td>Quinn Flynn</td>
                            <td>Male</td>
                            <td><a href="javascript:void(0);"><strong>123 456 7890</strong></a></td>
                            <td><a href="javascript:void(0);"><strong>info@example.com</strong></a></td>
                            <td>2013/03/03</td>
                            <td>
                              <a href="#"><i className="fas fa-edit" /></a>
                              <a href="#"><i className="fa fa-trash" /></a>
                            </td>
                          </tr>
                          <tr>
                            <td>Charde Marshall</td>
                            <td>Female</td>
                            <td><a href="javascript:void(0);"><strong>123 456 7890</strong></a></td>
                            <td><a href="javascript:void(0);"><strong>info@example.com</strong></a></td>
                            <td>2008/10/16</td>
                            <td>
                              <a href="#"><i className="fas fa-edit" /></a>
                              <a href="#"><i className="fa fa-trash" /></a>
                            </td>
                          </tr>
                          <tr>
                            <td>Haley Kennedy</td>
                            <td>Male</td>
                            <td><a href="javascript:void(0);"><strong>123 456 7890</strong></a></td>
                            <td><a href="javascript:void(0);"><strong>info@example.com</strong></a></td>
                            <td>2012/12/18</td>
                            <td>
                              <a href="#"><i className="fas fa-edit" /></a>
                              <a href="#"><i className="fa fa-trash" /></a>
                            </td>
                          </tr>
                          <tr>
                            <td>Tatyana Fitzpatrick</td>
                            <td>Male</td>
                            <td><a href="javascript:void(0);"><strong>123 456 7890</strong></a></td>
                            <td><a href="javascript:void(0);"><strong>info@example.com</strong></a></td>
                            <td>2010/03/17</td>
                            <td>
                              <a href="#"><i className="fas fa-edit" /></a>
                              <a href="#"><i className="fa fa-trash" /></a>
                            </td>
                          </tr>
                          <tr>
                            <td>Michael Silva</td>
                            <td>Female</td>
                            <td><a href="javascript:void(0);"><strong>123 456 7890</strong></a></td>
                            <td><a href="javascript:void(0);"><strong>info@example.com</strong></a></td>
                            <td>2012/11/27</td>
                            <td>
                              <a href="#"><i className="fas fa-edit" /></a>
                              <a href="#"><i className="fa fa-trash" /></a>
                            </td>
                          </tr>
                          <tr>
                            <td>Paul Byrd</td>
                            <td>Male</td>
                            <td><a href="javascript:void(0);"><strong>123 456 7890</strong></a></td>
                            <td><a href="javascript:void(0);"><strong>info@example.com</strong></a></td>
                            <td>2010/06/09</td>
                            <td>
                              <a href="#"><i className="fas fa-edit" /></a>
                              <a href="#"><i className="fa fa-trash" /></a>
                            </td>
                          </tr>
                          <tr>
                            <td>Shou Itou</td>
                            <td>Female</td>
                            <td><a href="javascript:void(0);"><strong>123 456 7890</strong></a></td>
                            <td><a href="javascript:void(0);"><strong>info@example.com</strong></a></td>
                            <td>2011/08/14</td>
                            <td>
                              <a href="#"><i className="fas fa-edit" /></a>
                              <a href="#"><i className="fa fa-trash" /></a>
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

    )
  }
}
