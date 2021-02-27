import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import Filter from '../../assets/Images/filter.svg';
import './justification.css';
import { navigate } from '@reach/router';

const Justification = () => {
    const createAward = () => {
        navigate('/create-award');
    }
    return(
        <div>
            <Sidebar />
            <div className="heading">
                <h3>Justification of Award</h3>
                <div className="heading-right">
                    <img src="" alt="" />
                    <p>Gift Okobia</p>
                </div>
            </div>
            <div className="create-justification">
                <button className="create-award" onClick={createAward}>Create Award</button>
                <div className="search">
                    <input type="text" placeholder="search" name="search" className="search-input" />
                    <img src={Filter} alt="" className="filter"/><p className="filter-p">Filter</p>
                </div>
            </div>
            <table className="justification-table">
                <thead>
                    <tr className="table-row">
                        <th>Project Name</th>
                        <th>Vendor's Name</th>
                        <th>RQN Number</th>
                        <th>Date Created</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="grey">
                        <td>Gas Plant Electrical Unit Equipment and tools</td>
                        <td>Chike & Sons Engineering Company</td>
                        <td>1873KAK8328</td>
                        <td>12, Jan.2020</td>
                        <td> <span className="approved">Approved</span></td>
                    </tr>
                    <tr>
                        <td>Gas Plant Electrical Unit Equipment and tools</td>
                        <td>Chike & Sons Engineering Company</td>
                        <td>1873KAK8328</td>
                        <td>12, Jan.2020</td>
                        <td> <span className="approved">Approved</span></td>
                    </tr>
                    <tr className="grey">
                        <td>Gas Plant Electrical Unit Equipment and tools</td>
                        <td>Chike & Sons Engineering Company</td>
                        <td>1873KAK8328</td>
                        <td>12, Jan.2020</td>
                        <td> <span className="approved">Approved</span></td>
                    </tr>
                    <tr>
                        <td>Gas Plant Electrical Unit Equipment and tools</td>
                        <td>Chike & Sons Engineering Company</td>
                        <td>1873KAK8328</td>
                        <td>12, Jan.2020</td>
                        <td> <span className="approved">Approved</span></td>
                    </tr>
                    <tr className="grey">
                        <td>Gas Plant Electrical Unit Equipment and tools</td>
                        <td>Chike & Sons Engineering Company</td>
                        <td>1873KAK8328</td>
                        <td>12, Jan.2020</td>
                        <td> <span className="approved">Approved</span></td>
                    </tr>
                    <tr> 
                        <td>Gas Plant Electrical Unit Equipment and tools</td>
                        <td>Chike & Sons Engineering Company</td>
                        <td>1873KAK8328</td>
                        <td>12, Jan.2020</td>
                        <td> <span className="approved">Approved</span></td>
                    </tr>
                    <tr className="grey">
                        <td>Gas Plant Electrical Unit Equipment and tools</td>
                        <td>Chike & Sons Engineering Company</td>
                        <td>1873KAK8328</td>
                        <td>12, Jan.2020</td>
                        <td> <span className="approved">Approved</span></td>
                    </tr>
                    <tr>
                        <td>Gas Plant Electrical Unit Equipment and tools</td>
                        <td>Chike & Sons Engineering Company</td>
                        <td>1873KAK8328</td>
                        <td>12, Jan.2020</td>
                        <td> <span className="approved">Approved</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Justification