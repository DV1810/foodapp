import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Leftsidebar from '../../pages/Leftsidebar';
import Rightsidebar from '../../pages/Rightsidebar';
import Topbar from '../../pages/Topbar';


export default class Invoicelist extends Component {
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
                    <li className="breadcrumb-item"><NavLink to="#">Invoice</NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Invoice List
                    </li>
                  </ol>
                </nav>
                <div className="col-12">
                  <div className="ms-panel">
                    <div className="ms-panel-header">
                      <h6>Invoice List</h6>
                    </div>
                    <div className="ms-panel-body">
                      <div className="table-responsive">
                        <table className="table table-hover thead-primary">
                          <thead>
                            <tr>
                              <th scope="col">Invoice ID</th>
                              <th scope="col">Order Name</th>
                              <th scope="col">Order Id</th>
                              <th scope="col">Invoice Date</th>
                              <th scope="col">Quantity</th>
                              <th scope="col">Total Bill</th>
                              <th scope="col">Send Invoice</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">15451</th>
                              <td>French Fries</td>
                              <td>001</td>
                              <td>19/02/2019</td>
                              <td>10</td>
                              <td>$10</td>
                              <td><NavLink to="#"><i className="far fa-paper-plane text-success" /></NavLink> <NavLink to="#"><i className="far fa-trash-alt ms-text-danger" /></NavLink>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">15452</th>
                              <td>Mango Pie</td>
                              <td>004</td>
                              <td>9/02/2019</td>
                              <td>14</td>
                              <td>$9</td>
                              <td><NavLink to="#"><i className="far fa-paper-plane text-success" /></NavLink> <NavLink to="#"><i className="far fa-trash-alt ms-text-danger" /></NavLink>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">45263</th>
                              <td>FrieD Egg Sandwich</td>
                              <td>003</td>
                              <td>18/02/2019</td>
                              <td>12</td>
                              <td>$19</td>
                              <td><NavLink to="#"><i className="far fa-paper-plane text-success" /></NavLink> <NavLink to="#"><i className="far fa-trash-alt ms-text-danger" /></NavLink>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">45865</th>
                              <td>Lemon Yogurt Parfait</td>
                              <td>005</td>
                              <td>16/02/2019</td>
                              <td>05</td>
                              <td>$18</td>
                              <td><NavLink to="#"><i className="far fa-paper-plane text-success" /></NavLink> <NavLink to="#"><i className="far fa-trash-alt ms-text-danger" /></NavLink>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">56652</th>
                              <td>Spicy Grill Sandwich</td>
                              <td>014</td>
                              <td>17/02/2019</td>
                              <td>15</td>
                              <td>$21</td>
                              <td><NavLink to="#"><i className="far fa-paper-plane text-success" /></NavLink> <NavLink to="#"><i className="far fa-trash-alt ms-text-danger" /></NavLink>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">65845</th>
                              <td>Chicken Sandwich</td>
                              <td>017</td>
                              <td>14/02/2019</td>
                              <td>120</td>
                              <td>$15</td>
                              <td><NavLink to="#"><i className="far fa-paper-plane text-success" /></NavLink> <NavLink to="#"><i className="far fa-trash-alt ms-text-danger" /></NavLink>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">65425</th>
                              <td>Veg Sandwich</td>
                              <td>045</td>
                              <td>13/02/2019</td>
                              <td>2</td>
                              <td>$15</td>
                              <td><NavLink to="#"><i className="far fa-paper-plane text-success" /></NavLink> <NavLink to="#"><i className="far fa-trash-alt ms-text-danger" /></NavLink>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">54556</th>
                              <td>Cake</td>
                              <td>033</td>
                              <td>11/02/2019</td>
                              <td>15</td>
                              <td>$15</td>
                              <td><NavLink to="#"><i className="far fa-paper-plane text-success" /></NavLink> <NavLink to="#"><i className="far fa-trash-alt ms-text-danger" /></NavLink>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">45556</th>
                              <td>Chicken Fried</td>
                              <td>077</td>
                              <td>12/02/2019</td>
                              <td>06</td>
                              <td>$15</td>
                              <td><NavLink to="#"><i className="far fa-paper-plane text-success" /></NavLink> <NavLink to="#"><i className="far fa-trash-alt ms-text-danger" /></NavLink>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">55856</th>
                              <td>Nachos</td>
                              <td>868</td>
                              <td>10/02/2019</td>
                              <td>08</td>
                              <td>$15</td>
                              <td><NavLink to="#"><i className="far fa-paper-plane text-success" /></NavLink> <NavLink to="#"><i className="far fa-trash-alt ms-text-danger" /></NavLink>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">36456</th>
                              <td>Spaghetti</td>
                              <td>777</td>
                              <td>20/02/2019</td>
                              <td>09</td>
                              <td>$15</td>
                              <td><NavLink to="#"><i className="far fa-paper-plane text-success" /></NavLink> <NavLink to="#"><i className="far fa-trash-alt ms-text-danger" /></NavLink>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">78456</th>
                              <td>Pastries</td>
                              <td>555</td>
                              <td>21/02/2019</td>
                              <td>14</td>
                              <td>$15</td>
                              <td><NavLink to="#"><i className="far fa-paper-plane text-success" /></NavLink> <NavLink to="#"><i className="far fa-trash-alt ms-text-danger" /></NavLink>
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
