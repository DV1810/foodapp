import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Leftsidebar from '../../pages/Leftsidebar';
import Rightsidebar from '../../pages/Rightsidebar';
import Topbar from '../../pages/Topbar';

export default class Chat extends Component {
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
                {/* Chat Sidebar */}
                <div className="col-xl-4 col-md-12">
                  <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-body py-3 px-0">
                      <div className="ms-chat-container">
                        <div className="ms-chat-header px-3">
                          <div className="ms-chat-user-container media clearfix">
                            <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                              <img src="../../assets/img/costic/customer-1.jpg" className="ms-img-round" alt="people" />
                            </div>
                            <div className="media-body ms-chat-user-info mt-1">
                              <h6>John Doe</h6>
                              <NavLink to="#" className="text-disabled has-chevron fs-12" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Available
                              </NavLink>
                              <ul className="dropdown-menu">
                                <li className="ms-dropdown-list">
                                  <NavLink className="media p-2" to="#">
                                    <div className="media-body"> <span>Busy</span>
                                    </div>
                                  </NavLink>
                                  <NavLink className="media p-2" to="#">
                                    <div className="media-body"> <span>Away</span>
                                    </div>
                                  </NavLink>
                                  <NavLink className="media p-2" to="#">
                                    <div className="media-body"> <span>Offline</span>
                                    </div>
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <form className="ms-form my-3" method="post">
                            <div className="ms-form-group my-0 mb-0 has-icon fs-14">
                              <input type="search" className="ms-form-input w-100" name="search" placeholder="Search for People and Groups" defaultValue /> <i className="flaticon-search text-disabled" />
                            </div>
                          </form>
                        </div>
                        <div className="ms-chat-body">
                          <ul className="nav nav-tabs tabs-bordered d-flex nav-justified px-3" role="tablist">
                            <li role="presentation" className="fs-12"><NavLink to="#chats-2" className="active show" role="tab" data-toggle="tab"> Chats </NavLink>
                            </li>
                            <li role="presentation" className="fs-12"><NavLink to="#groups-2" role="tab" data-toggle="tab"> Groups </NavLink>
                            </li>
                            <li role="presentation" className="fs-12"><NavLink to="#contacts-2" role="tab" data-toggle="tab"> Contacts </NavLink>
                            </li>
                          </ul>
                          <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active show fade in" id="chats-2">
                              <ul className="ms-scrollable">
                                <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                                  <div className="ms-chat-status ms-status-away ms-has-new-msg ms-chat-img mr-3 align-self-center"> <span className="msg-count">3</span>
                                    <img src="../../assets/img/costic/customer-2.jpg" className="ms-img-round" alt="people" />
                                  </div>
                                  <div className="media-body ms-chat-user-info mt-1">
                                    <h6>John Doe</h6>  <span className="ms-chat-time">2 Hours ago</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                    <NavLink to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                                    </NavLink>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li className="ms-dropdown-list">
                                        <NavLink className="media p-2" to="#">
                                          <div className="media-body"> <span>Archive</span>
                                          </div>
                                        </NavLink>
                                        <NavLink className="media p-2" to="#">
                                          <div className="media-body"> <span>Pin</span>
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
                                <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                                  <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                    <img src="../../assets/img/costic/customer-3.jpg" className="ms-img-round" alt="people" />
                                  </div>
                                  <div className="media-body ms-chat-user-info mt-1">
                                    <h6>John Doe</h6>  <span className="ms-chat-time">3 Hours ago</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                    <NavLink to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                                    </NavLink>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li className="ms-dropdown-list">
                                        <NavLink className="media p-2" to="#">
                                          <div className="media-body"> <span>Archive</span>
                                          </div>
                                        </NavLink>
                                        <NavLink className="media p-2" to="#">
                                          <div className="media-body"> <span>Pin</span>
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
                                <li className="ms-chat-user-container ms-open-chat selected ms-deletable p-3 media clearfix">
                                  <div className="ms-chat-status ms-status-offline ms-chat-img mr-3 align-self-center">
                                    <img src="../../assets/img/costic/customer-4.jpg" className="ms-img-round" alt="people" />
                                  </div>
                                  <div className="media-body ms-chat-user-info mt-1">
                                    <h6>John Doe</h6>  <span className="ms-chat-time">12 Hours ago</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                    <NavLink to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                                    </NavLink>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li className="ms-dropdown-list">
                                        <NavLink className="media p-2" to="#">
                                          <div className="media-body"> <span>Archive</span>
                                          </div>
                                        </NavLink>
                                        <NavLink className="media p-2" to="#">
                                          <div className="media-body"> <span>Pin</span>
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
                                <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                                  <div className="ms-chat-status ms-status-busy ms-chat-img mr-3 align-self-center">
                                    <img src="../../assets/img/costic/customer-5.jpg" className="ms-img-round" alt="people" />
                                  </div>
                                  <div className="media-body ms-chat-user-info mt-1">
                                    <h6>John Doe</h6>  <span className="ms-chat-time">Yesterday</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                    <NavLink to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                                    </NavLink>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li className="ms-dropdown-list">
                                        <NavLink className="media p-2" to="#">
                                          <div className="media-body"> <span>Archive</span>
                                          </div>
                                        </NavLink>
                                        <NavLink className="media p-2" to="#">
                                          <div className="media-body"> <span>Pin</span>
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
                                <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                                  <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                    <img src="../../assets/img/costic/customer-6.jpg" className="ms-img-round" alt="people" />
                                  </div>
                                  <div className="media-body ms-chat-user-info mt-1">
                                    <h6>John Doe</h6>  <span className="ms-chat-time">3 Days ago</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                    <NavLink to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                                    </NavLink>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li className="ms-dropdown-list">
                                        <NavLink className="media p-2" to="#">
                                          <div className="media-body"> <span>Archive</span>
                                          </div>
                                        </NavLink>
                                        <NavLink className="media p-2" to="#">
                                          <div className="media-body"> <span>Pin</span>
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
                                <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                                  <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                    <img src="../../assets/img/costic/customer-7.jpg" className="ms-img-round" alt="people" />
                                  </div>
                                  <div className="media-body ms-chat-user-info mt-1">
                                    <h6>John Doe</h6>  <span className="ms-chat-time">3 Days ago</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                    <NavLink to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                                    </NavLink>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li className="ms-dropdown-list">
                                        <NavLink className="media p-2" to="#">
                                          <div className="media-body"> <span>Archive</span>
                                          </div>
                                        </NavLink>
                                        <NavLink className="media p-2" to="#">
                                          <div className="media-body"> <span>Pin</span>
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
                                <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                                  <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                    <img src="../../assets/img/costic/customer-8.jpg" className="ms-img-round" alt="people" />
                                  </div>
                                  <div className="media-body ms-chat-user-info mt-1">
                                    <h6>John Doe</h6>  <span className="ms-chat-time">3 Days ago</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                    <NavLink to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                                    </NavLink>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li className="ms-dropdown-list">
                                        <NavLink className="media p-2" to="#">
                                          <div className="media-body"> <span>Archive</span>
                                          </div>
                                        </NavLink>
                                        <NavLink className="media p-2" to="#">
                                          <div className="media-body"> <span>Pin</span>
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
                            <div role="tabpanel" className="tab-pane fade" id="groups-2">
                              <ul className="ms-scrollable">
                                <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                  <div className="ms-chat-img mr-3 align-self-center">
                                    <img src="../../assets/img/costic/customer-1.jpg" className="ms-img-round" alt="people" />
                                  </div>
                                  <div className="media-body ms-chat-user-info mt-1">
                                    <h6>John Doe</h6>
                                    <NavLink to="#" className="ms-chat-time"> <i className="flaticon-chat" />
                                    </NavLink>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                    <ul className="ms-group-members clearfix mt-3 mb-0">
                                      <li>
                                        <img src="../../assets/img/costic/customer-2.jpg" alt="member" />
                                      </li>
                                      <li>
                                        <img src="../../assets/img/costic/customer-3.jpg" alt="member" />
                                      </li>
                                      <li>
                                        <img src="../../assets/img/costic/customer-4.jpg" alt="member" />
                                      </li>
                                      <li className="ms-group-count">+ 12 more</li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                  <div className="ms-chat-img mr-3 align-self-center">
                                    <img src="../../assets/img/costic/customer-7.jpg" className="ms-img-round" alt="people" />
                                  </div>
                                  <div className="media-body ms-chat-user-info mt-1">
                                    <h6>John Doe</h6>
                                    <NavLink to="#" className="ms-chat-time"> <i className="flaticon-chat" />
                                    </NavLink>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                    <ul className="ms-group-members clearfix mt-3 mb-0">
                                      <li>
                                        <img src="../../assets/img/costic/customer-8.jpg" alt="member" />
                                      </li>
                                      <li>
                                        <img src="../../assets/img/costic/customer-9.jpg" alt="member" />
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                  <div className="ms-chat-img mr-3 align-self-center">
                                    <img src="../../assets/img/costic/customer-10.jpg" className="ms-img-round" alt="people" />
                                  </div>
                                  <div className="media-body ms-chat-user-info mt-1">
                                    <h6>John Doe</h6>
                                    <NavLink to="#" className="ms-chat-time"> <i className="flaticon-chat" />
                                    </NavLink>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                    <ul className="ms-group-members clearfix mt-3 mb-0">
                                      <li>
                                        <img src="../../assets/img/costic/customer-1.jpg" alt="member" />
                                      </li>
                                      <li>
                                        <img src="../../assets/img/costic/customer-3.jpg" alt="member" />
                                      </li>
                                      <li>
                                        <img src="../../assets/img/costic/customer-2.jpg" alt="member" />
                                      </li>
                                      <li className="ms-group-count">+ 4 more</li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="contacts-2">
                              <ul className="ms-scrollable">
                                <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                  <div className="ms-chat-img mr-3 align-self-center">
                                    <img src="../../assets/img/costic/customer-10.jpg" className="ms-img-round" alt="people" />
                                  </div>
                                  <div className="media-body ms-chat-user-info mt-1">
                                    <h6>John Doe</h6>
                                    <NavLink to="#" className="ms-chat-time"> <i className="flaticon-chat" />
                                    </NavLink>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                  </div>
                                </li>
                                <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                  <div className="ms-chat-img mr-3 align-self-center">
                                    <img src="../../assets/img/costic/customer-9.jpg" className="ms-img-round" alt="people" />
                                  </div>
                                  <div className="media-body ms-chat-user-info mt-1">
                                    <h6>John Doe</h6>
                                    <NavLink to="#" className="ms-chat-time"> <i className="flaticon-chat" />
                                    </NavLink>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                  </div>
                                </li>
                                <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                  <div className="ms-chat-img mr-3 align-self-center">
                                    <img src="../../assets/img/costic/customer-8.jpg" className="ms-img-round" alt="people" />
                                  </div>
                                  <div className="media-body ms-chat-user-info mt-1">
                                    <h6>John Doe</h6>
                                    <NavLink to="#" className="ms-chat-time"> <i className="flaticon-chat" />
                                    </NavLink>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                  </div>
                                </li>
                                <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                  <div className="ms-chat-img mr-3 align-self-center">
                                    <img src="../../assets/img/costic/customer-7.jpg" className="ms-img-round" alt="people" />
                                  </div>
                                  <div className="media-body ms-chat-user-info mt-1">
                                    <h6>John Doe</h6>
                                    <NavLink to="#" className="ms-chat-time"> <i className="flaticon-chat" />
                                    </NavLink>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                  </div>
                                </li>
                                <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                  <div className="ms-chat-img mr-3 align-self-center">
                                    <img src="../../assets/img/costic/customer-6.jpg" className="ms-img-round" alt="people" />
                                  </div>
                                  <div className="media-body ms-chat-user-info mt-1">
                                    <h6>John Doe</h6>
                                    <NavLink to="#" className="ms-chat-time"> <i className="flaticon-chat" />
                                    </NavLink>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                  </div>
                                </li>
                                <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                  <div className="ms-chat-img mr-3 align-self-center">
                                    <img src="../../assets/img/costic/customer-5.jpg" className="ms-img-round" alt="people" />
                                  </div>
                                  <div className="media-body ms-chat-user-info mt-1">
                                    <h6>John Doe</h6>
                                    <NavLink to="#" className="ms-chat-time"> <i className="flaticon-chat" />
                                    </NavLink>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Chat Body */}
                <div className="col-xl-8 col-md-12">
                  <div className="ms-panel ms-chat-conversations ms-widget">
                    <div className="ms-panel-header">
                      <div className="ms-chat-header justify-content-between">
                        <div className="ms-chat-user-container media clearfix">
                          <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                            <img src="../../assets/img/costic/customer-3.jpg" className="ms-img-round" alt="people" />
                          </div>
                          <div className="media-body ms-chat-user-info mt-1">
                            <h6>John Doe</h6>
                            <span className="text-disabled fs-12">
                              Active Now
                            </span>
                          </div>
                        </div>
                        <ul className="ms-list ms-list-flex ms-chat-controls">
                          <li data-toggle="tooltip" data-placement="top" title="Call"> <i className="material-icons">local_phone</i>
                          </li>
                          <li data-toggle="tooltip" data-placement="top" title="Video Call"> <i className="material-icons">videocam</i>
                          </li>
                          <li data-toggle="tooltip" data-placement="top" title="Add to Chat"> <i className="material-icons">person_add</i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ms-panel-body ms-scrollable">
                      <div className="ms-chat-bubble ms-chat-message ms-chat-outgoing media clearfix">
                        <div className="ms-chat-status ms-status-online ms-chat-img">
                          <img src="../../assets/img/costic/customer-3.jpg" className="ms-img-round" alt="people" />
                        </div>
                        <div className="media-body">
                          <div className="ms-chat-text">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                          </div>
                          <p className="ms-chat-time">10:33 pm</p>
                        </div>
                      </div>
                      <div className="ms-chat-bubble ms-chat-message media ms-chat-incoming clearfix">
                        <div className="ms-chat-status ms-status-online ms-chat-img">
                          <img src="../../assets/img/costic/customer-5.jpg" className="ms-img-round" alt="people" />
                        </div>
                        <div className="media-body">
                          <div className="ms-chat-text">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                          </div>
                          <p className="ms-chat-time">10:33 pm</p>
                        </div>
                      </div>
                      <div className="ms-chat-bubble ms-chat-message ms-chat-outgoing media clearfix">
                        <div className="ms-chat-status ms-status-online ms-chat-img">
                          <img src="../../assets/img/costic/customer-3.jpg" className="ms-img-round" alt="people" />
                        </div>
                        <div className="media-body">
                          <div className="ms-chat-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget orci ex.</p>
                          </div>
                          <p className="ms-chat-time">10:36 pm</p>
                        </div>
                      </div>
                      <div className="ms-chat-bubble ms-chat-message media ms-chat-incoming clearfix">
                        <div className="ms-chat-status ms-status-online ms-chat-img">
                          <img src="../../assets/img/costic/customer-5.jpg" className="ms-img-round" alt="people" />
                        </div>
                        <div className="media-body">
                          <div className="ms-chat-text">
                            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                          </div>
                          <p className="ms-chat-time">10:41 pm</p>
                        </div>
                      </div>
                      <div className="ms-chat-bubble ms-chat-message ms-chat-outgoing media clearfix">
                        <div className="ms-chat-status ms-status-online ms-chat-img">
                          <img src="../../assets/img/costic/customer-3.jpg" className="ms-img-round" alt="people" />
                        </div>
                        <div className="media-body">
                          <div className="ms-chat-text">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                          </div>
                          <p className="ms-chat-time">10:44 pm</p>
                        </div>
                      </div>
                      <div className="ms-chat-bubble ms-chat-message ms-chat-incoming media clearfix">
                        <div className="ms-chat-status ms-status-online ms-chat-img">
                          <img src="../../assets/img/costic/customer-5.jpg" className="ms-img-round" alt="people" />
                        </div>
                        <div className="media-body">
                          <div className="ms-chat-text">
                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                          </div>
                          <p className="ms-chat-time">11:01 pm</p>
                        </div>
                      </div>
                    </div>
                    <div className="ms-panel-footer pt-0">
                      <div className="ms-chat-textbox">
                        <ul className="ms-list-flex mb-0">
                          <li className="ms-chat-vn"><i className="material-icons">mic</i>
                          </li>
                          <li className="ms-chat-input">
                            <input type="text" name="msg" placeholder="Enter Message" defaultValue />
                          </li>
                          <li>
                            <ul className="ms-chat-text-controls ms-list-flex">
                              <li> <i className="material-icons">tag_faces</i>
                              </li>
                              <li> <i className="material-icons">attach_file</i>
                              </li>
                              <li> <i className="material-icons">camera_alt</i>
                              </li>
                            </ul>
                          </li>
                        </ul>
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
