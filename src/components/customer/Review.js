import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Select from 'react-select';
import Leftsidebar from '../../pages/Leftsidebar';
import Rightsidebar from '../../pages/Rightsidebar';
import Topbar from '../../pages/Topbar';

export default class Review extends Component {
    render() {
        return (
            <div>

                <Leftsidebar />

                {/* Main Content */}
                <main className="body-content">
                    <Topbar />
                    <div className="ms-content-wrapper">
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb pl-0">
                                        <li className="breadcrumb-item"><NavLink to="#"><i className="material-icons">home</i> Home</NavLink>
                                        </li>
                                        <li className="breadcrumb-item"><NavLink to="#">Customer</NavLink>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Reviews</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="ms-content-wrapper">
                            <div className="row">
                                {/* Recent Support Tickets */}
                                <div className="col-xl-12 col-md-12">
                                    <div className="ms-panel ms-panel-fh">
                                        <div className="ms-panel-body p-0">
                                            <ul className="ms-list ms-feed ms-twitter-feed ms-recent-support-tickets">
                                                <li className="ms-list-item">
                                                    <NavLink to="#" className="media clearfix">
                                                        <img src="../../assets/img/costic/customer-1.jpg" className="ms-img-round ms-img-small" alt="This is another feature" />
                                                        <div className="media-body">
                                                            <div className="customer-meta">
                                                                <div className="new">
                                                                    <h5 className="ms-feed-user mb-0">John Doe</h5>
                                                                    <h6 className="ml-4 mb-0 text-red">Grilled Sandwich</h6>
                                                                </div>
                                                                <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                                                                    <li className="ms-rating-item"> <i className="material-icons">star</i>
                                                                    </li>
                                                                    <li className="ms-rating-item rated"> <i className="material-icons">star</i>
                                                                    </li>
                                                                    <li className="ms-rating-item rated"> <i className="material-icons">star</i>
                                                                    </li>
                                                                    <li className="ms-rating-item rated"> <i className="material-icons">star</i>
                                                                    </li>
                                                                    <li className="ms-rating-item rated"> <i className="material-icons">star</i>
                                                                    </li>
                                                                </ul>
                                                            </div> <span className="my-2 d-block"> <i className="material-icons">date_range</i> February 24,
                                                                2019</span>
                                                            <p className="d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus
                                                                a facilisis bibendum. Duis quis convallis sapien ...</p>
                                                            <div className="d-flex justify-content-between align-items-end">
                                                                <div className="ms-feed-controls"> <span>
                                                                    <i className="material-icons">chat</i> 16
                                                                </span>
                                                                    <span>
                                                                        <i className="material-icons">attachment</i> 3
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                                <li className="ms-list-item">
                                                    <NavLink to="#" className="media clearfix">
                                                        <img src="../../assets/img/costic/customer-2.jpg" className="ms-img-round ms-img-small" alt="This is another feature" />
                                                        <div className="media-body">
                                                            <div className="customer-meta">
                                                                <div className="new">
                                                                    <h5 className="ms-feed-user mb-0">Ricky Martin</h5>
                                                                    <h6 className="ml-4 mb-0 text-red">Fried Egg Sandwich</h6>
                                                                </div>
                                                                <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                                                                    <li className="ms-rating-item"> <i className="material-icons">star</i>
                                                                    </li>
                                                                    <li className="ms-rating-item rated"> <i className="material-icons">star</i>
                                                                    </li>
                                                                    <li className="ms-rating-item rated"> <i className="material-icons">star</i>
                                                                    </li>
                                                                    <li className="ms-rating-item rated"> <i className="material-icons">star</i>
                                                                    </li>
                                                                    <li className="ms-rating-item rated"> <i className="material-icons">star</i>
                                                                    </li>
                                                                </ul>
                                                            </div> <span className="my-2 d-block"> <i className="material-icons">date_range</i> February 24,
                                                                2019</span>
                                                            <p className="d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus
                                                                a facilisis bibendum. Duis quis convallis sapien ...</p>
                                                            <div className="d-flex justify-content-between align-items-end">
                                                                <div className="ms-feed-controls"> <span>
                                                                    <i className="material-icons">chat</i> 16
                                                                </span>
                                                                    <span>
                                                                        <i className="material-icons">attachment</i> 3
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                                <li className="ms-list-item">
                                                    <NavLink to="#" className="media clearfix">
                                                        <img src="../../assets/img/costic/customer-3.jpg" className="ms-img-round ms-img-small" alt="This is another feature" />
                                                        <div className="media-body">
                                                            <div className="customer-meta">
                                                                <div className="new">
                                                                    <h5 className="ms-feed-user mb-0">Joe semual</h5>
                                                                    <h6 className="ml-4 mb-0 text-red">Peri Peri Fries</h6>
                                                                </div>
                                                                <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                                                                    <li className="ms-rating-item"> <i className="material-icons">star</i>
                                                                    </li>
                                                                    <li className="ms-rating-item rated"> <i className="material-icons">star</i>
                                                                    </li>
                                                                    <li className="ms-rating-item rated"> <i className="material-icons">star</i>
                                                                    </li>
                                                                    <li className="ms-rating-item rated"> <i className="material-icons">star</i>
                                                                    </li>
                                                                    <li className="ms-rating-item rated"> <i className="material-icons">star</i>
                                                                    </li>
                                                                </ul>
                                                            </div> <span className="my-2 d-block"> <i className="material-icons">date_range</i> February 24,
                                                                2019</span>
                                                            <p className="d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus
                                                                a facilisis bibendum. Duis quis convallis sapien ...</p>
                                                            <div className="d-flex justify-content-between align-items-end">
                                                                <div className="ms-feed-controls"> <span>
                                                                    <i className="material-icons">chat</i> 16
                                                                </span>
                                                                    <span>
                                                                        <i className="material-icons">attachment</i> 3
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                                <li className="ms-list-item">
                                                    <NavLink to="#" className="media clearfix">
                                                        <img src="../../assets/img/costic/customer-4.jpg" className="ms-img-round ms-img-small" alt="This is another feature" />
                                                        <div className="media-body">
                                                            <div className="customer-meta">
                                                                <div className="new">
                                                                    <h5 className="ms-feed-user mb-0">Ricky Martin</h5>
                                                                    <h6 className="ml-4 mb-0 text-red">Spicy Grilled Burger</h6>
                                                                </div>
                                                                <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                                                                    <li className="ms-rating-item"> <i className="material-icons">star</i>
                                                                    </li>
                                                                    <li className="ms-rating-item rated"> <i className="material-icons">star</i>
                                                                    </li>
                                                                    <li className="ms-rating-item rated"> <i className="material-icons">star</i>
                                                                    </li>
                                                                    <li className="ms-rating-item rated"> <i className="material-icons">star</i>
                                                                    </li>
                                                                    <li className="ms-rating-item rated"> <i className="material-icons">star</i>
                                                                    </li>
                                                                </ul>
                                                            </div> <span className="my-2 d-block"> <i className="material-icons">date_range</i> February 24,
                                                                2019</span>
                                                            <p className="d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus
                                                                a facilisis bibendum. Duis quis convallis sapien ...</p>
                                                            <div className="d-flex justify-content-between align-items-end">
                                                                <div className="ms-feed-controls"> <span>
                                                                    <i className="material-icons">chat</i> 16
                                                                </span>
                                                                    <span>
                                                                        <i className="material-icons">attachment</i> 3
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                                <li className="ms-list-item">
                                                    <NavLink to="#" className="media clearfix">
                                                        <img src="../../assets/img/costic/customer-5.jpg" className="ms-img-round ms-img-small" alt="This is another feature" />
                                                        <div className="media-body">
                                                            <div className="customer-meta">
                                                                <div className="new">
                                                                    <h5 className="ms-feed-user mb-0">Lim Shojin</h5>
                                                                    <h6 className="ml-4 mb-0 text-red">Grilled Sandwich</h6>
                                                                </div>
                                                                <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                                                                    <li className="ms-rating-item"> <i className="material-icons">star</i>
                                                                    </li>
                                                                    <li className="ms-rating-item rated"> <i className="material-icons">star</i>
                                                                    </li>
                                                                    <li className="ms-rating-item rated"> <i className="material-icons">star</i>
                                                                    </li>
                                                                    <li className="ms-rating-item rated"> <i className="material-icons">star</i>
                                                                    </li>
                                                                    <li className="ms-rating-item rated"> <i className="material-icons">star</i>
                                                                    </li>
                                                                </ul>
                                                            </div> <span className="my-2 d-block"> <i className="material-icons">date_range</i> February 24,
                                                                2019</span>
                                                            <p className="d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus
                                                                a facilisis bibendum. Duis quis convallis sapien ...</p>
                                                            <div className="d-flex justify-content-between align-items-end">
                                                                <div className="ms-feed-controls"> <span>
                                                                    <i className="material-icons">chat</i> 16
                                                                </span>
                                                                    <span>
                                                                        <i className="material-icons">attachment</i> 3
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </NavLink>
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

        )
    }
}
