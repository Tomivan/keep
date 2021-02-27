import React from 'react';
import { useForm } from 'react-hook-form'
import './authentication.css';

const Authentication = () => {
    const {handleSubmit, handleChange, register} = useForm([]);
    return(
        <div className="page-info">
             <h4>Authentication</h4>
             <p className="required">Automatically generate passwword or create password manually</p>
             <form onSubmit={handleSubmit()} className="user-form">
                <input type="checkbox" className="form-input"/>
                <label className="form-label">Automatically generate password</label>
                <label className="label">Set Password</label>
                <input type="text" name="setPassword" placeholder="password" className="user-form-input" onChange={handleChange} ref={register({required: "Required"})}/>
                <input type="checkbox" className="form-input"/>
                <label className="form-label">Require password change at sign-in</label>
                <input type="checkbox"className="form-input"/>
                <label className="form-label">Send password in email upon completion</label>
            </form>
        </div>
    )
}

export default Authentication;