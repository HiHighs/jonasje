import React, { useState } from "react";
import styles from './Menu.module.css';
import logo from '../assets/logo-circle.png';
import logoSmile from '../assets/logo-circle-smile.png';
import instagram from '../assets/instagram.png'
import { NavLink } from 'react-router-dom';
import MenuItem from '../Components/MenuItem';


import '@fontsource/vt323';

function Menu() {
  const [isHovered, setIsHovered] = useState(false);

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
        <MenuItem title="Paintings" />
        <MenuItem title="Drawings" />
      </MenuItem>
      
      <NavLink to='/about' className={styles.link}>
        <MenuItem title="About" />
      </NavLink>

      {/* <NavLink to='www.google.com'>
        <img src={instagram} alt='Instagram' className={styles.instagram}/>
      </NavLink> */}

      <div className={styles.bottomIcon}>
        <NavLink to='https://www.instagram.com/jonasdrawscats' target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt='Instagram' className={styles.instagram} />
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;