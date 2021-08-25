import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Leftsidebar from './pages/Leftsidebar';
import Rightsidebar from './pages/Rightsidebar';
import Topbar from './pages/Topbar';


// import Footer from './components/Footer';
import Add from './components/customer/Add';
import List from './components/customer/List';
import Review from './components/customer/Review';

import Addproduct from './components/product/Addproduct';
import Productlist from './components/product/Productlist';
import Productreview from './components/product/Productreview';

import Couponlist from './components/coupons/Couponlist';
import Createcoupon from './components/coupons/Createcoupon';

import Adddeliverypart from './components/deliverypartner/Adddeliverypart';
import Deliverylist from './components/deliverypartner/Deliverylist';

import Addrestaurant from './components/restaurant/Addrestaurant';
import Restaurants from './components/restaurant/Restaurants';

import Transaction from './components/payment/Transaction';
import Paymentgateway from './components/payment/Paymentgateway';

import Createorder from './components/order/Createorder';
import Orderlist from './components/order/Orderlist';

import Invoicedetail from './components/invoice/Invoicedetail';
import Invoicelist from './components/invoice/Invoicelist';

import Sales from './components/sale/Sales';

import Chat from './components/support/Chat';
import Email from './components/support/Email';

function App() {
  return (
    <div>
      <Header/>
      

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/left" component={Leftsidebar} />
          <Route exact path="/right" component={Rightsidebar} />
          <Route exact path="/top" component={Topbar} />


          <Route exact path="/add" component={Add} />
          <Route exact path="/list" component={List} />
          <Route exact path="/review" component={Review} />

          <Route exact path="/addproduct" component={Addproduct} />
          <Route exact path="/productlist" component={Productlist} />
          <Route exact path="/productreview" component={Productreview} />

          <Route exact path="/couponlist" component={Couponlist} />
          <Route exact path="/createcoupon" component={Createcoupon} />

          <Route exact path="/adddelivery" component={Adddeliverypart} />
          <Route exact path="/deliverylist" component={Deliverylist} />

          <Route exact path="/addrestaurant" component={Addrestaurant} />
          <Route exact path="/restaurantlist" component={Restaurants} />

          <Route exact path="/transaction" component={Transaction} />
          <Route exact path="/gateway" component={Paymentgateway} />

          <Route exact path="/createorder" component={Createorder} />
          <Route exact path="/orderlist" component={Orderlist} />

          <Route exact path="/invoice" component={Invoicedetail} />
          <Route exact path="/invoicelist" component={Invoicelist} />

          <Route exact path="/sales" component={Sales} />

          <Route exact path="/chat" component={Chat} />
          <Route exact path="/email" component={Email} />



        </Switch>
      </Router>

    </div>

  );
}

export default App;
