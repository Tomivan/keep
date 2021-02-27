import React from 'react';
import { useForm } from 'react-hook-form'
import './job-info.css';

const JobInfo = () => {
    const {handleSubmit, handleChange, register} = useForm([]);
    return(
        <div className="page-info">
            <h4>Job Information</h4>
            <p className="required">Details about user's position, all fields required <span className="span">*</span></p>
            <form onSubmit={handleSubmit()} className="user-form">
                   <label className="label">Job Title</label>
                   <input type="text" name="firstName" className="user-form-input" placeholder="Staff's First Name" onChange={handleChange} ref={register({required: "Required"})}/>
                   <label className="label">Department</label>
                   <select onChange={handleChange} ref={register({required: "Required"})} className="user-select">
                       <option vaule="">Select ---</option>
                   </select>
                   <label className="label">Role</label>
                   <select onChange={handleChange} ref={register({required: "Required"})}className="user-select">
                       <option vaule="">Select ---</option>
                   </select>
                   <label className="label">Office Phone Number</label>
                   <input type="text" name="firstName" className="user-form-input" placeholder="08** **** ***" onChange={handleChange} ref={register({required: "Required"})}/>
            </form>
        </div>
    )
}

export default JobInfo;