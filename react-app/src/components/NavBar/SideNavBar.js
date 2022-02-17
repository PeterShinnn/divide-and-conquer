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
                    <div><li><Link to='#'><i className="fa-solid fa-table-cells-large nav-icon"></i></Link></li></div>
                    <div><li><Link to='#'><i className="fa-brands fa-linkedin nav-icon"></i></Link></li></div>
                    <div><li><Link to='#'><i className="fa-brands fa-github-square nav-icon"></i></Link></li></div>
                </ul>
                <div>
                    <div className="side-nav-footer">
                        <div><i className="fa-brands fa-github-alt nav-icon"></i></div>
                        <div><i onClick={()=>onLogout()}className="fa-solid fa-arrow-right-from-bracket nav-icon logout-btn"></i></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideNavBar;
