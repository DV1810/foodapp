import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Leftsidebar from '../../pages/Leftsidebar';
import Rightsidebar from '../../pages/Rightsidebar';
import Topbar from '../../pages/Topbar';


export default class Adddeliverypart extends Component {
    render() {
        return (
      <div>

<Leftsidebar/>

  
<div>
  {/* Main Content */}
  <main className="body-content">
<Topbar/>
    {/* Body Content Wrapper */}
    <div className="ms-content-wrapper">
      <div className="row">
        <div className="col-md-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb pl-0">
              <li className="breadcrumb-item"><NavLink to="#"><i className="material-icons">home</i> Home</NavLink></li>
              <li className="breadcrumb-item"><NavLink to="#">Delivery Partner</NavLink></li>
              <li className="breadcrumb-item active" aria-current="page">Create</li>
            </ol>
          </nav>
        </div>
        <div className="col-xl-12 col-md-12">
          <div className="ms-panel ms-panel-fh">
            <div className="ms-panel-header">
              <h6>Add delivery partner</h6>
            </div>
            <div className="ms-panel-body">
              <form className="needs-validation clearfix" noValidate>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationCustom18">First name</label>
                    <div className="input-group">
                      <input type="text" className="form-control" id="validationCustom18" placeholder="First name" defaultValue="John" required />
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationCustom19">Last name</label>
                    <div className="input-group">
                      <input type="text" className="form-control" id="validationCustom19" placeholder="Last name" defaultValue="Doe" required />
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationCustom20">Email Address</label>
                    <div className="input-group">
                      <input type="email" className="form-control" id="validationCustom20" placeholder="Email Address" required />
                      <div className="invalid-feedback">
                        Please provide a valid email.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationCustom21">Phone Number</label>
                    <div className="input-group">
                      <input type="text" className="form-control" id="validationCustom21" placeholder="Phone Number" required />
                      <div className="invalid-feedback">
                        Please provide a number.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationCustom22">Country</label>
                    <div className="input-group">
                      <select className="form-control" id="validationCustom22" required>
                        <option value>01</option>
                        <option value>02</option>
                        <option value>03</option>
                        <option value>04</option>
                        <option value>05</option>
                        <option value>06</option>
                        <option value>07</option>
                        <option value>08</option>
                        <option value>09</option>
                        <option value>10</option>
                        <option value>11</option>
                        <option value>12</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a Country.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationCustom23">State</label>
                    <div className="input-group">
                      <select className="form-control" id="validationCustom23" required>
                        <option value>2020</option>
                        <option value>2021</option>
                        <option value>2022</option>
                        <option value>2023</option>
                        <option value>2024</option>
                        <option value>2025</option>
                        <option value>2026</option>
                        <option value>2027</option>
                        <option value>2028</option>
                        <option value>2029</option>
                        <option value>2030</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a State
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationCustom24">City</label>
                    <div className="input-group">
                      <input type="text" className="form-control" id="validationCustom24" placeholder="City" required />
                      <div className="invalid-feedback">
                        Please provide a city.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationCustom25">Zip code</label>
                    <div className="input-group">
                      <input type="text" className="form-control" id="validationCustom25" placeholder="Zip code" required />
                      <div className="invalid-feedback">
                        Please provide a ZIP.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <label htmlFor="validationCustom26">Address</label>
                    <div className="input-group">
                      <input type="text" className="form-control" id="validationCustom26" placeholder="Address" required />
                      <div className="invalid-feedback">
                        Please provide an Address.
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary d-block float-right" type="submit">Save and Continue</button>
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

  
</div>

        )
    }
}
