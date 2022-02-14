import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LogoutButton from './Auth/LogoutButton';

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLink;

  if (sessionUser) {
    sessionLink = (
      <>
        <nav className="nav-bar-container">
          <div id="logo"><NavLink to='/' exact={true} activeClassName='active'>
            Home/Logo
          </NavLink></div>
          <ul className="nav-bar-items">
            <li>
              <NavLink to='/about' exact={true} activeClassName='active'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </li>
            <li>
              <LogoutButton />
            </li>
          </ul>
        </nav>
      </>
    )
  } else {
    sessionLink = (
      <>
        <nav className="nav-bar-container">
          <div id="logo"><NavLink to='/' exact={true} activeClassName='active'>
            Home/Logo
          </NavLink></div>

          <ul className="nav-bar-items">
            <li>
              <NavLink to='/about' exact={true} activeClassName='active'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </li>
            <span className="sign-up">
              <li>
                <NavLink to='/sign-up' exact={true} activeClassName='active'>
                  Get Started
                </NavLink>
              </li>
            </span>
          </ul>
        </nav>
      </>
    )
  }

  return (
    <>
      {sessionLink}
    </>
  );
}

export default NavBar;
