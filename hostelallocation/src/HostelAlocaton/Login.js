import React from 'react'
import "./Lgin.css";
import socialMediaAuth from '../service/auth'
import {facebookProvider} from '../config/authMethods';
import { googleProvider } from '../config/authMethods';


const Login = () => {
    const handleOnClick = async (provider) =>{
        const res = await socialMediaAuth(provider)
        console.log(res);
    }
    return (
        <div className="App"> 
        <h1>Hostel Allocation</h1>
        <p>Please sign-in:</p>
            <header className="App-header">
            <button className="loginBtn loginBtn--google" onClick={()=> handleOnClick(googleProvider)}>Sign in with Google</button><br />
                <button className="loginBtn loginBtn--facebook" onClick={()=> handleOnClick(facebookProvider)}>Sign in with Facebook</button>
                
            </header>
        </div>
    )
}

export default Login;
