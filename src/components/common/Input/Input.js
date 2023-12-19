// src/components/common/Input/Input.js
import React from 'react';
import styles from './Input.module.css'; // Assuming you have a module for styling

const Input = ({ placeholder, onChange, value }) => {
  return <input className={styles.input} placeholder={placeholder} onChange={onChange} value={value} />;
};

export default Input;
