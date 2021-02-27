import React from 'react';
import Sidebar from '../../../components/sidebar/sidebar';
import { useForm } from 'react-hook-form';
import  './create-contract.css';
import { navigate } from '@reach/router';

const CreateContractAward = () => {
    const {handleSubmit, handleChange, register} = useForm([]);
    // const linkForm = () => {
    //     if(value === "service-contract") {
    //         navigate('./service-contract')
    //     }
    // }
    return(
        <div>
            <Sidebar />
            <div className="heading">
                <h3>Create Contract Award</h3>
                <div className="heading-right">
                    <img src="" alt="" />
                    <p>Gift Okobia</p>
                </div>
            </div>
            <div className="create-container">
                <p className="required"><span className="span">*</span>All fields are required</p>
               <form onSubmit={handleSubmit()} className="form">
                   <label className="label">Vendor's Name</label>
                   <select onChange={handleChange} ref={register({required: "Required"})} className="select">
                       <option>Select Vendor</option>
                   </select>
                   <label className="label">Order Title</label>
                   <input type="text" placeholder="Form Title" name="orderTitle" className="award-input"/>
                   <p className="label">Select Form Type</p>
                   <input type="radio" id="service-contract" name="form" value="service-contract"  className="form-input" onChange={handleChange}/>
                   <label className="form-label">Service Contract High Complexity</label>
                   <input type="radio" id="low-complexity" name="form" value="low-complexity" className="form-input" onChange={handleChange}/>
                   <label className="form-label">High Complexity</label>
                   <input type="radio" id="high-complexity" name="form" value="low-complexity" className="form-input" onChange={handleChange}/>
                   <label className="form-label">Low Complexity</label>
                   <button className="continue">Continue</button>
               </form>
            </div>
        </div>
    )
}

export default CreateContractAward;