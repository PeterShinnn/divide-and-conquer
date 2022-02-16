import { Link } from 'react-router-dom';
import smallerLogo from '../../images/smallerLogo.png';

import './SideNavBar.css';

function SideNavBar() {
    return (
        <>
            <div className="side-nav-bar-container">
                <ul className="menu-items-btn">
                    <div><li><Link to='/taskboard'><img id="website-logo" src={smallerLogo} alt="website-logo" /></Link></li></div>
                    <div><li><Link to='#'><i className="fa-solid fa-table-cells-large icon"></i></Link></li></div>
                    <div><li><Link to='#'><i className="fa-brands fa-linkedin icon"></i></Link></li></div>
                    <div><li><Link to='#'><i className="fa-brands fa-github-square icon"></i></Link></li></div>
                </ul>
                <div>
                    <div className="side-nav-footer">
                        <div><i className="fa-brands fa-github-alt icon"></i></div>
                        <div><i className="fa-solid fa-arrow-right-from-bracket icon logout-btn"></i></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideNavBar;
