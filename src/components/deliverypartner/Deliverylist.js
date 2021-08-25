import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Leftsidebar from '../../pages/Leftsidebar';
import Rightsidebar from '../../pages/Rightsidebar';
import Topbar from '../../pages/Topbar';


export default class Deliverylist extends Component {
    render() {
        return (
          <div>

<Leftsidebar/>

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
              <li className="breadcrumb-item active" aria-current="page">List</li>
            </ol>
          </nav>
          <div className="ms-panel">
            <div className="ms-panel-header">
              <h6>Delivery Partner List</h6>
            </div>
            <div className="ms-panel-body">
              <div className="table-responsive">
                <table className="table table-hover thead-primary">
                  <thead>
                    <tr>
                      <th scope="col">Partner's ID</th>
                      <th scope="col">Partner's Name</th>
                      <th scope="col">Location</th>
                      <th scope="col">Joining Date</th>
                      <th scope="col">Company</th>
                      <th scope="col">Edit / Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">15451</th>
                      <td>Jose Luis</td>
                      <td> New York</td>
                      <td>12/10/19</td>
                      <td>BlueDart</td>
                      <td>
                        <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                        <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">15452</th>
                      <td>Luis Phillip</td>
                      <td> New York</td>
                      <td>20/9/19</td>
                      <td>FedEx</td>
                      <td>
                        <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                        <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">45263</th>
                      <td>Keith Allen</td>
                      <td> New York</td>
                      <td>15/10/19</td>
                      <td>eCom Express</td>
                      <td>
                        <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                        <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">45865</th>
                      <td>Oliver Queen</td>
                      <td> New York</td>
                      <td>21/11/19</td>
                      <td>Delhivery</td>
                      <td>
                        <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                        <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">56652</th>
                      <td>Paul Fisher</td>
                      <td> New York</td>
                      <td>12/11/19</td>
                      <td>BlueDart</td>
                      <td>
                        <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                        <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">65845</th>
                      <td>Berry Allen</td>
                      <td> New York</td>
                      <td>20/10/19</td>
                      <td>eCom Express</td>
                      <td>
                        <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                        <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">65425</th>
                      <td>Emmet Gibson</td>
                      <td> New York</td>
                      <td>12/10/19</td>
                      <td>FedEx</td>
                      <td>
                        <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                        <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">54556</th>
                      <td>Edward Cullen</td>
                      <td> New York</td>
                      <td>12/11/19</td>
                      <td>Aramex</td>
                      <td>
                        <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                        <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">45556</th>
                      <td>Mark Allen</td>
                      <td> New York</td>
                      <td>22/10/19</td>
                      <td>Indian Post Service</td>
                      <td>
                        <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                        <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">55856</th>
                      <td>Jose Gibson</td>
                      <td> New York</td>
                      <td>12/10/19</td>
                      <td>Indian Post Service</td>
                      <td>
                        <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                        <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">36456</th>
                      <td>Elon Musk</td>
                      <td> New York</td>
                      <td>18/11/19</td>
                      <td>BlueDart</td>
                      <td>
                        <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                        <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">78456</th>
                      <td>Paul Johnson</td>
                      <td> New York</td>
                      <td>12/10/19</td>
                      <td>FedEx</td>
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
