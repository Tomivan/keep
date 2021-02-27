import React from 'react';
import Sidebar from '../../../../components/sidebar/sidebar';
import { useForm } from 'react-hook-form';
import  './select-vendor.css';

const SelectVendor = () => {
    const {handleSubmit, handleChange, register} = useForm([]);
    return(
        <div>
            <Sidebar />
            <div className="heading">
                <h3>Create Award</h3>
                <div className="heading-right">
                    <img src="" alt="" />
                    <p>Gift Okobia</p>
                </div>
            </div>
            <div className="create-container">
                <p>Select a qualified vendor from the list of vendors</p>
               <form onSubmit={handleSubmit()} className="form">
                   <input type="radio" onChange={handleChange} ref={register({required: "Required"})}/>
               </form>
            </div>
        </div>
    )
}

export default SelectVendor;