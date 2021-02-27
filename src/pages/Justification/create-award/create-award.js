import React from 'react';
import Sidebar from '../../../components/sidebar/sidebar';
import { useForm } from 'react-hook-form';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import  './create-award.css';
import { navigate } from '@reach/router';

const CreateAward = () => {
    const {handleSubmit, handleChange, register} = useForm([]);
    const awardContract = () => {
        navigate('/contract-award');
    }
    const goBack = () => {
        navigate('/justification-of-award');
    }
    return(
        <div>
            <Sidebar />
            <div className="heading">
                <div className="heading-left">
                <Icon path={mdiArrowLeft} size={1.5} class="icon" onClick={goBack}/>
                <h3>Create Award</h3>
                </div>
                <div className="heading-right">
                    <img src="" alt="" />
                    <p>Gift Okobia</p>
                </div>
            </div>
            <div className="create-container">
                <p className="required"><span className="span">*</span>All fields are required</p>
               <form onSubmit={handleSubmit()} className="create-award-form">
                   <label className="label">Project Name</label>
                   <select onChange={handleChange} ref={register({required: "Required"})} className="select">
                       <option>Select Project</option>
                   </select>
                   <label className="label">RFQ Name</label>
                   <select onChange={handleChange} ref={register({required: "Required"})} className="select">
                       <option>Select RFQ</option>
                   </select>
                   <label className="label">Justification of recommendation</label>
                   <textarea onChange={handleChange} ref={register({required: "Required"})} className="textarea"/>
                   <button className="continue" onClick={awardContract}>Continue</button>
               </form>
            </div>
        </div>
    )
}

export default CreateAward;