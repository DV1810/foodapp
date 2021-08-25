import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Leftsidebar from '../../pages/Leftsidebar';
import Rightsidebar from '../../pages/Rightsidebar';
import Topbar from '../../pages/Topbar';

export default class Restaurants extends Component {
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
                    <li className="breadcrumb-item"><NavLink to="#"><i className="material-icons">home</i> Home</NavLink></li>
                    <li className="breadcrumb-item active" aria-current="page">Restaurants</li>
                    <li className="breadcrumb-item active" aria-current="page">Restaurants List</li>
                  </ol>
                </nav>
                {/* Active Orders Graph */}
                <div className="ms-panel">
                  <div className="ms-panel-header">
                    <h6>Restaurant List</h6>
                  </div>
                  <div className="ms-panel-body">
                    <div className="table-responsive">
                      <table className="table table-hover thead-primary">
                        <thead>
                          <tr>
                            <th scope="col">Restaurant ID</th>
                            <th scope="col">Restaurant Name</th>
                            <th scope="col">Location</th>
                            <th scope="col">Ratings</th>
                            <th scope="col">Joining Date</th>
                            <th scope="col">Restaurant Sale(%)</th>
                            <th scope="col">Edit / Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">15451</th>
                            <td>Delizus</td>
                            <td> New York</td>
                            <td> <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                              <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                            </ul></td>
                            <td>12/10/19</td>
                            <td>90</td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">15452</th>
                            <td>Lumina</td>
                            <td> New York</td>
                            <td><ul className="ms-star-rating rating-fill rating-circle ratings-new">
                              <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                            </ul></td>
                            <td>20/9/19</td>
                            <td>99</td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">45263</th>
                            <td>Food Loung</td>
                            <td> New York</td>
                            <td> <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                              <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                            </ul></td>
                            <td>15/10/19</td>
                            <td>95</td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">45865</th>
                            <td>Hungry House</td>
                            <td> New York</td>
                            <td> <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                              <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                            </ul></td>
                            <td>21/11/19</td>
                            <td>88</td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">56652</th>
                            <td>Luncheon</td>
                            <td> New York</td>
                            <td> <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                              <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                            </ul></td>
                            <td>12/11/19</td>
                            <td>81</td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">65845</th>
                            <td>Spice 'n' Steam</td>
                            <td> New York</td>
                            <td><ul className="ms-star-rating rating-fill rating-circle ratings-new">
                              <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                            </ul></td>
                            <td>20/10/19</td>
                            <td>91</td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">65425</th>
                            <td>Tomato</td>
                            <td> New York</td>
                            <td> <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                              <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                            </ul></td>
                            <td>12/10/19</td>
                            <td>77</td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">54556</th>
                            <td>Bardojo</td>
                            <td> New York</td>
                            <td> <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                              <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                            </ul></td>
                            <td>12/11/19</td>
                            <td>78</td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">45556</th>
                            <td>Deliceiux</td>
                            <td> New York</td>
                            <td> <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                              <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                            </ul></td>
                            <td>22/10/19</td>
                            <td>88</td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">55856</th>
                            <td>Food Forest</td>
                            <td> New York</td>
                            <td> <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                              <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                            </ul></td>
                            <td>12/10/19</td>
                            <td>75</td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">36456</th>
                            <td>Food Bella</td>
                            <td> New York</td>
                            <td> <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                              <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                            </ul></td>
                            <td>18/11/19</td>
                            <td>90</td>
                            <td>
                              <NavLink to="#"><i className="fas fa-edit" /></NavLink>
                              <NavLink to="#"><i className="fa fa-trash" /></NavLink>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">78456</th>
                            <td>Red Chilly</td>
                            <td> New York</td>
                            <td> <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                              <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                              <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                            </ul></td>
                            <td>12/10/19</td>
                            <td>85</td>
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
