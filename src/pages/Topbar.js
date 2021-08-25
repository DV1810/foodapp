import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Topbar extends Component {
    render() {
        return (
            <div>
                     {/* Navigation Bar */}
          <nav className="navbar ms-navbar">
            <div className="ms-aside-toggler ms-toggler pl-0" data-target="#ms-side-nav" data-toggle="slideLeft"> <span className="ms-toggler-bar bg-primary" />
              <span className="ms-toggler-bar bg-primary" />
              <span className="ms-toggler-bar bg-primary" />
            </div>
            <div className="logo-sn logo-sm ms-d-block-sm">
              <NavLink className="nav-link pl-0 ml-0 text-center navbar-brand mr-0" to="/"><img src="assets/img/costic/costic-logo-84x41.png" alt="logo" /> </NavLink>
            </div>
            <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">
              <li className="ms-nav-item ms-search-form pb-0 py-0">
                <form className="ms-form" method="post">
                  <div className="ms-form-group my-0 mb-0 has-icon fs-14">
                    <input type="search" className="ms-form-input" name="search" placeholder="Search here..." /> <i className="fas fa-search " />
                  </div>
                </form>
              </li>
              <li className="ms-nav-item dropdown"> <NavLink to="#" className="nav-link text-disabled ms-has-notification" id="mailDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="far fa-envelope"></i></NavLink>
                <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="mailDropdown">
                  <li className="dropdown-menu-header">
                    <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Mail</span></h6><span className="badge badge-pill badge-success">3 New</span>
                  </li>
                  <li className="dropdown-divider" />
                  <li className="ms-scrollable ms-dropdown-list">
                    <NavLink className="nav-link media p-2" to="#">
                      <div className="ms-chat-status ms-status-offline ms-chat-img mr-2 align-self-center">
                        <img src="assets/img/costic/customer-3.jpg" className="ms-img-round" alt="people" />
                      </div>
                      <div className="media-body"> <span>Hey man, looking forward to your new project.</span>
                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 30 seconds ago</p>
                      </div>
                    </NavLink>
                    <NavLink className="nav-link media p-2" to="#">
                      <div className="ms-chat-status ms-status-online ms-chat-img mr-2 align-self-center">
                        <img src="assets/img/costic/customer-2.jpg" className="ms-img-round" alt="people" />
                      </div>
                      <div className="media-body"> <span>Dear John, I was told you bought Costic! Send me your feedback</span>
                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 28 minutes ago</p>
                      </div>
                    </NavLink>
                    <NavLink className="nav-link media p-2" to="#">
                      <div className="ms-chat-status ms-status-offline ms-chat-img mr-2 align-self-center">
                        <img src="assets/img/costic/customer-1.jpg" className="ms-img-round" alt="people" />
                      </div>
                      <div className="media-body"> <span>How many people are we inviting to the dashboard?</span>
                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 6 hours ago</p>
                      </div>
                    </NavLink>
                  </li>
                  <li className="dropdown-divider" />
                  <li className="dropdown-menu-footer text-center"> <NavLink to="pages/apps/email.html" className="nav-link" >Go to Inbox</NavLink>
                  </li>
                </ul>
              </li>
              <li className="ms-nav-item dropdown"> <NavLink to="#" className="nav-link text-disabled ms-has-notification" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="far fa-bell" /></NavLink>
                <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="notificationDropdown">
                  <li className="dropdown-menu-header">
                    <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Notifications</span></h6><span className="badge badge-pill badge-info">4 New</span>
                  </li>
                  <li className="dropdown-divider" />
                  <li className="ms-scrollable ms-dropdown-list">
                    <NavLink className="nav-link media p-2" to="#">
                      <div className="media-body"> <span>12 ways to improve your crypto dashboard</span>
                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 30 seconds ago</p>
                      </div>
                    </NavLink>
                    <NavLink className="nav-link media p-2" to="#">
                      <div className="media-body"> <span>You have newly registered users</span>
                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 45 minutes ago</p>
                      </div>
                    </NavLink>
                    <NavLink className="nav-link media p-2" to="#">
                      <div className="media-body"> <span>Your account was logged in from an unauthorized IP</span>
                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 2 hours ago</p>
                      </div>
                    </NavLink>
                    <NavLink className="nav-link media p-2" to="#">
                      <div className="media-body"> <span>An application form has been submitted</span>
                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 1 day ago</p>
                      </div>
                    </NavLink>
                  </li>
                  <li className="dropdown-divider" />
                  <li className="dropdown-menu-footer text-center"> <NavLink to="#" className="nav-link">View all Notifications</NavLink>
                  </li>
                </ul>
              </li>
              <li className="ms-nav-item ms-nav-user dropdown">
                <NavLink to="#" className="nav-link" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img className="ms-user-img ms-img-round float-right" src="assets/img/costic/customer-6.jpg" alt="people" />
                </NavLink>
                <ul className="dropdown-menu dropdown-menu-right user-dropdown" aria-labelledby="userDropdown">
                  <li className="dropdown-menu-header">
                    <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Welcome, Anny Farisha</span></h6>
                  </li>
                  <li className="dropdown-divider" />
                  <li className="ms-dropdown-list">
                    <NavLink className="nav-link media fs-14 p-2" to="pages/prebuilt-pages/user-profile.html"> <span><i className="far fa-user mr-2" /> Profile</span>
                    </NavLink>
                    <NavLink className="nav-link media fs-14 p-2" to="pages/apps/email.html"> <span><i className="far fa-envelope mr-2" />
                      Inbox</span> <span className="badge badge-pill badge-info">3</span>
                    </NavLink>
                    <NavLink className="nav-link media fs-14 p-2" to="pages/prebuilt-pages/user-profile.html"> <span><i className="fas fa-user-cog mr-2" /> Account Settings</span>
                    </NavLink>
                  </li>
                  <li className="dropdown-divider" />
                  <li className="dropdown-menu-footer">
                    <NavLink className="nav-link media fs-14 p-2" to="pages/prebuilt-pages/lock-screen.html"> <span><i className="fas fa-lock mr-2" /> Lock</span>
                    </NavLink>
                  </li>
                  <li className="dropdown-menu-footer">
                    <NavLink className="nav-link media fs-14 p-2" to="pages/prebuilt-pages/default-login.html"> <span><i className="fas fa-power-off mr-2" /> Logout</span>
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="ms-toggler ms-d-block-sm pr-0 ms-nav-toggler" data-toggle="slideDown" data-target="#ms-nav-options">
              <span className="ms-toggler-bar bg-primary" />
              <span className="ms-toggler-bar bg-primary" />
              <span className="ms-toggler-bar bg-primary" />
            </div>
          </nav>
            </div>
        )
    }
}
