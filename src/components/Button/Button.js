import classNames from 'classnames';
import React from 'react';
import styles from './Button.module.css';

export default function Button(props) {
  const {
    onClick,
    variant = '',
    size = 'medium',
    type = 'button',
    children,
  } = props;

  const mainCn = classNames(styles.button, styles[size], styles[variant]);

  return (
    <button type={type} onClick={onClick} className={mainCn}>
      {children}
    </button>
  );
}
