import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Leftsidebar from '../../pages/Leftsidebar';
import Rightsidebar from '../../pages/Rightsidebar';
import Topbar from '../../pages/Topbar';


export default class Couponlist extends Component {
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
              <li className="breadcrumb-item"><NavLink to="#"><i className="material-icons">home</i> Home</NavLink> </li>
              <li className="breadcrumb-item"><NavLink to="#">Coupons</NavLink> </li>
              <li className="breadcrumb-item active" aria-current="page">Coupons List</li>
            </ol>
          </nav>
        </div>
        {/* 		Coupon List     */}	
        <div className="coupon-box1">
          <span className="coupon-box-img">
            <img src="https://images.freekaamaal.com/post_images/1606817930.jpg" alt="cup" width="100px" height="100px" />
          </span>
          <span><h4 className="coupon-box-heading"><strong>50% off</strong></h4>
            <h6 className="coupon-box-sm-heading">Special offer</h6>
            <p className="coupon-box-para">Use Promo Code: <span className="promo">BOH232</span></p>
          </span>
          <hr />
          <h6 className="coupon-details"><NavLink to="#">Show Details</NavLink> </h6>
          <p className="coupon-status">Status: <span>Active</span></p>
          <p className="coupon-validity">Expires: Mar 15, 2022</p>
        </div>
        <div className="coupon-box2">
          <span className="coupon-box-img">
            <img src="https://images.unidays.world/i/self-serve/content/story8e87dba4-c6de-4f3d-9ecb-5b1f3e56fd3a" width="100px" height="100px" /> 
          </span>
          <span><h4 className="coupon-box-heading"><strong>upto 50% off</strong></h4>
            <h6 className="coupon-box-sm-heading">Special offer</h6>
            <p className="coupon-box-para">Use Promo Code: <span className="promo">JQI482</span></p>
          </span>
          <hr />
          <h6 className="coupon-details"><NavLink to="#">Show Details</NavLink> </h6>
          <p className="coupon-status">Status: <span>Active</span></p>
          <p className="coupon-validity">Expires: Feb 20, 2022</p>
        </div>
        <div className="coupon-box3">
          <span className="coupon-box-img">
            <img src="https://i1.wp.com/www.mycashbackoffers.in/wp-content/uploads/2020/09/bogo-delivery.jpg?fit=751%2C500&ssl=1" alt="image" width="100px" height="100px" />
          </span>
          <span><h4 className="coupon-box-heading"><strong>Buy 1 Get 1</strong></h4>
            <h6 className="coupon-box-sm-heading">Special offer</h6>
            <p className="coupon-box-para">Use Promo Code: <span className="promo">MOT254</span></p>
          </span>
          <hr />
          <h6 className="coupon-details"><NavLink to="#">Show Details</NavLink> </h6>
          <p className="coupon-status">Status: <span>Active</span></p>
          <p className="coupon-validity">Expires: Jun 05, 2022</p>
        </div>
        <div className="coupon-box4">
          <span className="coupon-box-img">
            <img src="https://static.toiimg.com/photo/67092798.cms" alt="image" width="100px" height="100px" />
          </span>
          <span><h4 className="coupon-box-heading"><strong>30% off</strong></h4>
            <h6 className="coupon-box-sm-heading">Special offer</h6>
            <p className="coupon-box-para">Use Promo Code: <span className="promo">FIE390</span></p>
          </span>
          <hr />
          <h6 className="coupon-details"><NavLink to="#">Show Details</NavLink> </h6>
          <p className="coupon-status">Status: <span>Active</span></p>
          <p className="coupon-validity">Expires: Jan 18, 2022</p>
        </div>
        <div className="coupon-box5">
          <span className="coupon-box-img">
            <img src="https://i.pinimg.com/736x/88/96/ff/8896ff0208d8e01317fcb3b71bc8b747.jpg" alt="image" width="100px" height="100px" />
          </span>
          <span><h4 className="coupon-box-heading"><strong>flat 40% off</strong></h4>
            <h6 className="coupon-box-sm-heading">Special offer</h6>
            <p className="coupon-box-para">Use Promo Code: <span className="promo">BFG573</span></p>
          </span>
          <hr />
          <h6 className="coupon-details"><NavLink to="#">Show Details</NavLink> </h6>
          <p className="coupon-status">Status: <span>Active</span></p>
          <p className="coupon-validity">Expires: Mar 03, 2022</p>
        </div>
        <div className="coupon-box6">
          <span className="coupon-box-img">
            <img src="https://www.dosafactorymenu.com/blog-admin/images/indian-food-items-apt-for-everyone041641.jpeg" alt="image" width="100px" height="100px" />
          </span>
          <span><h4 className="coupon-box-heading"><strong>50% off</strong></h4>
            <h6 className="coupon-box-sm-heading">Special offer</h6>
            <p className="coupon-box-para">Use Promo Code: <span className="promo">GFJ209</span></p>
          </span>
          <hr />
          <h6 className="coupon-details"><NavLink to="#">Show Details</NavLink> </h6>
          <p className="coupon-status">Status: <span>Active</span></p>
          <p className="coupon-validity">Expires: Jul 21, 2022</p>
        </div>
        {/* 	Coupon List End */}	
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
