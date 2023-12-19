// src/components/common/Button/Button.js
import React from 'react';
import styles from './Button.module.css'; // Assuming you have a module for styling

const Button = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
