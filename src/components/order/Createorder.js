import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Leftsidebar from '../../pages/Leftsidebar';
import Rightsidebar from '../../pages/Rightsidebar';
import Topbar from '../../pages/Topbar';

export default class Createorder extends Component {
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
                    <li className="breadcrumb-item"><NavLink to="#"><i className="material-icons">home</i> Home</NavLink></li>
                    <li className="breadcrumb-item"><NavLink to="#">Order</NavLink></li>
                    <li className="breadcrumb-item active" aria-current="page">Create Order</li>
                  </ol>
                </nav>
              </div>
              <div className="col-xl-12 col-md-12">
                <div className="ms-panel ms-panel-fh">
                  <div className="ms-panel-header">
                    <h6>Create Order</h6>
                  </div>
                  <div className="ms-panel-body">
                    <form className="needs-validation clearfix" noValidate>
                      <div className="form-row">
                        <div className="col-md-12 mb-12">
                          <label htmlFor="validationCustom18">Product Name</label>
                          <div className="input-group">
                            <select className="form-control" id="validationCustom18" placeholder="Product Name" value="Pizza" required>
                              <option value>Pizza</option>
                              <option value>burger</option>
                              <option value>sandwich</option>
                              <option value>roll</option>
                              <option value>Ice-cream</option>
                              <option value>Chicken</option>
                              <option value>samosa</option>
                              <option value>Rajma rice</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12 mb-12">
                          <label htmlFor="validationCustom22">Product ID</label>
                          <div className="input-group">
                            <select className="form-control" id="validationCustom22" required>
                              <option value>2133</option>
                              <option value>2134</option>
                              <option value>2135</option>
                              <option value>2136</option>
                              <option value>2137</option>
                              <option value>2138</option>
                              <option value>2139</option>
                              <option value>2140</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6 mb-12">
                          <label htmlFor="validationCustom24">Quantity</label>
                          <div className="input-group">
                            <input type="text" className="form-control" id="validationCustom24" placeholder="01" required />
                            <div className="invalid-feedback">
                              Quantity
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="validationCustom25">Total Amount</label>
                          <div className="input-group">
                            <input type="text" className="form-control" id="validationCustom25" placeholder="$10" required />
                            <div className="invalid-feedback">
                              Price
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                          <div className="row">
                            <div className="ms-panel-header new">
                              <button className="btn btn-primary d-block float-right" type="submit">Save and Continue</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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
