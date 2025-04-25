import React, { useState } from "react";
import styles from './Menu.module.css';
import logo from '../assets/logo-circle.png';

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

const MenuItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  if (children) {
    return (
      <SubMenu title={title} isOpen={isOpen} onToggle={toggleSubMenu}>
        {children}
      </SubMenu>
    );
  }

  return (
    <div className={styles.menuItem}>
      <span>{title}</span>
    </div>
  );
};

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <MenuItem title="Portfolio" >
        <MenuItem title="Paintings" />
        <MenuItem title="Drawings" />
      </MenuItem>
      <MenuItem title="About" />
    </div>
  );
};

export default Menu;