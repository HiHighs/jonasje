import React from "react";
import styles from './Menu.module.css';

function SubMenu ({ title, children, isOpen, onToggle }) {
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

  export default SubMenu;