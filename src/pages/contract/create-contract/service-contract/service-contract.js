import React from 'react';
import Sidebar from '../../../../components/sidebar/sidebar';
import { useForm } from 'react-hook-form';
import  './service-contract.css';

const ServiceContract = () => {
    const {handleSubmit, handleChange, register} = useForm([]);
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
                <div className="form-top">
                <p>Service Contract High Complexity</p>
                <button className="submit-form">Submit Form</button>
                </div>
                <p>Added Items</p>
                <div className="added-items">
                    <p>No items added yet!</p>
                </div>
               <form onSubmit={handleSubmit()} className="form">
                   <p>Add Item</p>
                   <div className="inner">
                       <div className="left-side">
                       <label className="left-label">Description</label>
                       <input type="text" placeholder="Form Title" className="left-input" onChange={handleChange} ref={register({required: "Required"})}/>
                       <label className="left-label">Unit Cost</label>
                       <input type="text" placeholder="Form Title" className="left-input" onChange={handleChange} ref={register({required: "Required"})}/>
                       <button className="add-item">Add Item</button>
                       </div>
                       <div className="right-side">
                       <label className="right-label">UM</label>
                       <input type="text" placeholder="Form Title" className="right-input" onChange={handleChange} ref={register({required: "Required"})}/>
                       <label className="right-label">Total</label>
                       <input type="text" placeholder="Form Title" className="right-input" onChange={handleChange} ref={register({required: "Required"})}/>
                       </div>
                   </div>
               </form>
            </div>
        </div>
    )
}

export default ServiceContract;