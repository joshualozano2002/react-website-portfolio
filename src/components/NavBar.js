import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'
import { Button } from './Button';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    const handleCLick = () => setClick(!click);

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={() => setClick(false)}> 
                Joshua's Portfolio
                <FontAwesomeIcon icon={faFire} className="text-orange-500 ml-2" />
            </Link>
            <div className="menu-icon" onClick={handleCLick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} className="text-white text-2xl" />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={() => setClick(false)}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/projects" className="nav-links" onClick={() => setClick(false)}>Projects</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-links" onClick={() => setClick(false)}>Contact</Link>
                </li>
                <li>
                    <Link to="/resume" className="nav-links-mobile" onClick={() => setClick(false)}>
                    Resume
                    </Link>
                </li>

            </ul>
            {button && <Button buttonStyle='btn--outline'>Resume</Button>}
        </div>
    </nav>
    </>
  )
}

export default NavBar
