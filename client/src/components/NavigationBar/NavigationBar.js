/**
 * React component for the navigation bar.
 * @component
 * @returns {JSX.Element} Navigation bar component.
 */
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/AlexSBLogo.svg';
import './NavigationBar.css';

function NavigationBar() {
    const IMAGE_HEIGHT = 10;

    /**
     * State to manage click event on the menu.
     * @type {[boolean, function]} 
     */
    const [click, setClick] = useState(false);

    /**
     * Function to handle click event on the menu.
     */
    const handleClick = () => {
        setClick(!click);
        if (!click) {
            setTransparency(false);
        } else if (window.scrollY >= IMAGE_HEIGHT) {
            setTransparency(false);
        } else {
            setTransparency(true);
        }
    };

    /**
     * Function to close the menu.
     */
    const closeMenu = () => setClick(false);

    /**
     * State to manage the transparency of the navigation bar.
     * @type {[boolean, function]} 
     */
    const [transparent, setTransparency] = useState(true);

    /**
     * Function to hide the navigation bar based on scroll and menu state.
     */
    const hideNavbar = () => {
        if (click) {
            setTransparency(false);
        } else if (window.scrollY >= IMAGE_HEIGHT) {
            setTransparency(false);
        } else {
            setTransparency(true);
        }
    };

    window.addEventListener('scroll', hideNavbar);

    return (
        <div className={transparent ? 'header' : 'header header-bg'}>
            <nav className='navbar'>
                <a href='/'><img className='navbar__logo' src={logo} alt='logo' /></a>

                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#FFFFFF' }} />)
                        : (<FaBars size={30} style={{ color: '#FFFFFF' }} />)}
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>

                    <div className='default-tabs'>
                        <li className='nav-item'>
                            <a href='/' className="tab-button" onClick={closeMenu}><b>HOME</b></a>
                        </li>
                        <li className='nav-item'>
                            <a href='/activities' className="tab-button" onClick={closeMenu}><b>Activities</b></a>
                        </li>
                    </div>

                    <div className='register-tabs'>
                        <li className='nav-item'>
                            <a href='/login' className="tab-button tab-button-login" onClick={closeMenu}><b>Member Login</b></a>
                        </li>
                        <li className='nav-item'>
                            <a href='/join' className="tab-button tab-button-join" onClick={closeMenu}><b>Join Now</b></a>
                        </li>
                    </div>

                </ul>
                
            </nav>
        </div>
    )
}
export default NavigationBar;