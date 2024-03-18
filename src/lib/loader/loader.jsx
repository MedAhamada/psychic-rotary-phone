import React from 'react';
import styles from './loader.module.css';
import PropTypes from 'prop-types';

export const Loader = ({ variant, size }) => {
  if (variant === 'border-top') {
    return (
      <div data-testid={'border-top-loader'}>
        <div className={styles['border-top-loader']}></div>
      </div>
    );
  }
  if (variant === 'dots') {
    return (
      <div className={styles['dots-loader']} data-testid={'dots-loader'}>
        <div className={styles['dot1']} data-testid={'dot1'}></div>
        <div className={styles['dot2']} data-testid={'dot2'}></div>
        <div className={styles['dot3']} data-testid={'dot3'}></div>
      </div>
    );
  }
  return (
    <div data-testid={'default-loader'}>
      <div
        className={styles['default-loader']}
        style={{ width: size, height: size }}
      ></div>
    </div>
  );
};

Loader.propTypes = {
  variant: PropTypes.oneOf(['border-top', 'dots']),
  size: PropTypes.number,
};
