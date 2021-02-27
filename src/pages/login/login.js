import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, navigate } from '@reach/router';
import Background from '../../assets/Images/Background.png';
import Logo from '../../assets/Images/logo.png';
import './login.css';

const Login = () => {
    const {handleSubmit, handleChange, register} = useForm([]);
    const login = () =>{
        navigate(`/dashboard`);
        
    }
    return (
        <div>
            <img src={Background} alt="background" className="background"/>
            <form onSubmit={handleSubmit(login)}className="login-form">
                <img src={Logo} alt="DGS-logo" className="logo"/>
                <h2>Login to your Account</h2>
                <p>Welcome, enter your login details</p>
                <label>Email</label>
                <input type="text" name="email" placeholder="yourmail@dgslimited.com" onChange={handleChange} ref={register({required: "Required"})} className="input"/>
                <label>Password</label>
                <input type="password" name="password" placeholder="password" onChange={handleChange} ref={register({required: "Required"})} className="input"/>
                <div className="password"> <Link to="/forgot-password" className="password-link">Forgot your password?</Link></div>
                <button className="login-button">Login </button>
            </form> 
        </div>
    )
}

export default Login;