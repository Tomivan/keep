import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import Filter from '../../assets/Images/filter.svg';
import './contract.css';
import { navigate } from '@reach/router';

const ContractAward = () => {
    const createContract = () => {
        navigate('/create-contract-award');
    }
    return(
        <div>
            <Sidebar />
            <div className="heading">
                <h3>Contract Award</h3>
                <div className="heading-right">
                    <img src="" alt="" />
                    <p>Gift Okobia</p>
                </div>
            </div>
            <div className="create-justification">
                <button className="create-contract" onClick={createContract}>Create Contract Award</button>
                <div className="search">
                    <input type="text" placeholder="search" name="search" className="search-input" />
                    <img src={Filter} alt="" className="filter"/><p className="filter-p">Filter</p>
                </div>
            </div>
                <table className="contract-award">
                    <thead>
                        <tr>
                            <th>PO Name</th>
                            <th>Issued To</th>
                            <th>Issue Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="grey">
                            <td>Hire of Equipment</td>
                            <td>DVD Global Resources Nigeria Ltd.</td>
                            <td>12th Jan,2020</td>
                            <td> <span className="approved">Approved</span></td>
                        </tr>
                        <tr>
                            <td>Hire of Equipment</td>
                            <td>DVD Global Resources Nigeria Ltd.</td>
                            <td>12th Jan,2020</td>
                            <td> <span className="approved">Approved</span></td>
                        </tr>
                        <tr className="grey">
                            <td>Hire of Equipment</td>
                            <td>DVD Global Resources Nigeria Ltd.</td>
                            <td>12th Jan,2020</td>
                            <td> <span className="approved">Approved</span></td>
                        </tr>
                        <tr>
                            <td>Hire of Equipment</td>
                            <td>DVD Global Resources Nigeria Ltd.</td>
                            <td>12th Jan,2020</td>
                            <td> <span className="approved">Approved</span></td>
                        </tr>
                        <tr className="grey">
                            <td>Hire of Equipment</td>
                            <td>DVD Global Resources Nigeria Ltd.</td>
                            <td>12th Jan,2020</td>
                            <td> <span className="approved">Approved</span></td>
                        </tr>
                        <tr>
                            <td>Hire of Equipment</td>
                            <td>DVD Global Resources Nigeria Ltd.</td>
                            <td>12th Jan,2020</td>
                            <td> <span className="approved">Approved</span></td>
                        </tr>
                        <tr className="grey">
                            <td>Hire of Equipment</td>
                            <td>DVD Global Resources Nigeria Ltd.</td>
                            <td>12th Jan,2020</td>
                            <td> <span className="approved">Approved</span></td>
                        </tr>
                        <tr>
                            <td>Hire of Equipment</td>
                            <td>DVD Global Resources Nigeria Ltd.</td>
                            <td>12th Jan,2020</td>
                            <td> <span className="approved">Approved</span></td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default ContractAward;