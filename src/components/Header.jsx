import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Skills', to: '/skills' },
        { label: 'Projects', to: '/projects' },
        { label: 'Contact', to: '/contact' },
    ];

    return (
        <>
            <header>
                <div className="container">
                    <nav aria-label="Primary navigation">
                        <Link to="/" className="brand" onClick={closeMenu}>
                            <img src="images/favicon.png" className="logo" alt="Devraj Jaiswal logo" />
                            <span>
                                <strong>Devraj Jaiswal</strong>
                                <small>Full Stack Developer</small>
                            </span>
                        </Link>

                        <ul id="sidemenu" className={isMenuOpen ? 'is-open' : ''}>
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    <NavLink
                                        to={link.to}
                                        onClick={closeMenu}
                                        className={({ isActive }) => isActive ? 'active' : undefined}
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="https://drive.google.com/file/d/1yB37Holtk2cDniZHGEePtkTBCkyk5cc2/view?usp=sharing"
                                    className="resume-link"
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={closeMenu}
                                >
                                    Resume
                                </a>
                            </li>
                            <button
                                type="button"
                                className="menu-control menu-close"
                                aria-label="Close navigation menu"
                                onClick={closeMenu}
                            >
                                <i className="fa fa-solid fa-xmark" aria-hidden="true"></i>
                            </button>
                        </ul>

                        <button
                            type="button"
                            className="menu-control menu-open"
                            aria-label="Open navigation menu"
                            aria-controls="sidemenu"
                            aria-expanded={isMenuOpen}
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <i className="fa fa-solid fa-bars" aria-hidden="true"></i>
                        </button>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
