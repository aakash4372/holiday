// Header.js
import React, { useState } from 'react';
import '../style/Header.css';
import logo from '../assets/logo.png'; // Adjust path as needed

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="site-header">
      <div className="header-wrapper">
        {/* Logo */}
        <div className="brand-logo">
          <img src={logo} alt="Site Logo" height={100} className="logo-image" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>

        {/* Navigation */}
        <nav className={`navigation ${isMenuVisible ? 'show-mobile' : ''}`}>
          <ul className="nav-items">
          <li><a href="#" style={{ color: 'red' }}></a></li>
            <li><a href="#" style={{ color: 'red' }}>Home</a></li>
            <li><a href="#" style={{ color: 'red' }}>About</a></li>
            <li><a href="#" style={{ color: 'red' }}>Services</a></li>
            <li><a href="#" style={{ color: 'red' }}>Testimonials</a></li>
            <li><a href="#" style={{ color: 'red' }}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;