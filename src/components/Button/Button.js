import React from 'react';
import styles from './Button.module.css';

export default function Button({
  onClick,
  variant = '',
  size = 'medium',
  type = 'button',
  children,
}) {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
