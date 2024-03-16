import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/AlexSBLogo.png'
import './NavigationBar.css'

function NavigationBar() {
    const imageHeight = 10;

    const [click, setClick] = useState(false) //useState intialized by false and stored in click and setclick is function to change state
    const handleClick = () => setClick(!click) //handleclick function inverts the last value of click
    const closeMenu = () => setClick(false) //CloseMenu function sets the click state by false

    const [Transparent, setTransparency] = useState(true)
    const hideNavbar = () => {
        if (window.scrollY >= imageHeight) {
            setTransparency(false)
        } else {
            setTransparency(true)
        }
    }

    window.addEventListener('scroll', hideNavbar);

    return (
        <div className={Transparent ? 'header' : 'header header-bg'}>
            <nav className='navbar'>
                <img src={logo} alt='logo' />
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#000000' }} />)
                        : (<FaBars size={30} style={{ color: '#000000' }} />)}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/events' onClick={closeMenu}>Events</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default NavigationBar;