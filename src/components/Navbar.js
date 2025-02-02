import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">DSTI</h1>
            <ul className="nav-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
