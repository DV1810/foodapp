import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Leftsidebar extends Component {
    render() {
        return (
            <div>
                {/* Overlays */}
        <div className="ms-aside-overlay ms-overlay-left ms-toggler" data-target="#ms-side-nav" data-toggle="slideLeft"> </div>
        <div className="ms-aside-overlay ms-overlay-right ms-toggler" data-target="#ms-recent-activity" data-toggle="slideRight">
        </div>
       {/* Sidebar Navigation Left */}
<aside id="ms-side-nav" className="side-nav fixed ms-aside-scrollable ms-aside-left">
  {/* Logo */}
  <div className="logo-sn ms-d-block-lg">
  <NavLink to="/" className=" pl-0 ml-0 text-center" >
  <img src="assets/img/costic/costic-logo-216x62.png" alt="logo" />
  </NavLink>

  </div>
  {/* Navigation */}
  <ul className="accordion ms-main-aside fs-14" id="side-nav-accordion">
    {/* Dashboard */}
    <li className="menu-item">
      <NavLink to="#" className=" has-chevron" data-toggle="collapse" data-target="#dashboard" aria-expanded="false" aria-controls="dashboard"> <span><i className="material-icons fs-16">dashboard</i>Dashboard </span>
      </NavLink>
      <ul id="dashboard" className="collapse" aria-labelledby="dashboard" data-parent="#side-nav-accordion">
        <li> <NavLink to="/" >Costic</NavLink>
        </li>
      </ul>
    </li>
    {/* /Dashboard */}
    {/* customers*/}
    <li className="menu-item">
      <NavLink to="#" className=" has-chevron" data-toggle="collapse" data-target="#customer" aria-expanded="false" aria-controls="customer"> <span><i className="fas fa-user-friends fs-16" />Customers </span>
      </NavLink>
      <ul id="customer" className="collapse" aria-labelledby="customer" data-parent="#side-nav-accordion">
        <li> <NavLink to="/add" >Add Customer</NavLink>
        </li>
        <li> <NavLink to="/list" >Customer List</NavLink>
        </li>
        <li> <NavLink to="/review" >Customer Reviews</NavLink>
        </li>
      </ul>
    </li>
    {/* Customers  end */}
    {/* product */}
    <li className="menu-item">
      <NavLink to="#" className=" has-chevron" data-toggle="collapse" data-target="#product" crossOrigin="anonymous">
        <span><i className="fa fa-archive fs-16" />Menu </span>
      </NavLink>
      <ul id="product" className="collapse" aria-labelledby="product" data-parent="#side-nav-accordion">
        <li> <NavLink to="/addproduct" >Add Item</NavLink>
        </li>
        <li> <NavLink to="/productlist" >Menu List</NavLink>
        </li>
        <li> <NavLink to="/productreview" >Menu Catalogue</NavLink>
        </li>
      </ul>
    </li>
    {/* product end */}
    {/* coupons*/}
    <li className="menu-item">
      <NavLink to="#" className="has-chevron" data-toggle="collapse" data-target="#coupons" aria-expanded="false" aria-controls="coupons"> <span><i className="fas fa-file-alt" />Coupons</span>
      </NavLink>
      <ul id="coupons" className="collapse" aria-labelledby="coupons" data-parent="#side-nav-accordion">
        <li> <NavLink to="/createcoupon" >Create Coupons</NavLink>
        </li>
        <li> <NavLink to="/couponlist" >Coupon List</NavLink>
        </li>
      </ul>
    </li>
    {/* coupons end */}

    {/* Delivery partner */}
    <li className="menu-item">
      <NavLink to="#" className=" has-chevron" data-toggle="collapse" data-target="#delivery-partner" aria-expanded="false" aria-controls="delivery-partner"> <span><i className="fas fa-male" />Delivery partner</span>
      </NavLink>
      <ul id="delivery-partner" className="collapse" aria-labelledby="delivery-partner" data-parent="#side-nav-accordion">
        <li> <NavLink to="/adddelivery" >Create </NavLink>
        </li>
        <li> <NavLink to="/deliverylist" > List</NavLink>
        </li>
      </ul>
    </li>
    {/*delivery partner end*/}
    {/*  Restaurant */}
    <li className="menu-item">
      <NavLink to="#" className=" has-chevron" data-toggle="collapse" data-target="#restaurant-list" aria-expanded="false" aria-controls="restaurant-list"> <span><i className="fas fa-utensils" />Restaurants</span>
      </NavLink>
      <ul id="restaurant-list" className="collapse" aria-labelledby="restaurant-list" data-parent="#side-nav-accordion">
        <li> <NavLink to="addrestaurant" >Create List</NavLink>
        </li>
        <li> <NavLink to="restaurantlist" >Restaurants List</NavLink>
        </li>
      </ul>
    </li>
    {/* Restaurant end */}
    {/* payment */}
    <li className="menu-item">
      <NavLink to="#" className=" has-chevron" data-toggle="collapse" data-target="#payment" aria-expanded="false" aria-controls="payment"> <span><i className="fas fa-rupee-sign" />Payment</span>
      </NavLink>
      <ul id="payment" className="collapse" aria-labelledby="payment" data-parent="#side-nav-accordion">
        <li> <NavLink to="/transaction" >Transaction
          </NavLink>
        </li>
        <li> <NavLink to="pages/customer/customersreview.html" >Payment gatecway
          </NavLink>
        </li>
      </ul>
    </li>
    {/* payment end */}
    {/* Order */}
    <li className="menu-item">
      <NavLink to="#" className=" has-chevron" data-toggle="collapse" data-target="#order" aria-expanded="false" aria-controls="order"> <span><i className="fas fa-shopping-bag" />Order</span>
      </NavLink>
      <ul id="order" className="collapse" aria-labelledby="order" data-parent="#side-nav-accordion">
        <li> <NavLink to="/createorder" >Create order
          </NavLink>
        </li>
        <li> <NavLink to="/orderlist" >Order list
          </NavLink>
        </li>
      </ul>
    </li>
    {/* order end */}
    {/* Invoice */}
    <li className="menu-item">
      <NavLink to="#" className=" has-chevron" data-toggle="collapse" data-target="#invoice" aria-expanded="false" aria-controls="invoice"> <span><i className="fas fa-file-invoice fs-16" />Invoice </span>
      </NavLink>
      <ul id="invoice" className="collapse" aria-labelledby="invoice" data-parent="#side-nav-accordion">
        <li> <NavLink to="/invoice" >Invoice Detail</NavLink>
        </li>
        <li> <NavLink to="/invoicelist" >Invoice List</NavLink>
        </li>
      </ul>
    </li>
    {/* Invoice end */}
    {/* sales */}
    <li className="menu-item">
      <NavLink to="/sales" > <span><i className="fa fa-briefcase fs-16" />Sales</span>
      </NavLink>
    </li>
    {/* sales end  */}
    {/* support */}
    <li className="menu-item">
      <NavLink to="#" className=" has-chevron" data-toggle="collapse" data-target="#support" aria-expanded="false" aria-controls="support"> <span><i className="fas fa-headset" />Support </span>
      </NavLink>
      <ul id="support" className="collapse" aria-labelledby="support" data-parent="#side-nav-accordion">
        <li> <NavLink to="/chat" >Chat</NavLink>
        </li>
        <li> <NavLink to="/email" >Email</NavLink>
        </li>
      </ul>
    </li>
    {/* support end  */}
  </ul></aside>

   {/* Sidebar Right */}
   <aside id="ms-recent-activity" className="side-nav fixed ms-aside-right ms-scrollable">
          <div className="ms-aside-header">
            <ul className="nav nav-tabs tabs-bordered d-flex nav-justified mb-3" role="tablist">
              <li role="presentation" className="fs-12"><NavLink className="nav-link" to="#activityLog" aria-controls="activityLog" className="active" role="tab" data-toggle="tab"> Activity Log</NavLink> 
              </li>
              <li>
                <button type="button" className="close ms-toggler text-center" data-target="#ms-recent-activity" data-toggle="slideRight"><span aria-hidden="true">×</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="ms-aside-body">
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active fade show" id="activityLog">
                <ul className="ms-activity-log">
                  <li>
                    <div className="ms-btn-icon btn-pill icon btn-light"> <i className="flaticon-gear" />
                    </div>
                    <h6>Update 1.0.0 Pushed</h6>
                    <span> <i className="material-icons">event</i>1 January, 2019</span>
                    <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non
                      nisi semper, ula in sodales vehicula....</p>
                  </li>
                  <li>
                    <div className="ms-btn-icon btn-pill icon btn-success"> <i className="flaticon-tick-inside-circle" />
                    </div>
                    <h6>Profile Updated</h6>
                    <span> <i className="material-icons">event</i>4 March, 2018</span>
                    <p className="fs-14">Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque
                      felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                  </li>
                  <li>
                    <div className="ms-btn-icon btn-pill icon btn-warning"> <i className="flaticon-alert-1" />
                    </div>
                    <h6>Your payment is due</h6>
                    <span> <i className="material-icons">event</i>1 January, 2019</span>
                    <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non
                      nisi semper, ula in sodales vehicula....</p>
                  </li>
                  <li>
                    <div className="ms-btn-icon btn-pill icon btn-danger"> <i className="flaticon-alert" />
                    </div>
                    <h6>Database Error</h6>
                    <span> <i className="material-icons">event</i>4 March, 2018</span>
                    <p className="fs-14">Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque
                      felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                  </li>
                  <li>
                    <div className="ms-btn-icon btn-pill icon btn-info"> <i className="flaticon-information" />
                    </div>
                    <h6>Checkout what's Trending</h6>
                    <span> <i className="material-icons">event</i>1 January, 2019</span>
                    <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non
                      nisi semper, ula in sodales vehicula....</p>
                  </li>
                  <li>
                    <div className="ms-btn-icon btn-pill icon btn-secondary"> <i className="flaticon-diamond" />
                    </div>
                    <h6>Your Dashboard is ready</h6>
                    <span> <i className="material-icons">event</i>4 March, 2018</span>
                    <p className="fs-14">Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque
                      felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                  </li>
                </ul> <NavLink to="#" className="nav-link btn btn-primary d-block"> View All </NavLink> 
              </div>
            </div>
          </div>
        </aside>

            </div>
        )
    }
}
