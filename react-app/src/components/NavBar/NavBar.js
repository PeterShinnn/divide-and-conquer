import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

import logo from '../../images/logo.png';
import LogoutButton from '../Auth/LogoutButton';

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const toggleMenu = () => {
    const mobileMenu = document.querySelector('.mobile-nav-items');
    mobileMenu.classList.toggle('active')
  }
  let sessionLink;

  if (sessionUser) {
    sessionLink = (
      <>
        <nav className="nav-bar-container">
          <div className="left-side-nav-bar">
            <div id="logo">
              <NavLink to='/' exact={true} activeClassName='active'>
                <img id="website-logo" src={logo} alt="website-logo" />
              </NavLink>
            </div>

            <ul className="left-side-nav-items">
              <li><Link to={{ pathname: "https://www.linkedin.com/in/petershin731/" }}>Github</Link></li>
              <li><Link to={{ pathname: "https://github.com/PeterShinnn" }}>Linkedin</Link></li>
              <li><Link to={{ pathname: 'https://angel.co/u/peter-shin-6' }}>AngelList</Link></li>
            </ul>
          </div>

          <ul className="nav-bar-items">
            <li>
              <NavLink to='/taskboard' exact={true} activeClassName='active'>
                Task Board
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

          <div className="left-side-nav-bar">
            <div id="logo">
              <NavLink to='/' exact={true} activeClassName='active'>
                <img id="website-logo" src={logo} alt="website-logo" />
              </NavLink>
            </div>
            <ul className="left-side-nav-items">
              <li><Link to={{ pathname: "https://www.linkedin.com/in/petershin731/" }} target="_blank">Github</Link></li>
              <li><Link to={{ pathname: "https://github.com/PeterShinnn" }} target="_blank">Linkedin</Link></li>
              <li><Link to={{ pathname: 'https://angel.co/u/peter-shin-6' }} target="_blank">AngelList</Link></li>
            </ul>
          </div>

          <ul className="nav-bar-items">
            <li>
              <NavLink to='/login' exact={true} activeClassName='active'>
                Log In
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
          <a href='#' className="navbar-toggle-btn" onClick={() => toggleMenu()}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>

          <ul className="mobile-nav-items">
            <li><Link to={{ pathname: "https://www.linkedin.com/in/petershin731/" }} target="_blank">Github</Link></li>
            <li><Link to={{ pathname: "https://github.com/PeterShinnn" }} target="_blank">Linkedin</Link></li>
            <li><Link to={{ pathname: 'https://angel.co/u/peter-shin-6' }} target="_blank">AngelList</Link></li>
            <li>
              <NavLink to='/login' exact={true} activeClassName='active'>
                Log In
              </NavLink>
            </li>
            <li>
              <NavLink to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
              </NavLink>
            </li>
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
