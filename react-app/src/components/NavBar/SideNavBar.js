import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../store/session';
import smallerLogo from '../../images/smallerLogo.png';

import './SideNavBar.css';
import { Modal } from '../../context/Modal';
import FriendRequest from '../FriendRequest/FriendRequestModal';

function SideNavBar() {
    const dispatch = useDispatch()
    const notifications = useSelector(state => state.requests.requests);
    const [showNotification, setShowNotification] = useState(false);

    const onLogout = async (e) => {
        await dispatch(logout());
    };

    useEffect(() => {

    }, [dispatch])

    return (
        <>
            <div className="side-nav-bar-container">
                <ul className="menu-items-btn">
                    <div><li><Link to='/taskboard'><img id="website-logo" src={smallerLogo} alt="website-logo" /></Link></li></div>
                    <div><li><Link to='/taskboard'><i className="fa-solid fa-table-cells-large nav-icon"></i></Link></li></div>
                    {notifications?.length ?
                        <>
                            <div onClick={() => setShowNotification(true)}><li><i className="fa-solid fa-envelope-open-text got-request nav-icon"></i></li></div>
                            {showNotification && (
                                <Modal onClose={() => setShowNotification(false)}>
                                    <FriendRequest friend_requests={notifications}/>
                                </Modal>
                            )}
                        </>
                        : <>
                            <div onClick={() => setShowNotification(true)}><li><i className="fa-solid fa-envelope nav-icon"></i></li></div>
                            {showNotification && (
                                <Modal onClose={() => setShowNotification(false)}>
                                    <FriendRequest />
                                </Modal>
                            )}
                        </>
                    }
                    <div><li><Link to={{ pathname: "https://www.linkedin.com/in/petershin731/" }} target="_blank"><i className="fa-brands fa-linkedin nav-icon"></i></Link></li></div>
                    <div><li><Link to={{ pathname: "https://github.com/PeterShinnn" }} target="_blank"><i className="fa-brands fa-github-square nav-icon"></i></Link></li></div>
                </ul>
                <div>
                    <div className="side-nav-footer">
                        <div><Link to={{ pathname: "https://github.com/PeterShinnn/divide-and-conquer" }} target="_blank"><i className="fa-brands fa-github-alt nav-icon"></i></Link></div>
                        <div><i onClick={() => onLogout()} className="fa-solid fa-arrow-right-from-bracket nav-icon logout-btn"></i></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideNavBar;
