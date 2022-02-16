import { Link } from 'react-router-dom';
import smallerLogo from '../../images/smallerLogo.png';

function SideNavBar() {
    return (
        <>
            <div className="side-nav-bar-container">
                <div>
                    <ul>
                        <li><Link to='/taskboard'><img id="website-logo" src={smallerLogo} alt="website-logo"/></Link></li>
                        <li><Link to='#'><i className="fa-solid fa-table-cells-large"></i></Link></li>
                        <li><Link to='#'><i className="fa-brands fa-linkedin"></i></Link></li>
                        <li><Link to='#'><i className="fa-brands fa-github-square"></i></Link></li>
                    </ul>
                </div>
                <div><i className="fa-solid fa-arrow-right-from-bracket"></i></div>
            </div>
        </>
    )
}

export default SideNavBar;
