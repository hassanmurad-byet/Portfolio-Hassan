import React, { useState } from 'react';
import './navbar.css';
// import logo from '../../assets/H1.png';
import { Link } from 'react-scroll';
// import { NavLink } from 'react-router-dom';

import contactImg from '../../assets/contact.png';
import menu from '../../assets/menus.png';
const Navbar = () => {
   
    const [showMenu, setShowMenu] = useState(false);

    const navToggle = () => {
        setShowMenu(!showMenu);  // Toggle the menu visibility
    };

    return (
        <nav className="navbar">

            {/* <img src={logo} alt='Logo' className='logo' /> */}
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="destopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="destopMenuListItem">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="destopMenuListItem">Portfolio</Link>
                <Link activeClass='active' to='blog' spy={true} smooth={true} offset={-50} duration={500} className="destopMenuListItem">Blog</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-70} duration={500} className="destopMenuListItem">Clients</Link>

            </div>

            <button className="desktopMenubtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }} >

             <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>

               

       
             <div className="navbar2">
            <img src={menu} alt='Menu' className='modMenu' onClick={navToggle} />
            <div className={`navMenu ${showMenu ? 'show' : ''}`}> {/* Toggle the 'show' class */}
                <img src={menu} alt='Menu' className='modMenus' onClick={navToggle} />
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='blog' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Blog</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-70} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Clients</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-60} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </div>
   




        </nav>
    )
}

export default Navbar;