import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Leftsidebar from '../../pages/Leftsidebar';
import Rightsidebar from '../../pages/Rightsidebar';
import Topbar from '../../pages/Topbar';

export default class Addproduct extends Component {
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
                                        <li className="breadcrumb-item"><NavLink to="#"><i className="material-icons">home</i> Home</NavLink> </li>
                                        <li className="breadcrumb-item"><NavLink to="#">Product</NavLink> </li>
                                        <li className="breadcrumb-item active" aria-current="page">Add</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="ms-panel ms-panel-fh">
                                    <div className="ms-panel-header">
                                        <h6>Add Product Form</h6>
                                    </div>
                                    <div className="ms-panel-body">
                                        <form className="needs-validation clearfix" noValidate>
                                            <div className="form-row">
                                                <div className="col-md-12 mb-3">
                                                    <label htmlFor="validationCustom18">Product Name</label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" id="validationCustom18" placeholder="Product Name" defaultValue="Pizza" required />
                                                        <div className="valid-feedback">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="validationCustom22">Select Catagory</label>
                                                    <div className="input-group">
                                                        <select className="form-control" id="validationCustom22" required>
                                                            <option value>Catagory 1</option>
                                                            <option value>Catagory 2</option>
                                                            <option value>Catagory 3</option>
                                                            <option value>Catagory 4</option>
                                                        </select>
                                                        <div className="invalid-feedback">
                                                            Please select a Catagory.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="validationCustom23">Currency</label>
                                                    <div className="input-group">
                                                        <select className="form-control" id="validationCustom23" required>
                                                            <option value>USD</option>
                                                            <option value>Bitcoins</option>
                                                            <option value>EURO</option>
                                                        </select>
                                                        <div className="invalid-feedback">
                                                            Please select a Currency
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="validationCustom24">Quantity</label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" id="validationCustom24" placeholder="01" required />
                                                        <div className="invalid-feedback">
                                                            Quantity
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="validationCustom25">Price</label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" id="validationCustom25" placeholder="$10" required />
                                                        <div className="invalid-feedback">
                                                            Price
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <label htmlFor="validationCustom12">Description</label>
                                                    <div className="input-group">
                                                        <textarea rows={5} id="validationCustom12" className="form-control" placeholder="Message" required defaultValue={""} />
                                                        <div className="invalid-feedback">
                                                            Please provide a message.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <label htmlFor="validationCustom12">Product Image</label>
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="validatedCustomFile" />
                                                        <label className="custom-file-label" htmlFor="validatedCustomFile">Upload Images...</label>
                                                        <div className="invalid-feedback">Example invalid custom file feedback</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="ms-panel">
                                            <div className="ms-panel-header">
                                                <h6>Product </h6>
                                            </div>
                                            <div className="ms-panel-body">
                                                <div id="imagesSlider" className="ms-image-slider carousel slide" data-ride="carousel">
                                                    <div className="carousel-inner">
                                                        <div className="carousel-item active">
                                                            <img className="d-block w-100" src="../../assets/img/costic/add-product-1.jpg" alt="First slide" />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img className="d-block w-100" src="../../assets/img/costic/add-product-2.jpg" alt="Second slide" />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img className="d-block w-100" src="../../assets/img/costic/add-product-3.jpg" alt="Third slide" />
                                                        </div>
                                                    </div>
                                                    <ol className="carousel-indicators">
                                                        <li data-target="#imagesSlider" data-slide-to={0} className="active"> <img className="d-block w-100" src="../../assets/img/costic/add-product-1.jpg" alt="First slide" /></li>
                                                        <li data-target="#imagesSlider" data-slide-to={1}><img className="d-block w-100" src="../../assets/img/costic/add-product-2.jpg" alt="Second slide" /></li>
                                                        <li data-target="#imagesSlider" data-slide-to={2}><img className="d-block w-100" src="../../assets/img/costic/add-product-3.jpg" alt="Third slide" /></li>
                                                    </ol>
                                                </div>
                                            </div>
                                            <div className="ms-panel-header new">
                                                <p className="medium">Status Available</p>
                                                <div>
                                                    <label className="ms-switch">
                                                        <input type="checkbox" />
                                                        <span className="ms-switch-slider round" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="ms-panel-header new">
                                                <p className="medium">Discount Active</p>
                                                <div>
                                                    <label className="ms-switch">
                                                        <input type="checkbox" defaultChecked />
                                                        <span className="ms-switch-slider round" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="ms-panel-header new">
                                                <button className="btn btn-secondary d-block" type="submit">Save</button>
                                                <button className="btn btn-primary d-block" type="submit">Save and Add</button>
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
