import React, { useState } from "react";
import styles from './Menu.module.css';
import logo from '../assets/logo-circle.png';
import { NavLink } from 'react-router-dom';
import MenuItem from '../Components/MenuItem';


import '@fontsource/vt323';

const SubMenu = ({ title, children, isOpen, onToggle }) => {
    return (
      <div>
        <div className={styles.menuItem} onClick={onToggle}>
          <span>{title}</span>
        </div>
        <div className={`${styles.subMenu} ${isOpen ? styles.open : ''}`}>
          {children}
        </div>
      </div>
    );
  };

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.logo}>
        <NavLink to='/'>
          <img src={logo} alt="Logo" />
        </NavLink>        
      </div>
      <MenuItem title="Portfolio" >
        <MenuItem title="Paintings" />
        <MenuItem title="Drawings" />
      </MenuItem>
      
      <NavLink to='/about' className={styles.link}>
        <MenuItem title="About" />
      </NavLink>   
    </div>
  );
};

export default Menu;