import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logout } from '../../store/session';
import smallerLogo from '../../images/smallerLogo.png';

import './SideNavBar.css';

function SideNavBar() {
    const dispatch = useDispatch()
    const onLogout = async (e) => {
        await dispatch(logout());
    };

    return (
        <>
            <div className="side-nav-bar-container">
                <ul className="menu-items-btn">
                    <div><li><Link to='/taskboard'><img id="website-logo" src={smallerLogo} alt="website-logo" /></Link></li></div>
                    <div><li><Link to='/taskboard'><i className="fa-solid fa-table-cells-large nav-icon"></i></Link></li></div>
                    <div><li><Link to={{ pathname: "https://www.linkedin.com/in/petershin731/" }} target="_blank"><i className="fa-brands fa-linkedin nav-icon"></i></Link></li></div>
                    <div><li><Link to={{ pathname: "https://github.com/PeterShinnn" }} target="_blank"><i className="fa-brands fa-github-square nav-icon"></i></Link></li></div>
                </ul>
                <div>
                    <div className="side-nav-footer">
                        <div><Link to={{pathname: "https://github.com/PeterShinnn/divide-and-conquer"}} target="_blank"><i className="fa-brands fa-github-alt nav-icon"></i></Link></div>
                        <div><i onClick={()=>onLogout()} className="fa-solid fa-arrow-right-from-bracket nav-icon logout-btn"></i></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideNavBar;
