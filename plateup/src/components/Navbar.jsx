import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars, faTimes, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/Navbar.scss';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo-box">
          <img src="Img/provitalLogo.png" alt="Logo" className="navbar__logo" />
        </div>
        <span className="navbar__name">ProVital</span>
      </div>
      
      <ul className="navbar__menu">
        <li className="navbar__item"><a href="/practice">List your Practice</a></li>
        <li className="navbar__item"><a href="/employers">For Employers</a></li>
        <li className="navbar__item"><a href="/courses">Courses</a></li>
        <li className="navbar__item"><a href="/books">Books</a></li>
        <li className="navbar__item"><a href="/speakers">Speakers</a></li>
        <li className="navbar__item"><a href="/doctors">Doctors</a></li>
        <li className="navbar__item navbar__dropdown" onClick={toggleDropdown}>
          <span>Login/Signup</span>
          <FontAwesomeIcon icon={faChevronDown} className="navbar__dropdown-icon" />
          {isDropdownOpen && (
            <ul className="navbar__dropdown-menu">
              <li className="navbar__dropdown-row">
                <a href="/doctor">Doctor</a>
                <a href="/login" className="navbar__dropdown-link--signup">Login</a>
                <a href="/signup" className="navbar__dropdown-link--signup">Signup</a>
              </li>
              <li className="navbar__dropdown-divider"></li>
              <li className="navbar__dropdown-row">
                <a href="/patients">Patients</a>
                <a href="/login" className="navbar__dropdown-link--signup">Login</a>
                <a href="/signup" className="navbar__dropdown-link--signup">Signup</a>
              </li>
            </ul>
                )}
                </li>
              </ul>

      {/* Mobile Menu Button */}
      <div className="navbar__mobile-menu" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className={`navbar__mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="navbar__drawer-header">
            <div className="navbar__logo-box">
              <img src="Img/provitalLogo.png" alt="Logo" className="navbar__logo" />
            </div>
            <div className="navbar__drawer-close" onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <div className="navbar__login-signup-box">
            
            <div className="navbar__login-signup-row">
              <span>Doctor</span>
              <div className="navbar__login-signup-links">
        
                <a href="/login">Login</a>
                <a href="/signup">Signup</a>
              </div>
            </div>
            <div className="navbar__divider"></div>
            <div className="navbar__login-signup-row">
              <span>Patient</span>
              <div className="navbar__login-signup-links">
            
                <a href="/login">Login</a>
                <a href="/signup">Signup</a>
              </div>
            </div>
          </div>
          <ul className="navbar__drawer-menu">
            <li><a href="/practice">List your Practice <FontAwesomeIcon icon={faChevronRight} className="navbar__arrow-icon" /></a></li>
            <li><a href="/employers">For Employers <FontAwesomeIcon icon={faChevronRight} className="navbar__arrow-icon" /></a></li>
            <li><a href="/courses">Courses <FontAwesomeIcon icon={faChevronRight} className="navbar__arrow-icon" /></a></li>
            <li><a href="/books">Books <FontAwesomeIcon icon={faChevronRight} className="navbar__arrow-icon" /></a></li>
            <li><a href="/speakers">Speakers <FontAwesomeIcon icon={faChevronRight} className="navbar__arrow-icon" /></a></li>
            <li><a href="/doctors">Doctors <FontAwesomeIcon icon={faChevronRight} className="navbar__arrow-icon" /></a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;