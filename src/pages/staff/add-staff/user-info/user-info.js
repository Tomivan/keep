import React from 'react';
import { useForm } from 'react-hook-form';
import './user-info.css';

const UserInfo = () => {
    const {handleSubmit, handleChange, register} = useForm([]);
    return(
        <div className="page-info">
            <h4>User Information</h4>
            <p className="required">Staff Information, all fields required <span className="span">*</span></p>
            <form onSubmit={handleSubmit()} className="user-form">
                  <div className="name">
                  <div>
                  <label className="label">First Name</label>
                   <input type="text" name="firstName"class="user-input" placeholder="Staff's First Name" onChange={handleChange} ref={register({required: "Required"})}/>
                  </div>
                   <div className="second">
                   <label className="label">Last Name</label>
                   <input type="text" name="lastName" class="user-input" placeholder="Staff's surname" onChange={handleChange} ref={register({required: "Required"})}/>
                   </div>
                  </div>
                   <label className="label">Staff's Phone Number</label>
                   <input type="text" name="phoneNumber" class="user-form-input" placeholder="08** **** ***" onChange={handleChange} ref={register({required: "Required"})}/>
                   <label className="label">Company</label>
                   <select onChange={handleChange} ref={register({required: "Required"})} className="user-select">
                       <option vaule="">Select ---</option>
                   </select>
                   <label className="label">Email Address</label>
                   <input type="text" name="email" placeholder="usermail" class="user-form-input"onChange={handleChange} ref={register({required: "Required"})}/>
                   <label className="label">Address</label>
                   <input type="text" name="address" class="user-form-input" placeholder="House Number, Street Name" onChange={handleChange} ref={register({required: "Required"})}/>
                   <div className="name">
                   <div>
                   <label className="label">State</label>
                   <select onChange={handleChange} ref={register({required: "Required"})} className="user-form-select">
                       <option vaule="">State</option>
                   </select>
                   </div>
                   <div className="second">
                   <label className="label">City</label>
                   <select onChange={handleChange} ref={register({required: "Required"})} className="user-form-select">
                       <option vaule="">City</option>
                   </select>
                   </div>
                   </div>
            </form>
        </div>
    )
}

export default UserInfo;