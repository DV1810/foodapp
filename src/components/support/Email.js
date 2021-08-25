import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Leftsidebar from '../../pages/Leftsidebar';
import Rightsidebar from '../../pages/Rightsidebar';
import Topbar from '../../pages/Topbar';

export default class Email extends Component {
  render() {
    return (
      <div>

        <Leftsidebar />

        {/* Main Content */}
        <main className="body-content">
          <Topbar />
          {/* Body Content Wrapper */}
          <div className="ms-content-wrapper">
            <div className="ms-panel ms-email-panel">
              <div className="ms-panel-body p-0">
                <div className="ms-email-aside">
                  <NavLink to="#" className="btn btn-primary w-100 mt-0 has-icon"> <i className="flaticon-pencil" /> Compose Email</NavLink>
                  <ul className="ms-list ms-email-list">
                    <li className="ms-list-item ms-email-label">Main</li>
                    <li className="ms-list-item ms-active-email">
                      <NavLink to="#"> <i className="material-icons ms-has-notification">mail</i> Inbox <span>32</span>
                      </NavLink>
                    </li>
                    <li className="ms-list-item">
                      <NavLink to="#"> <i className="material-icons">flag</i> Flagged <span>12</span>
                      </NavLink>
                    </li>
                    <li className="ms-list-item">
                      <NavLink to="#"> <i className="material-icons">chat</i> Spam <span>17</span>
                      </NavLink>
                    </li>
                    <li className="ms-list-item">
                      <NavLink to="#"> <i className="material-icons">drafts</i> Drafts <span>22</span>
                      </NavLink>
                    </li>
                    <li className="ms-list-item">
                      <NavLink to="#"> <i className="material-icons">send</i> Sent <span>51</span>
                      </NavLink>
                    </li>
                    <li className="ms-list-item">
                      <NavLink to="#"> <i className="material-icons">delete</i> Trash <span>33</span>
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="ms-list ms-email-list">
                    <li className="ms-list-item ms-email-label">Folders</li>
                    <li className="ms-list-item"> <NavLink to="#"><i className="material-icons">folder</i> Social Media <span>123</span> </NavLink>
                    </li>
                    <li className="ms-list-item"> <NavLink to="#"><i className="material-icons">folder</i> Promotions <span>175</span> </NavLink>
                    </li>
                    <li className="ms-list-item"> <NavLink to="#"><i className="material-icons">folder</i> Updates <span>12</span> </NavLink>
                    </li>
                  </ul>
                  <ul className="ms-list ms-email-list bb-0">
                    <li className="ms-list-item ms-email-label">Others</li>
                    <li className="ms-list-item">
                      <NavLink to="#"> <i className="material-icons">local_phone</i> Phone Calls <span>2</span>
                      </NavLink>
                    </li>
                    <li className="ms-list-item">
                      <NavLink to="#"> <i className="material-icons">contacts</i> Contacts <span>233</span>
                      </NavLink>
                    </li>
                    <li className="ms-list-item">
                      <NavLink to="#"> <i className="material-icons">group</i> Groups <span>8</span>
                      </NavLink>
                    </li>
                  </ul>
                  <div className="ms-email-config">
                    <div className="progress progress-tiny">
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <p className="mb-0">54.27 GB (25%) of 150 GB used</p> <NavLink to="#">Manage Storage</NavLink>
                  </div>
                </div>
                {/* Email Main */}
                <div className="ms-email-main">
                  <div className="ms-panel-header">
                    <h6>Inbox</h6>
                    <p>You have 17 Unread Messages</p>
                    <ul className="ms-email-pagination">
                      <li>50-100 of 985</li>
                      <li className="ms-email-pagination-item">
                        <NavLink to="#" className="ms-email-pagination-link"> <i className="material-icons">keyboard_arrow_left</i>
                        </NavLink>
                      </li>
                      <li className="ms-email-pagination-item ">
                        <NavLink to="#" className="ms-email-pagination-link"> <i className="material-icons">keyboard_arrow_right</i>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="ms-email-header">
                    <ul className="ms-email-options">
                      <li>
                        <label className="ms-checkbox-wrap">
                          <input type="checkbox" className="ms-email-check-all" defaultValue /> <i className="ms-checkbox-check" />
                        </label>
                        <div className="dropdown"> <NavLink to="#" className="has-chevron" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Select
                        </NavLink>
                          <ul className="dropdown-menu">
                            <li className="ms-dropdown-list">
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Mark as read</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Flag</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Delete</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Archive</span>
                                </div>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <ul className="ms-email-options">
                      <li>
                        <NavLink to="#" className="text-disabled"> <i className="material-icons">refresh</i> Refresh</NavLink>
                      </li>
                      <li>
                        <NavLink to="#" className="text-disabled"> <i className="material-icons">local_offer</i> Tags</NavLink>
                      </li>
                      <li>
                        <NavLink to="#" className="text-disabled"> <i className="material-icons">folder</i> Folders</NavLink>
                      </li>
                    </ul>
                  </div>
                  {/* Email Content */}
                  <div className="ms-email-content">
                    <ul className="ms-scrollable">
                      <li className="media ms-email clearfix">
                        <div className="ms-email-controls">
                          <label className="ms-checkbox-wrap">
                            <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                          </label> <i className="material-icons ms-pin-email">flag</i>
                        </div>
                        <div className="ms-email-img mr-3 ">
                          <img src="../../assets/img/costic/customer-1.jpg" className="ms-img-round" alt="people" />
                        </div>
                        <div className="media-body ms-email-details"> <span className="ms-email-sender">John Doe</span>
                          <h6 className="ms-email-subject">[WordPress] New Comment</h6>  <span className="ms-email-time">2 Hours ago</span>
                          <p className="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                        </div>
                        <div className="dropdown">
                          <NavLink to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                          </NavLink>
                          <ul className="dropdown-menu dropdown-menu-right">
                            <li className="ms-dropdown-list">
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Mark as read</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2 ms-pin-email" to="#">
                                <div className="media-body"> <span>Flag</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Archive</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Delete</span>
                                </div>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="media ms-email pinned clearfix">
                        <div className="ms-email-controls">
                          <label className="ms-checkbox-wrap">
                            <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                          </label> <i className="material-icons ms-pin-email">flag</i>
                        </div>
                        <div className="ms-email-img mr-3 ">
                          <img src="../../assets/img/costic/customer-2.jpg" className="ms-img-round" alt="people" />
                        </div>
                        <div className="media-body ms-email-details"> <span className="ms-email-sender">John Doe</span>
                          <h6 className="ms-email-subject">[WordPress] New Comment</h6>  <span className="ms-email-time"> <NavLink to="#"><i className="material-icons">attachment</i></NavLink> 2 Hours ago</span>
                          <p className="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                        </div>
                        <div className="dropdown">
                          <NavLink to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                          </NavLink>
                          <ul className="dropdown-menu dropdown-menu-right">
                            <li className="ms-dropdown-list">
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Mark as read</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2 ms-pin-email" to="#">
                                <div className="media-body"> <span>Flag</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Archive</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Delete</span>
                                </div>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="media ms-email clearfix">
                        <div className="ms-email-controls">
                          <label className="ms-checkbox-wrap">
                            <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                          </label> <i className="material-icons ms-pin-email">flag</i>
                        </div>
                        <div className="ms-email-img mr-3 ">
                          <img src="../../assets/img/costic/customer-3.jpg" className="ms-img-round" alt="people" />
                        </div>
                        <div className="media-body ms-email-details"> <span className="ms-email-sender">John Doe</span>
                          <h6 className="ms-email-subject">[WordPress] New Comment</h6>  <span className="ms-email-time">2 Hours ago</span>
                          <p className="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                        </div>
                        <div className="dropdown">
                          <NavLink to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                          </NavLink>
                          <ul className="dropdown-menu dropdown-menu-right">
                            <li className="ms-dropdown-list">
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Mark as read</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2 ms-pin-email" to="#">
                                <div className="media-body"> <span>Flag</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Archive</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Delete</span>
                                </div>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="media ms-email clearfix">
                        <div className="ms-email-controls">
                          <label className="ms-checkbox-wrap">
                            <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                          </label> <i className="material-icons ms-pin-email">flag</i>
                        </div>
                        <div className="ms-email-img mr-3 ">
                          <img src="../../assets/img/costic/customer-4.jpg" className="ms-img-round" alt="people" />
                        </div>
                        <div className="media-body ms-email-details"> <span className="ms-email-sender">John Doe</span>
                          <h6 className="ms-email-subject">[WordPress] New Comment</h6>  <span className="ms-email-time">2 Hours ago</span>
                          <p className="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                        </div>
                        <div className="dropdown">
                          <NavLink to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                          </NavLink>
                          <ul className="dropdown-menu dropdown-menu-right">
                            <li className="ms-dropdown-list">
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Mark as read</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2 ms-pin-email" to="#">
                                <div className="media-body"> <span>Flag</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Archive</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Delete</span>
                                </div>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="media ms-email clearfix">
                        <div className="ms-email-controls">
                          <label className="ms-checkbox-wrap">
                            <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                          </label> <i className="material-icons ms-pin-email">flag</i>
                        </div>
                        <div className="ms-email-img mr-3 ">
                          <img src="../../assets/img/costic/customer-5.jpg" className="ms-img-round" alt="people" />
                        </div>
                        <div className="media-body ms-email-details"> <span className="ms-email-sender">John Doe</span>
                          <h6 className="ms-email-subject">[WordPress] New Comment</h6>  <span className="ms-email-time">2 Hours ago</span>
                          <p className="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                        </div>
                        <div className="dropdown">
                          <NavLink to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                          </NavLink>
                          <ul className="dropdown-menu dropdown-menu-right">
                            <li className="ms-dropdown-list">
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Mark as read</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2 ms-pin-email" to="#">
                                <div className="media-body"> <span>Flag</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Archive</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Delete</span>
                                </div>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="media ms-email clearfix">
                        <div className="ms-email-controls">
                          <label className="ms-checkbox-wrap">
                            <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                          </label> <i className="material-icons ms-pin-email">flag</i>
                        </div>
                        <div className="ms-email-img mr-3 ">
                          <img src="../../assets/img/costic/customer-6.jpg" className="ms-img-round" alt="people" />
                        </div>
                        <div className="media-body ms-email-details"> <span className="ms-email-sender">John Doe</span>
                          <h6 className="ms-email-subject">[WordPress] New Comment</h6>  <span className="ms-email-time">2 Hours ago</span>
                          <p className="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                        </div>
                        <div className="dropdown">
                          <NavLink to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                          </NavLink>
                          <ul className="dropdown-menu dropdown-menu-right">
                            <li className="ms-dropdown-list">
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Mark as read</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2 ms-pin-email" to="#">
                                <div className="media-body"> <span>Flag</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Archive</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Delete</span>
                                </div>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="media ms-email pinned clearfix">
                        <div className="ms-email-controls">
                          <label className="ms-checkbox-wrap">
                            <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                          </label> <i className="material-icons ms-pin-email">flag</i>
                        </div>
                        <div className="ms-email-img mr-3 ">
                          <img src="../../assets/img/costic/customer-7.jpg" className="ms-img-round" alt="people" />
                        </div>
                        <div className="media-body ms-email-details"> <span className="ms-email-sender">John Doe</span>
                          <h6 className="ms-email-subject">[WordPress] New Comment</h6>  <span className="ms-email-time">2 Hours ago</span>
                          <p className="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                        </div>
                        <div className="dropdown">
                          <NavLink to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                          </NavLink>
                          <ul className="dropdown-menu dropdown-menu-right">
                            <li className="ms-dropdown-list">
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Mark as read</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2 ms-pin-email" to="#">
                                <div className="media-body"> <span>Flag</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Archive</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Delete</span>
                                </div>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="media ms-email clearfix">
                        <div className="ms-email-controls">
                          <label className="ms-checkbox-wrap">
                            <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                          </label> <i className="material-icons ms-pin-email">flag</i>
                        </div>
                        <div className="ms-email-img mr-3 ">
                          <img src="../../assets/img/costic/customer-8.jpg" className="ms-img-round" alt="people" />
                        </div>
                        <div className="media-body ms-email-details"> <span className="ms-email-sender">John Doe</span>
                          <h6 className="ms-email-subject">[WordPress] New Comment</h6>  <span className="ms-email-time">2 Hours ago</span>
                          <p className="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                        </div>
                        <div className="dropdown">
                          <NavLink to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                          </NavLink>
                          <ul className="dropdown-menu dropdown-menu-right">
                            <li className="ms-dropdown-list">
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Mark as read</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2 ms-pin-email" to="#">
                                <div className="media-body"> <span>Flag</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Archive</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Delete</span>
                                </div>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="media ms-email pinned clearfix">
                        <div className="ms-email-controls">
                          <label className="ms-checkbox-wrap">
                            <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                          </label> <i className="material-icons ms-pin-email">flag</i>
                        </div>
                        <div className="ms-email-img mr-3 ">
                          <img src="../../assets/img/costic/customer-9.jpg" className="ms-img-round" alt="people" />
                        </div>
                        <div className="media-body ms-email-details"> <span className="ms-email-sender">John Doe</span>
                          <h6 className="ms-email-subject">[WordPress] New Comment</h6>  <span className="ms-email-time">2 Hours ago</span>
                          <p className="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                        </div>
                        <div className="dropdown">
                          <NavLink to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                          </NavLink>
                          <ul className="dropdown-menu dropdown-menu-right">
                            <li className="ms-dropdown-list">
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Mark as read</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2 ms-pin-email" to="#">
                                <div className="media-body"> <span>Flag</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Archive</span>
                                </div>
                              </NavLink>
                              <NavLink className="media p-2" to="#">
                                <div className="media-body"> <span>Delete</span>
                                </div>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
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
