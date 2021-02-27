import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import Filter from '../../assets/Images/filter.svg';
import  './staff.css';

const Staff = () => {
    return(
        <div>
            <Sidebar />
            <div className="heading">
                <h3>Staff</h3>
                <div className="heading-right">
                    <img src="" alt="" />
                    <p>Gift Okobia</p>
                </div>
            </div>
            <div className="create-justification">
                <div className="search">
                    <input type="text" placeholder="search" name="search" className="search-input" />
                    <img src={Filter} alt="" className="filter"/><p className="filter-p">Filter</p>
                </div>
                <div className="staff-buttons">
                <button className="multiple-staff">Add Multiple Staff</button>
                <button className="add-staff">Add Staff</button>
                </div>
            </div>
            <div className="create-container">
                <div className="staff-info">
                <p>Number of Staff Added: <span>382</span></p>
                <div className="user-actions">
                    <p>Block user</p>
                    <p>Delete User</p>
                </div>
                </div>
                <table className="staff-table">
                <thead>
                    <tr className="table-row">
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Role</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="grey">
                        <td>Beverley Saunders</td>
                        <td>beverleysaunders@dgs.com</td>
                        <td>0801 0002 000</td>
                        <td>Staff</td>
                        <td>DGS</td>
                    </tr>
                    <tr className="grey">
                        <td>Beverley Saunders</td>
                        <td>beverleysaunders@dgs.com</td>
                        <td>0801 0002 000</td>
                        <td>Staff</td>
                        <td>DGS</td>
                    </tr>
                    <tr className="grey">
                        <td>Beverley Saunders</td>
                        <td>beverleysaunders@dgs.com</td>
                        <td>0801 0002 000</td>
                        <td>Staff</td>
                        <td>DGS</td>
                    </tr>
                    <tr className="grey">
                        <td>Beverley Saunders</td>
                        <td>beverleysaunders@dgs.com</td>
                        <td>0801 0002 000</td>
                        <td>Staff</td>
                        <td>DGS</td>
                    </tr>
                    <tr className="grey">
                        <td>Beverley Saunders</td>
                        <td>beverleysaunders@dgs.com</td>
                        <td>0801 0002 000</td>
                        <td>Staff</td>
                        <td>DGS</td>
                    </tr>
                    <tr className="grey">
                        <td>Beverley Saunders</td>
                        <td>beverleysaunders@dgs.com</td>
                        <td>0801 0002 000</td>
                        <td>Staff</td>
                        <td>DGS</td>
                    </tr>
                    <tr className="grey">
                        <td>Beverley Saunders</td>
                        <td>beverleysaunders@dgs.com</td>
                        <td>0801 0002 000</td>
                        <td>Staff</td>
                        <td>DGS</td>
                    </tr>
                    <tr className="grey">
                        <td>Beverley Saunders</td>
                        <td>beverleysaunders@dgs.com</td>
                        <td>0801 0002 000</td>
                        <td>Staff</td>
                        <td>DGS</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Staff;