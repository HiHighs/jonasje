import React, { useState } from "react";
import styles from './Menu.module.css';
import logo from '../assets/logo-circle.png';
import logoSmile from '../assets/logo-circle-smile.png';
import instagram from '../assets/instagram.png';
import { NavLink } from 'react-router-dom';
import MenuItem from '../Components/MenuItem';
import { GiHamburgerMenu } from 'react-icons/gi'; // install with: npm install react-icons

import '@fontsource/vt323';

function Menu() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClass = ({ isActive }) =>
    `${styles.link} ${isActive ? styles.activeLink : ''}`;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <>
      <div className={styles.mobileHeader}>
        <img src={logo} alt="Logo"/>
        {/* Hamburger icon for mobile */}
        <div className={styles.hamburgerWrapper}>
          <GiHamburgerMenu className={styles.hamburger} onClick={toggleMobileMenu} />
        </div>
      </div>

      {/* Sidebar menu (desktop + mobile overlay) */}
      <div
        className={`${styles.menu} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}
      >
        <div className={styles.logo}>
          <NavLink to='/' onClick={() => setIsMobileMenuOpen(false)}>
            <img
              src={isHovered ? logoSmile : logo}
              alt="Logo"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </NavLink>
        </div>

        <MenuItem title="Portfolio">
          <MenuItem title="Paintings">
            <NavLink to='paintings_2024' className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
              <MenuItem title='2024' />
            </NavLink>
            <NavLink to='paintings_2025' className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
              <MenuItem title='2025' />
            </NavLink>
          </MenuItem>

          <MenuItem title="Drawings">
            <NavLink to='drawings_2024' className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
              <MenuItem title='2024' />
            </NavLink>
            <NavLink to='drawings_2025' className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
              <MenuItem title='2025' />
            </NavLink>
          </MenuItem>
        </MenuItem>

        <NavLink to='/about' className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
          <MenuItem title="About" />
        </NavLink>

        <div className={styles.bottomIcon}>
          <NavLink
            to='https://www.instagram.com/jonasdrawscats'
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img src={instagram} alt='Instagram' className={styles.instagram} />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Menu;
