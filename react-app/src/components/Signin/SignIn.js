import React from 'react';
import { useDispatch } from "react-redux";

import LoginForm from '../Auth/LoginForm';
import { login } from '../../store/session';
import SigninNavBar from '../NavBar/SigninNavBar';

import './SignIn.css';

function SignInPage(){
    const dispatch = useDispatch();

    const handleDemoLogin = () => {
        const email = 'demo@aa.io';
        const password = 'password';
        dispatch(login(email,password));
    }

    return (
        <>
            <SigninNavBar />
            <LoginForm />
            <div className="demo-login-container">
                <p className="demo-login-text">Or Sign In With</p>
                <button className="demo-login-btn" onClick={() => handleDemoLogin()}>Demo Login</button>
            </div>
        </>
    )
}

export default SignInPage;
