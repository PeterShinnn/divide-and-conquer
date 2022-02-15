import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../images/logo.png';
import './SigninNavBar.css';

function SigninNavBar() {
    return (
        <>
            <nav className="sign-in-nav-bar-container">
                <div className='sign-in-nav-bar-item'>
                    <NavLink to='/' exact={true} activeClassName='active'>
                        <img id="sign-in-logo" src={logo} alt="website-logo" />
                    </NavLink>
                </div>
            </nav>
        </>
    )
}

export default SigninNavBar
