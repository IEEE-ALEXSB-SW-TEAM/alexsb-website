import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/AlexSBLogo.svg'
import './NavigationBar.css'

function NavigationBar() {
    const IMAGE_HEIGHT = 10;

    const [click, setClick] = useState(false) //useState intialized by false and stored in click and setclick is function to change state
    const handleClick = () => {
        setClick(!click) //handleclick function inverts the last value of click
        if (!click) {
            setTransparency(false)
        } else if (window.scrollY >= IMAGE_HEIGHT) {
            setTransparency(false)
        } else {
            setTransparency(true)
        }
    }
    const closeMenu = () => setClick(false) //CloseMenu function sets the click state by false

    const [Transparent, setTransparency] = useState(true)
    const hideNavbar = () => {
        if (click) {
            setTransparency(false)
        } else if (window.scrollY >= IMAGE_HEIGHT) {
            setTransparency(false)
        } else {
            setTransparency(true)
        }
    }

    window.addEventListener('scroll', hideNavbar);

    return (
        <div className={Transparent ? 'header' : 'header header-bg'}>
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