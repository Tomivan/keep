import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import Alarm from '../../assets/Images/alarm.svg';
import Bell from '../../assets/Images/bell.svg';
import Accepted from '../../assets/Images/accepted-graph.svg';
import Bookmark from '../../assets/Images/bookmark.svg';
import Procurement from '../../assets/Images/procurement2.svg';
import Queried from '../../assets/Images/queried-graph.svg';
import rejected from '../../assets/Images/rejected-graph.svg';
import Report from '../../assets/Images/reports.svg';
import Statistics from '../../assets/Images/statistics.svg'
import './dashboard.css';

const Dashboard = () => {
    return(
        <div>
            <Sidebar />
            <div className="heading">
                <h3>Dashboard</h3>
                <div className="heading-right">
                    <img src="" alt="" />
                    <p>Gift Okobia</p>
                </div>
            </div>
            <div className="body">
                <div className="left">
                    <div className="requests">
                        <div className="statistics">
                        <img src={Statistics} alt="" className="stat-icon"/><p>Request Statistics</p>
                        </div>
                        <p>Total Request 20</p>
                    </div>
                    <div className="requests-box">
                        <div className="accepted">
                            <p>13</p>
                            <p>Accepted Requests</p>
                            <img src={Accepted} alt="accepted requests graph" className="graph"/>
                        </div>
                        <div className="queried">
                            <p>2</p>
                            <p>Queried Requests</p>
                            <img src={Queried} alt="queried requests graph" className="graph"/>
                        </div>
                        <div className="rejected">
                            <p>5</p>
                            <p>Rejected Requests</p>
                            <img src={rejected} alt="rejected requests graph" className="graph"/>
                        </div>
                    </div>
                    <div className="notifications">
                    <div className="statistics">
                        <img src={Bell} alt="" className="stat-icon"/><p>Notifications</p>
                    </div>
                        <p>Recently</p>
                    </div>
                    <div className="notifications-box">
                       <div className="notification">
                       <h6>User Requisition Order Queried by Checker</h6>
                       <div className="info">
                       <p>Personal Procurement Equipment Requisition Title</p>
                       <div className="round"></div>
                       <p>Sapele Gas Plant</p>
                       </div>
                        <div className="status">
                            <div className="statistics">
                                <img src={Alarm} alt=""/><p>Today</p>
                            </div>
                            <div className="statistics">
                                <img src={Bookmark} alt="" className="status-icon"/><p>Queried</p>
                            </div>
                        </div>
                       </div>
                       <div className="notification">
                       <h6>User Requisition Order Queried by Checker</h6>
                       <div className="info">
                       <p>Personal Procurement Equipment Requisition Title</p>
                       <div className="round"></div>
                       <p>Sapele Gas Plant</p>
                       </div>
                        <div className="status">
                            <div className="statistics">
                                <img src={Alarm} alt="" /><p>Today</p>
                            </div>
                            <div className="statistics">
                                <img src={Bookmark} alt="" className="status-icon"/><p>Queried</p>
                            </div>
                        </div>
                       </div>
                       <div className="notification">
                       <h6>User Requisition Order Queried by Checker</h6>
                       <div className="info">
                       <p>Personal Procurement Equipment Requisition Title</p>
                       <div className="round"></div>
                       <p>Sapele Gas Plant</p>
                       </div>
                        <div className="status">
                            <div className="statistics">
                                <img src={Alarm} alt=""/><p>Today</p>
                            </div>
                            <div className="statistics">
                                <img src={Bookmark} alt="" className="status-icon"/><p>Queried</p>
                            </div>
                        </div>
                       </div>
                       <div className="notification">
                       <h6>User Requisition Order Queried by Checker</h6>
                       <div className="info">
                       <p>Personal Procurement Equipment Requisition Title</p>
                       <div className="round"></div>
                       <p>Sapele Gas Plant</p>
                       </div>
                        <div className="status">
                            <div className="statistics">
                                <img src={Alarm} alt="" /><p>Today</p>
                            </div>
                            <div className="statistics">
                                <img src={Bookmark} alt="" className="status-icon"/><p>Queried</p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div className="right">
                    <p className="right-p">Recently Opened</p>
                    <div className="recent-box">
                        <div className="gradient">
                        <div className="top">
                            <img src={Procurement} alt="" />
                            <h5>Tech Procurement</h5>
                            <div className="round"></div>
                            <h5>MTO</h5>
                        </div>
                        <p>Engineering, Procurement, and Construction 10" Gas
                            Pipelines from PAOC to Oredo Flow Staion</p>
                        </div>
                        <div className="gradient">
                        <div className="top">
                        <img src={Report} alt="" />
                            <h5>Reports</h5>
                            <div className="round"></div>
                            <h5>Daily Reports</h5>
                        </div>
                        <p>OANDO Project Site Reportin, 12 January,2012</p>
                        </div>
                        <div className="gradient">
                        <div className="top">
                        <img src={Procurement} alt="" />
                            <h5>Tech Procurement</h5>
                            <div className="round"></div>
                            <h5>User Requisiton</h5>
                        </div>
                        <p>Engineering, Procurement, and Construction 10" Gas
                            Pipelines from PAOC to Oredo Flow Staion</p>
                        </div>
                        <div className="gradient">
                        <div className="top">
                        <img src={Procurement} alt="" />
                            <h5>Reports</h5>
                            <div className="round"></div>
                            <h5>Construction Report</h5>
                        </div>
                        <p>Engineering, Procurement, and Construction 10" Gas
                            Pipelines from PAOC to Oredo Flow Staion</p>
                        </div>
                        <div className="gradient">
                        <div className="top">
                        <img src={Procurement} alt="" />
                            <h5>Tech Procurement</h5>
                            <div className="round"></div>
                            <h5>Project Milestone</h5>
                        </div>
                        <p>Engineering, Procurement, and Construction 10" Gas
                            Pipelines from PAOC to Oredo Flow Staion</p>
                        </div>
                        <div className="gradient">
                        <div className="top">
                        <img src={Procurement} alt="" />
                            <h5>Tech Procurement</h5>
                            <div className="round"></div>
                            <h5>Justification of</h5>
                        </div>
                        <p>Engineering, Procurement, and Construction 10" Gas
                            Pipelines from PAOC to Oredo Flow Staion</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;