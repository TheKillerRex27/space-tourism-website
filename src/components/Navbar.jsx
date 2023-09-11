import React, {useState} from 'react'
import icon from '../assets/icon.svg'
import Hamburger from 'hamburger-react'
import '../styles/Navbar.css'

function Navbar({ activeLink, setActiveLink }) {

  // Function to handle link clicks and update the active link
  const handleLinkClick = (link) => {
    setActiveLink(link)
  }

    return (
      <nav className='navbar'>
        {/* Logo */}
        <span>
          <img src={icon} />
        </span>
        <span>
          <hr />
        </span>
        <span className="menu-icon">
          <Hamburger />
        </span>
        <span>
          <ul className='nav-links'>
          {/* Navigation links with conditional active class */}
            <li>
              <a className={activeLink === 'Home' ? 'active-link' : ''} onClick={() => handleLinkClick('Home')}><b>00</b> HOME</a>
            </li>
            <li>
              <a className={activeLink === 'Destination' ? 'active-link' : ''} onClick={() => handleLinkClick('Destination')}><b>01</b> DESTINATION</a>
            </li>
            <li>
              <a className={activeLink === 'Crew' ? 'active-link' : ''} onClick={() => handleLinkClick('Crew')}><b>02</b> CREW</a>
            </li>
            <li>
              <a className={activeLink === 'Technology' ? 'active-link' : ''} onClick={() => handleLinkClick('Technology')}><b>03</b> TECHNOLOGY</a>
            </li>
          </ul>
        </span>
      </nav>
    )
}
  
export default Navbar