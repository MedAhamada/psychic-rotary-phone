import React from 'react';
import PropTypes from 'prop-types';
import Text from '../text/text';
import styles from './button.module.css';
import { IconChevronDown, IconChevronUp } from '../icons';

/**
 * All different kind of button options
 *
 * @type {Object}
 */

/**
 * DEFAULT
 * The primary button
 *
 * @param  {string}    text        - text
 * @param  {string}    variant     - primary | secondary | yellow | danger | icon | link
 * @param  {string}    size        - large | small
 * @param  {boolean}   disabled    - true | false
 * @param  {Object}    icon        - SVG icon
 * @param  {boolean}   width       - full | fit
 * @param  {string}   className
 * @param props
 */

export const Button = ({
  text = '',
  variant = 'primary',
  size = '',
  icon,
  disabled,
  width = 'fit',
  className = '',
  ...props
}) => {
  let buttonClass = `${styles['button']} ${styles[`button-${variant}`]} ${
    width ? styles[`width-${width}`] : ''
  } `;

  if (variant === 'primary' || variant === 'secondary') {
    buttonClass += `${size ? styles[`button-${size}`] : ''}`;
  }

  return (
    <button
      {...props}
      className={`${buttonClass} ${className}`}
      disabled={disabled}
    >
      {icon && variant !== 'danger' ? icon : null}
      {variant !== 'icon' && text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'yellow',
    'danger',
    'icon',
    'link',
  ]),
  width: PropTypes.oneOf(['full', 'fit']),
  size: PropTypes.oneOf(['large', 'small']),
  disabled: PropTypes.bool,
  icon: PropTypes.node,
};

/**
 * DEFAULT
 * The primary button
 *
 * @param  {string}    text        - text
 * @param  prop    extande all button attributes
 */
export const ButtonDropdown = ({
  text,
  open,
  className,
  placeholder,
  ...props
}) => {
  return (
    <button
      type={'button'}
      {...props}
      className={`${styles['dropdown-button']} ${className}`}
      aria-label="btn dropdown button"
    >
      {!text && placeholder && (
        <Text
          variant={'paragraph-small'}
          className={styles['dropdown-button-placeholder']}
        >
          {placeholder}
        </Text>
      )}
      {text && (
        <Text variant={'paragraph-small'}>
          {text.length > 40 ? `${text.slice(0, 40)}...` : text}
        </Text>
      )}
      {open ? (
        <IconChevronUp
          size={8}
          className={`${styles['arrow-icon']} menu-options-dropdown-icon`}
        />
      ) : (
        <IconChevronDown
          size={8}
          className={`${styles['arrow-icon']} menu-options-dropdown-icon`}
        />
      )}
    </button>
  );
};

ButtonDropdown.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  open: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default Button;
