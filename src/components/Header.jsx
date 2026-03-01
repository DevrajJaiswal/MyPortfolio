import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <span><Link to="/about"><img src="images/favicon.png" className="logo" alt="Logo" /></Link></span>
                        <ul id="sidemenu" style={{ right: isMenuOpen ? '0' : '-200px' }}>
                            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                            <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
                            <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
                            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                            <i className="fa fa-solid fa-xmark" onClick={closeMenu}></i>
                        </ul>
                        <i className="fa fa-solid fa-bars" onClick={openMenu}></i>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
