import React from 'react';
import PropTypes from 'prop-types';
import styles from './badge.module.css';
import Text from '../text/text';

/**
 * *Parent has to be position:relative to apply center
 * @param {*} props
 * @param {*} variant   - green | yellow | red | grey | blue-light | blue | blue-dark | dark | orange-light | orange | orange-dark
 * @param {*} text      - string
 * @param {*} size      - large | small
 * @param {*} className - string
 */
export const Badge = ({
  variant,
  text,
  size = 'small',
  className,
  ...props
}) => {
  return (
    <div
      className={`
        ${styles[`badge`]}
        ${styles[`badge-${variant}`]}
        ${className}
      `}
      style={{ padding: size === 'large' && '4px 8px' }}
      {...props}
    >
      <Text variant={'heading-6'}>{text}</Text>
    </div>
  );
};

Badge.propTypes = {
  variant: PropTypes.oneOf([
    'green',
    'yellow',
    'red',
    'grey',
    'blue-light',
    'blue',
    'blue-dark',
    'dark',
    'orange-light',
    'orange',
    'orange-dark',
    'yellow-light',
  ]).isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['large', 'small']),
};

export default Badge;
