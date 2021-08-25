import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Leftsidebar from '../../pages/Leftsidebar';
import Rightsidebar from '../../pages/Rightsidebar';
import Topbar from '../../pages/Topbar';


export default class Productreview extends Component {
    render() {
        return (
            <div>

                <Leftsidebar />
                {/* Main Content */}
                <main className="body-content">
                    <Topbar />
                    <div className="ms-content-wrapper box">
                        <div className="row">
                            <div className="col-md-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb pl-0">
                                        <li className="breadcrumb-item"><NavLink to="#"><i className="material-icons">home</i> Home</NavLink></li>
                                        <li className="breadcrumb-item"><NavLink to="#">Product</NavLink></li>
                                        <li className="breadcrumb-item active" aria-current="page">Catalogue</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="ms-card">
                                    <div className="ms-card-img">
                                        <img src="../../assets/img/costic/food-1.jpg" alt="card_img" />
                                    </div>
                                    <div className="ms-card-body ">
                                        <div className="wrapper-new2 ">
                                            <h6>Pizza</h6>
                                            <span className="white">$15</span>
                                        </div>
                                        <div className="wrapper-new1">
                                            <span>Total Order :<strong className="color-red">150</strong> </span>
                                            <span>Revenue :<strong className="color-red">$1000</strong></span>
                                        </div>
                                        <NavLink to="#" className="btn btn-primary btn-md btn-block">See More</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="ms-card">
                                    <div className="ms-card-img">
                                        <img src="../../assets/img/costic/food-2.jpg" alt="card_img" />
                                    </div>
                                    <div className="ms-card-body ">
                                        <div className="wrapper-new2">
                                            <h6>Sandwiches</h6>
                                            <span className="white">$23</span>
                                        </div>
                                        <div className="wrapper-new1">
                                            <span>Total Order :<strong className="color-red">150</strong> </span>
                                            <span>Revenue :<strong className="color-red">$1000</strong></span>
                                        </div>
                                        <NavLink to="#" className="btn btn-primary btn-block">See More</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="ms-card">
                                    <div className="ms-card-img">
                                        <img src="../../assets/img/costic/food-3.jpg" alt="card_img" />
                                    </div>
                                    <div className="ms-card-body ">
                                        <div className="wrapper-new2">
                                            <h6>Fries</h6>
                                            <span className="white">$15</span>
                                        </div>
                                        <div className="wrapper-new1">
                                            <span>Total Order :<strong className="color-red">100</strong> </span>
                                            <span>Revenue :<strong className="color-red">$1400</strong></span>
                                        </div>
                                        <NavLink to="#" className="btn btn-primary btn-block">See More</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="ms-card">
                                    <div className="ms-card-img">
                                        <img src="../../assets/img/costic/food-4.jpg" alt="card_img" />
                                    </div>
                                    <div className="ms-card-body ">
                                        <div className="wrapper-new2">
                                            <h6>Burger</h6>
                                            <span className="white">$34</span>
                                        </div>
                                        <div className="wrapper-new1">
                                            <span>Total Order :<strong className="color-red">200</strong> </span>
                                            <span>Revenue :<strong className="color-red">$5000</strong></span>
                                        </div>
                                        <NavLink to="#" className="btn btn-primary btn-block">See More</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="ms-card">
                                    <div className="ms-card-img">
                                        <img src="../../assets/img/costic/food-5.jpg" alt="card_img" />
                                    </div>
                                    <div className="ms-card-body ">
                                        <div className="wrapper-new2">
                                            <h6>Grilled</h6>
                                            <span className="white">$25</span>
                                        </div>
                                        <div className="wrapper-new1">
                                            <span>Total Order :<strong className="color-red">180</strong> </span>
                                            <span>Revenue :<strong className="color-red">$2000</strong></span>
                                        </div>
                                        <NavLink to="#" className="btn btn-primary btn-block">See More</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="ms-card">
                                    <div className="ms-card-img">
                                        <img src="../../assets/img/costic/food-6.jpg" alt="card_img" />
                                    </div>
                                    <div className="ms-card-body ">
                                        <div className="wrapper-new2">
                                            <h6>Dumplings</h6>
                                            <span className="white">$15</span>
                                        </div>
                                        <div className="wrapper-new1">
                                            <span>Total Order :<strong className="color-red">150</strong> </span>
                                            <span>Revenue :<strong className="color-red">$3000</strong></span>
                                        </div>
                                        <NavLink to="#" className="btn btn-primary btn-block">See More</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-md-12">
                                <div className="load">
                                    <i className="fas fa-redo alt  space text-muted" aria-hidden="true" /><span className="more">Load More</span>
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
