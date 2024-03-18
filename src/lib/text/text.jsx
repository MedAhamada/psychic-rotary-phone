import React from 'react';
import styles from './text.module.css';
import PropTypes from 'prop-types';

/**
 * @param {string} variant - Valid values: 'heading-1', 'heading-2', 'heading-3', 'heading-4', 'heading-5', 'heading-6', 'paragraph-big', 'paragraph-medium', 'paragraph-small', 'paragraph-tiny', 'cta', or 'link'.
 * @param {string} align - Valid values: 'left', 'center', 'right'
 */

export const Text = ({ children, variant, align, className, ...props }) => {
  return (
    <p
      className={` ${styles['text']} ${styles[variant]} ${
        align ? styles[`text-${align}`] : ''
      } ${className ? className : ''}`}
      {...props}
    >
      {children ? children : null}
    </p>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    'heading-1',
    'heading-2',
    'heading-3',
    'heading-4',
    'heading-5',
    'heading-6',
    'paragraph-big',
    'paragraph-medium',
    'paragraph-small',
    'paragraph-tiny',
    'cta',
    'link',
  ]),
};

export default Text;
