import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Rightsidebar extends Component {
    render() {
        return (
            <div>
                         {/* Quick bar */}
        <aside id="ms-quick-bar" className="ms-quick-bar fixed ms-d-block-lg">
          <ul className="nav nav-tabs ms-quick-bar-list" role="tablist">
            <li className="ms-quick-bar-item ms-has-qa" role="presentation" data-toggle="tooltip" data-placement="left" title="Launch To-do-list" data-title="To-do-list">
              <NavLink to="#qa-toDo"  aria-controls="qa-toDo" role="tab" data-toggle="tab">
                <i className="fas fa-clipboard-list" />
              </NavLink>
            </li>
            <li className="ms-quick-bar-item ms-has-qa" role="presentation" data-toggle="tooltip" data-placement="left" title="Launch Reminders" data-title="Reminders">
              <NavLink to="#qa-reminder"  aria-controls="qa-reminder" role="tab" data-toggle="tab">
                <i className="far fa-bell" />
              </NavLink>
            </li>
            <li className="ms-quick-bar-item ms-has-qa" role="presentation" data-toggle="tooltip" data-placement="left" title="Launch Notes" data-title="Notes">
              <NavLink to="#qa-notes"  aria-controls="qa-notes" role="tab" data-toggle="tab">
                <i className="fas fa-pencil-alt" />
              </NavLink>
            </li>
            <li className="ms-quick-bar-item ms-has-qa" role="presentation" data-toggle="tooltip" data-placement="left" title="Invite Members" data-title="Invite Members">
              <NavLink to="#qa-invite"  aria-controls="qa-invite" role="tab" data-toggle="tab">
                <i className="fas fa-share-alt" />
              </NavLink>
            </li>
            <li className="ms-quick-bar-item ms-has-qa" role="presentation" data-toggle="tooltip" data-placement="left" title="Settings" data-title="Settings">
              <NavLink to="#qa-settings"  aria-controls="qa-settings" role="tab" data-toggle="tab">
                <i className="fas fa-cog" />
              </NavLink>
            </li>
          </ul>
          <div className="ms-configure-qa" data-toggle="tooltip" data-placement="left" title="Configure Quick Access">
            <NavLink to="#"  >
              <i className="fas fa-hammer" />
            </NavLink>
          </div>
          {/* Quick bar Content */}
          <div className="ms-quick-bar-content">
            <div className="ms-quick-bar-header clearfix">
              <h5 className="ms-quick-bar-title float-left">Title</h5>
              <button type="button" className="close ms-toggler" data-target="#ms-quick-bar" data-toggle="hideQuickBar" aria-label="Close"><span aria-hidden="true">×</span></button>
            </div>
            <div className="ms-quick-bar-body tab-content">
              <div role="tabpanel" className="tab-pane" id="qa-toDo">
                <div className="ms-quickbar-container ms-todo-list-container ms-scrollable">
                  <form className="ms-add-task-block">
                    <div className="form-group mx-3 mt-0  fs-14 clearfix">
                      <input type="text" className="form-control fs-14 float-left" id="task-block" name="todo-block" placeholder="Add Task Block" defaultValue />
                      <button type="submit" className="ms-btn-icon bg-primary float-right"><i className="material-icons text-disabled">add</i></button>
                    </div>
                  </form>
                  <ul className="ms-todo-list">
                    <li className="ms-card ms-qa-card ms-deletable">
                      <div className="ms-card-header clearfix">
                        <h6 className="ms-card-title">Task Block Title</h6>
                        <button data-toggle="tooltip" data-placement="left" title="Add a Task to this block" className="ms-add-task-to-block ms-btn-icon float-right"> <i className="material-icons text-disabled">add</i> </button>
                      </div>
                      <div className="ms-card-body">
                        <ul className="ms-list ms-task-block">
                          <li className="ms-list-item ms-to-do-task ms-deletable">
                            <label className="ms-checkbox-wrap ms-todo-complete">
                              <input type="checkbox" defaultValue />
                              <i className="ms-checkbox-check" />
                            </label>
                            <span> Task to do </span>
                            <button type="submit" className="close"><i className="flaticon-trash ms-delete-trigger"> </i></button>
                          </li>
                          <li className="ms-list-item ms-to-do-task ms-deletable">
                            <label className="ms-checkbox-wrap ms-todo-complete">
                              <input type="checkbox" defaultValue />
                              <i className="ms-checkbox-check" />
                            </label>
                            <span>Task to do</span>
                            <button type="submit" className="close"><i className="flaticon-trash ms-delete-trigger"> </i></button>
                          </li>
                        </ul>
                      </div>
                      <div className="ms-card-footer clearfix">
                        <NavLink to="#" className=" text-disabled mr-2"> <i className="flaticon-archive"> </i> Archive </NavLink>
                        <NavLink to="#" className=" text-disabled  ms-delete-trigger float-right"> <i className="flaticon-trash"> </i>
                          Delete </NavLink>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="qa-reminder">
                <div className="ms-quickbar-container ms-reminders">
                  <ul className="ms-qa-options">
                    <li> <NavLink to="#"  data-toggle="modal" data-target="#reminder-modal"> <i className="flaticon-bell" /> New
                      Reminder </NavLink> </li>
                  </ul>
                  <div className="ms-quickbar-container ms-scrollable">
                    <div className="ms-card ms-qa-card ms-deletable">
                      <div className="ms-card-body">
                        <p> Developer Meeting in Block B </p>
                        <span className="text-disabled fs-12"><i className="material-icons fs-14">access_time</i> Today - 3:45
                          pm</span>
                      </div>
                      <div className="ms-card-footer clearfix">
                        <div className="ms-note-editor float-right">
                          <NavLink to="#" className=" text-disabled mr-2" data-toggle="modal" data-target="#reminder-modal"> <i className="flaticon-pencil"> </i> Edit </NavLink>
                          <NavLink to="#" className=" text-disabled  ms-delete-trigger"> <i className="flaticon-trash"> </i> Delete </NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="ms-card ms-qa-card ms-deletable">
                      <div className="ms-card-body">
                        <p> Start adding change log to version 2 </p>
                        <span className="text-disabled fs-12"><i className="material-icons fs-14">access_time</i> Tomorrow - 12:00
                          pm</span>
                      </div>
                      <div className="ms-card-footer clearfix">
                        <div className="ms-note-editor float-right">
                          <NavLink to="#" className=" text-disabled mr-2" data-toggle="modal" data-target="#reminder-modal"> <i className="flaticon-pencil"> </i> Edit </NavLink>
                          <NavLink to="#" className=" text-disabled  ms-delete-trigger"> <i className="flaticon-trash"> </i> Delete </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="qa-notes">
                <ul className="ms-qa-options">
                  <li> <NavLink to="#"  data-toggle="modal" data-target="#notes-modal"> <i className="flaticon-sticky-note" /> New
                    Note </NavLink> </li>
                  <li> <NavLink to="#" > <i className="flaticon-excel" /> Export to Excel </NavLink> </li>
                </ul>
                <div className="ms-quickbar-container ms-scrollable">
                  <div className="ms-card ms-qa-card ms-deletable">
                    <div className="ms-card-header">
                      <h6 className="ms-card-title">Don't forget to check with the designer</h6>
                    </div>
                    <div className="ms-card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate urna in faucibus venenatis.
                        Etiam at dapibus neque,
                        vel varius metus. Pellentesque eget orci malesuada, venenatis magna et
                      </p>
                      <ul className="ms-note-members clearfix mb-0">
                        <li className="ms-deletable"> <img src="assets/img/people/people-3.jpg" alt="member" /> </li>
                        <li className="ms-deletable"> <img src="assets/img/people/people-5.jpg" alt="member" /> </li>
                      </ul>
                    </div>
                    <div className="ms-card-footer clearfix">
                      <div className="dropdown float-left">
                        <NavLink to="#" className=" text-disabled" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="flaticon-share-1" /> Share
                        </NavLink>
                        <ul className="dropdown-menu">
                          <li className="dropdown-menu-header">
                            <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Share With</span></h6>
                          </li>
                          <li className="dropdown-divider" />
                          <li className="ms-scrollable ms-dropdown-list ms-members-list">
                            <NavLink className=" media p-2" to="#">
                              <div className="mr-2 align-self-center">
                                <img src="assets/img/people/people-10.jpg" className="ms-img-round" alt="people" />
                              </div>
                              <div className="media-body">
                                <span>John Doe</span>
                              </div>
                            </NavLink>
                            <NavLink className=" media p-2" to="#">
                              <div className="mr-2 align-self-center">
                                <img src="assets/img/people/people-9.jpg" className="ms-img-round" alt="people" />
                              </div>
                              <div className="media-body">
                                <span>Raymart Sandiago</span>
                              </div>
                            </NavLink>
                            <NavLink className=" media p-2" to="#">
                              <div className="mr-2 align-self-center">
                                <img src="assets/img/people/people-7.jpg" className="ms-img-round" alt="people" />
                              </div>
                              <div className="media-body">
                                <span>Heather Brown</span>
                              </div>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="ms-note-editor float-right">
                        <NavLink to="#" className=" text-disabled mr-2" data-toggle="modal" data-target="#notes-modal"> <i className="flaticon-pencil"> </i> Edit </NavLink>
                        <NavLink to="#" className=" text-disabled  ms-delete-trigger"> <i className="flaticon-trash"> </i> Delete </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="ms-card ms-qa-card ms-deletable">
                    <div className="ms-card-header">
                      <h6 className="ms-card-title">Perform the required unit tests</h6>
                    </div>
                    <div className="ms-card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate urna in faucibus venenatis.
                        Etiam at dapibus neque,
                        vel varius metus. Pellentesque eget orci malesuada, venenatis magna et
                      </p>
                      <ul className="ms-note-members clearfix mb-0">
                        <li className="ms-deletable"> <img src="assets/img/people/people-9.jpg" alt="member" /> </li>
                      </ul>
                    </div>
                    <div className="ms-card-footer clearfix">
                      <div className="dropdown float-left">
                        <NavLink to="#" className=" text-disabled" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="flaticon-share-1" /> Share
                        </NavLink>
                        <ul className="dropdown-menu">
                          <li className="dropdown-menu-header">
                            <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Share With</span></h6>
                          </li>
                          <li className="dropdown-divider" />
                          <li className="ms-scrollable ms-dropdown-list ms-members-list">
                            <NavLink className=" media p-2" to="#">
                              <div className="mr-2 align-self-center">
                                <img src="assets/img/people/people-10.jpg" className="ms-img-round" alt="people" />
                              </div>
                              <div className="media-body">
                                <span>John Doe</span>
                              </div>
                            </NavLink>
                            <NavLink className=" media p-2" to="#">
                              <div className="mr-2 align-self-center">
                                <img src="assets/img/people/people-9.jpg" className="ms-img-round" alt="people" />
                              </div>
                              <div className="media-body">
                                <span>Raymart Sandiago</span>
                              </div>
                            </NavLink>
                            <NavLink className=" media p-2" to="#">
                              <div className="mr-2 align-self-center">
                                <img src="assets/img/people/people-7.jpg" className="ms-img-round" alt="people" />
                              </div>
                              <div className="media-body">
                                <span>Heather Brown</span>
                              </div>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="ms-note-editor float-right">
                        <NavLink to="#" className=" text-disabled mr-2" data-toggle="modal" data-target="#notes-modal"> <i className="flaticon-pencil"> </i> Edit </NavLink>
                        <NavLink to="#" className=" text-disabled  ms-delete-trigger"> <i className="flaticon-trash"> </i> Delete </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="qa-invite">
                <div className="ms-quickbar-container text-center ms-invite-member">
                  <i className="flaticon-network" />
                  <p>Invite Team Members</p>
                  <form>
                    <div className="ms-form-group">
                      <input type="text" placeholder="Member Email" className="form-control" name="invite-email" defaultValue />
                    </div>
                    <div className="ms-form-group">
                      <button type="submit" name="invite-member" className="btn btn-primary w-100">Invite</button>
                    </div>
                  </form>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="qa-settings">
                <div className="ms-quickbar-container text-center ms-invite-member">
                  <div className="row">
                    <div className="col-md-12 text-left mb-5">
                      <h4 className="section-title bold">Customize</h4>
                      <div>
                        <label className="ms-switch">
                          <input type="checkbox" id="dark-mode" />
                          <span className="ms-switch-slider round" />
                        </label>
                        <span> Dark Mode </span>
                      </div>
                      <div>
                        <label className="ms-switch">
                          <input type="checkbox" id="remove-quickbar" />
                          <span className="ms-switch-slider round" />
                        </label>
                        <span> Remove Quickbar </span>
                      </div>
                    </div>
                    <div className="col-md-12 text-left">
                      <h4 className="section-title bold">Keyboard Shortcuts</h4>
                      <p className="ms-directions mb-0"><code>Esc</code> Close Quick Bar</p>
                      <p className="ms-directions mb-0"><code>Alt + (1 -&gt; 6)</code> Open Quick Bar Tab</p>
                      <p className="ms-directions mb-0"><code>Alt + Q</code> Enable Quick Bar Configure Mode</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
            </div>
        )
    }
}
