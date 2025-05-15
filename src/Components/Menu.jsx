import React, { useState } from "react";
import styles from './Menu.module.css';
import logo from '../assets/logo-circle.png';
import logoSmile from '../assets/logo-circle-smile.png';
import instagram from '../assets/instagram.png';
import { NavLink } from 'react-router-dom';
import MenuItem from '../Components/MenuItem';

import '@fontsource/vt323';

function Menu() {
  const [isHovered, setIsHovered] = useState(false);

  const getLinkClass = ({ isActive }) =>
    `${styles.link} ${isActive ? styles.activeLink : ''}`;

  return (
    <div className={styles.menu}>

      <div className={styles.logo}>
        <NavLink to='/'>
          <img
            src={isHovered ? logoSmile : logo}
            alt="Logo"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </NavLink>     
      </div>

      <MenuItem title="Portfolio" >
        <MenuItem title="Paintings">          
          <NavLink to='paintings_2024' className={getLinkClass}>
            <MenuItem title='2024' />
          </NavLink>          
          <NavLink to='paintings_2025' className={getLinkClass}>
            <MenuItem title='2025' />
          </NavLink>
        </MenuItem>
        
        <MenuItem title="Drawings">          
          <NavLink to='drawings_2024' className={getLinkClass}>
            <MenuItem title='2024' />
          </NavLink>          
          <NavLink to='drawings_2025' className={getLinkClass}>
            <MenuItem title='2025' />
          </NavLink>
        </MenuItem>
      </MenuItem>
      
      <NavLink to='/about' className={getLinkClass}>
        <MenuItem title="About" />
      </NavLink>

      <div className={styles.bottomIcon}>
        <NavLink
          to='https://www.instagram.com/jonasdrawscats'
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt='Instagram' className={styles.instagram} />
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
