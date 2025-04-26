import React, { useState } from "react";
import styles from './Menu.module.css';
import SubMenu from '../Components/SubMenu';

function MenuItem ({ title, children }) {
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

export default MenuItem;