import React from 'react';
import styles from './progressbar.module.css';

const Progressbar = ({ percentage }) => {
  const _percentage = percentage > 100 ? 100 : percentage;
  return (
    <div
      className={
        styles[`gradient-progressbar-${percentage > 100 ? 'dark' : 'light'}`]
      }
    >
      <div
        className={styles['gradient-progressbar-empty']}
        style={{ width: `${100 - _percentage}%` }}
      ></div>
    </div>
  );
};

export default Progressbar;
