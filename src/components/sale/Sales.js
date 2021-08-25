import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Leftsidebar from '../../pages/Leftsidebar';
import Rightsidebar from '../../pages/Rightsidebar';
import Topbar from '../../pages/Topbar';

export default class Sales extends Component {
  render() {
    return (
      <div>
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
                      <li className="breadcrumb-item"><NavLink to="#"><i className="material-icons">home</i> Home</NavLink></li>
                      <li className="breadcrumb-item"><NavLink to="#">Sales</NavLink></li>
                      <li className="breadcrumb-item active" aria-current="page">Total Sales</li>
                    </ol>
                  </nav>
                </div>
                <div className="col-xl-12 col-md-12">
                  <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                      <h6>Total Sales</h6>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget">
                          <span className="ms-chart-label bg-black"><i className="material-icons">arrow_upward</i> 3.2%</span>
                          <div className="ms-card-body media">
                            <div className="media-body">
                              <span className="black-text"><strong>Sells Graph</strong></span>
                              <h2>$8,451</h2>
                            </div>
                          </div>
                          <canvas id="line-chart" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget">
                          <span className="ms-chart-label bg-red"><i className="material-icons">arrow_upward</i> 9.5%</span>
                          <div className="ms-card-body media">
                            <div className="media-body">
                              <span className="black-text"><strong>Total Orders</strong></span>
                              <h2>48,973</h2>
                            </div>
                          </div>
                          <canvas id="line-chart-4" />
                        </div>
                      </div>
                      {/* Favourite Products */}
                      <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-widget ms-crypto-widget">
                          <div className="ms-panel-header">
                            <h6>Favourite charts</h6>
                          </div>
                          <div className="ms-panel-body p-0">
                            <ul className="nav nav-tabs nav-justified has-gap px-4 pt-4" role="tablist">
                              <li role="presentation" className="fs-12"><NavLink to="#btc" aria-controls="btc" className="active show" role="tab" data-toggle="tab"> Mon </NavLink></li>
                              <li role="presentation" className="fs-12"><NavLink to="#xrp" aria-controls="xrp" role="tab" data-toggle="tab">
                                Tue </NavLink></li>
                              <li role="presentation" className="fs-12"><NavLink to="#ltc" aria-controls="ltc" role="tab" data-toggle="tab">
                                Wed </NavLink></li>
                              <li role="presentation" className="fs-12"><NavLink to="#eth" aria-controls="eth" role="tab" data-toggle="tab">
                                Thu </NavLink></li>
                              <li role="presentation" className="fs-12"><NavLink to="#zec" aria-controls="zec" role="tab" data-toggle="tab">
                                Fri </NavLink></li>
                            </ul>
                            <div className="tab-content">
                              <div role="tabpanel" className="tab-pane active show fade in" id="btc">
                                <div className="table-responsive">
                                  <table className="table table-hover thead-light">
                                    <thead>
                                      <tr>
                                        <th scope="col">Restaurant Names</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">Orders</th>
                                        <th scope="col">Profit</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Hunger House</td>
                                        <td>8528</td>
                                        <td className="ms-text-success">+17.24%</td>
                                        <td>7.65%</td>
                                      </tr>
                                      <tr>
                                        <td>Food Lounge</td>
                                        <td>4867</td>
                                        <td className="ms-text-danger">-12.24%</td>
                                        <td>9.12%</td>
                                      </tr>
                                      <tr>
                                        <td>Delizious</td>
                                        <td>7538</td>
                                        <td className="ms-text-success">+32.04%</td>
                                        <td>14.29%</td>
                                      </tr>
                                      <tr>
                                        <td>Netherfood</td>
                                        <td>1614</td>
                                        <td className="ms-text-danger">-20.75%</td>
                                        <td>12.25%</td>
                                      </tr>
                                      <tr>
                                        <td>Rusmiz</td>
                                        <td>7538</td>
                                        <td className="ms-text-success">+32.04%</td>
                                        <td>14.29%</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div role="tabpanel" className="tab-pane fade" id="xrp">
                                <div className="table-responsive">
                                  <table className="table table-hover thead-light">
                                    <thead>
                                      <tr>
                                        <th scope="col">Restaurant Name</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">Orders</th>
                                        <th scope="col">Profit</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Hunger House</td>
                                        <td>8528</td>
                                        <td className="ms-text-success">+17.24%</td>
                                        <td>7.65%</td>
                                      </tr>
                                      <tr>
                                        <td>Food Lounge</td>
                                        <td>4867</td>
                                        <td className="ms-text-danger">-12.24%</td>
                                        <td>9.12%</td>
                                      </tr>
                                      <tr>
                                        <td>Delizious</td>
                                        <td>7538</td>
                                        <td className="ms-text-success">+32.04%</td>
                                        <td>14.29%</td>
                                      </tr>
                                      <tr>
                                        <td>Netherfood</td>
                                        <td>1614</td>
                                        <td className="ms-text-danger">-20.75%</td>
                                        <td>12.25%</td>
                                      </tr>
                                      <tr>
                                        <td>Rusmiz</td>
                                        <td>7538</td>
                                        <td className="ms-text-success">+32.04%</td>
                                        <td>14.29%</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div role="tabpanel" className="tab-pane fade" id="ltc">
                                <div className="table-responsive">
                                  <table className="table table-hover thead-light">
                                    <thead>
                                      <tr>
                                        <th scope="col">Restaurant Name</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">Orders</th>
                                        <th scope="col">Profit</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Hunger House</td>
                                        <td>8528</td>
                                        <td className="ms-text-success">+17.24%</td>
                                        <td>7.65%</td>
                                      </tr>
                                      <tr>
                                        <td>Food Lounge</td>
                                        <td>4867</td>
                                        <td className="ms-text-danger">-12.24%</td>
                                        <td>9.12%</td>
                                      </tr>
                                      <tr>
                                        <td>Delizious</td>
                                        <td>7538</td>
                                        <td className="ms-text-success">+32.04%</td>
                                        <td>14.29%</td>
                                      </tr>
                                      <tr>
                                        <td>Netherfood</td>
                                        <td>1614</td>
                                        <td className="ms-text-danger">-20.75%</td>
                                        <td>12.25%</td>
                                      </tr>
                                      <tr>
                                        <td>Rusmiz</td>
                                        <td>7538</td>
                                        <td className="ms-text-success">+32.04%</td>
                                        <td>14.29%</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div role="tabpanel" className="tab-pane fade" id="eth">
                                <div className="table-responsive">
                                  <table className="table table-hover thead-light">
                                    <thead>
                                      <tr>
                                        <th scope="col">Restaurant Name</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">Orders</th>
                                        <th scope="col">Profit</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Hunger House</td>
                                        <td>8528</td>
                                        <td className="ms-text-success">+17.24%</td>
                                        <td>7.65%</td>
                                      </tr>
                                      <tr>
                                        <td>Food Lounge</td>
                                        <td>4867</td>
                                        <td className="ms-text-danger">-12.24%</td>
                                        <td>9.12%</td>
                                      </tr>
                                      <tr>
                                        <td>Delizious</td>
                                        <td>7538</td>
                                        <td className="ms-text-success">+32.04%</td>
                                        <td>14.29%</td>
                                      </tr>
                                      <tr>
                                        <td>Netherfood</td>
                                        <td>1614</td>
                                        <td className="ms-text-danger">-20.75%</td>
                                        <td>12.25%</td>
                                      </tr>
                                      <tr>
                                        <td>Rusmiz</td>
                                        <td>7538</td>
                                        <td className="ms-text-success">+32.04%</td>
                                        <td>14.29%</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div role="tabpanel" className="tab-pane fade" id="zec">
                                <div className="table-responsive">
                                  <table className="table table-hover thead-light">
                                    <thead>
                                      <tr>
                                        <th scope="col">Restaurant Name</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">Orders</th>
                                        <th scope="col">Profit</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Hunger House</td>
                                        <td>8528</td>
                                        <td className="ms-text-success">+17.24%</td>
                                        <td>7.65%</td>
                                      </tr>
                                      <tr>
                                        <td>Food Lounge</td>
                                        <td>4867</td>
                                        <td className="ms-text-danger">-12.24%</td>
                                        <td>9.12%</td>
                                      </tr>
                                      <tr>
                                        <td>Delizious</td>
                                        <td>7538</td>
                                        <td className="ms-text-success">+32.04%</td>
                                        <td>14.29%</td>
                                      </tr>
                                      <tr>
                                        <td>Netherfood</td>
                                        <td>1614</td>
                                        <td className="ms-text-danger">-20.75%</td>
                                        <td>12.25%</td>
                                      </tr>
                                      <tr>
                                        <td>Rusmiz</td>
                                        <td>7538</td>
                                        <td className="ms-text-success">+32.04%</td>
                                        <td>14.29%</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Favourite Products */}
                        {/* Total Earnings */}
                        <div className="ms-panel">
                          <div className="ms-panel-header">
                            <h6>Total Earnings</h6>
                          </div>
                          <div className="ms-panel-body p-0">
                            <div className="ms-quick-stats">
                              <div className="ms-stats-grid">
                                <i className="fa fa-star" />
                                <p className="ms-text-dark">$8,033</p>
                                <span>Today</span>
                              </div>
                              <div className="ms-stats-grid">
                                <i className="fa fa-university" />
                                <p className="ms-text-dark">$3,039</p>
                                <span>Yesterday</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Total Earnings */}
                      <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                          <div className="ms-panel-header new">
                            <h6>Monthly Revenue</h6>
                            <select className="form-control new" id="exampleSelect">
                              <option value={1}>January</option>
                              <option value={2}>February</option>
                              <option value={3}>March </option>
                              <option value={4}>April</option>
                              <option value={5}>May</option>
                              <option value={1}>June</option>
                              <option value={2}>July</option>
                              <option value={3}>August</option>
                              <option value={4}>September</option>
                              <option value={5}>October</option>
                              <option value={4}>November</option>
                              <option value={5}>December</option>
                            </select>
                          </div>
                          <div className="ms-panel-body">
                            <span className="progress-label"> <strong>Week 1</strong> </span>
                            <div className="progress">
                              <div className="progress-bar bg-primary" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                            </div>
                            <span className="progress-label"> <strong>Week 2</strong> </span>
                            <div className="progress">
                              <div className="progress-bar bg-primary" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
                            </div>
                            <span className="progress-label"> <strong>Week 3</strong> </span>
                            <div className="progress">
                              <div className="progress-bar bg-primary" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</div>
                            </div>
                            <span className="progress-label"> <strong>Week 4</strong> </span>
                            <div className="progress">
                              <div className="progress-bar bg-primary" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>40%</div>
                            </div>
                          </div>
                          <div className="ms-panel">
                            <div className="ms-panel-header">
                              <h6>Total Earnings</h6>
                            </div>
                            <div className="ms-panel-body p-0">
                              <div className="ms-quick-stats">
                                <div className="ms-stats-grid">
                                  <i className="fa fa-star" />
                                  <p className="ms-text-dark">$288,033</p>
                                  <span>Monthly</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main></div>
        {/* MODALS */}
        <Rightsidebar />
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
