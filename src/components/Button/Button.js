import classNames from 'classnames';
import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'square', 'link']),
  size: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
