import React from 'react';
import Sidebar from '../../../../components/sidebar/sidebar';
import { useForm } from 'react-hook-form';
import  './low-complexity.css';

const LowComplexityForm = () => {
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
                <p>Low Complexity form</p>
                <button className="submit-form">Submit Form</button>
                </div>
                <p>Added item</p>
                <div className="added-items">
                    <p>No items added yet!</p>
                </div>
               <form onSubmit={handleSubmit()} className="form">
                   <p>Add item</p>
                   <div className="inner">
                       <div className="left-side">
                       <label className="left-label">Description</label>
                       <input type="text" placeholder="Form Title" className="left-input" onChange={handleChange} ref={register({required: "Required"})}/>
                       <label className="left-label">Number of Days</label>
                       <input type="text" placeholder="Form Title" className="left-input" onChange={handleChange} ref={register({required: "Required"})}/>
                       <label className="left-label">Total</label>
                       <input type="text" placeholder="Form Title" className="left-input" onChange={handleChange} ref={register({required: "Required"})}/>
                       </div>
                       <div className="right-side">
                       <label className="left-label">Quantity</label>
                       <input type="text" placeholder="Form Title" className="left-input" onChange={handleChange} ref={register({required: "Required"})}/>
                       <label className="left-label">Cost/Day</label>
                       <input type="text" placeholder="Form Title" className="left-input" onChange={handleChange} ref={register({required: "Required"})}/>
                       <button className="add-item-1">Add Item</button>
                       </div>
                   </div>
               </form>
            </div>
        </div>
    )
}

export default LowComplexityForm;