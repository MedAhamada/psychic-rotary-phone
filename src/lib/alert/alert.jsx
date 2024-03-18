import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './alert.module.css';
import Text from '../text/text';
import { IconCheckmark, IconCross, IconInfo, IconWarning } from '../icons';

/**
 * Alert component to display messages with different types.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {string} props.type - The type of alert ('success', 'warning', 'danger').
 * @param {string} props.title - The title of the alert.
 * @param {string} props.details - The details or description of the alert.
 * @param {boolean} props.show - Indicates whether the alert should be displayed.
 * @param {function} props.onClose - Callback function to close the alert.
 * @param {string} [props.position] - The position of the alert ('fixed', 'absolute').
 * @returns {JSX.Element}
 */
export const Alert = ({
  type,
  title,
  details,
  show,
  onClose,
  position,
  ...props
}) => {
  useEffect(() => {
    let timeoutId;
    if (show) {
      timeoutId = setTimeout(() => {
        onClose();
      }, 3000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [show, onClose]);

  return (
    show && (
      <div
        className={`${styles['alert-container']} ${styles[`${position}`]}`}
        {...props}
        data-testid={'alert-testid'}
      >
        <div className={styles[`alert-${type}-icon`]}>
          {type === 'success' && <IconCheckmark />}
          {type === 'warning' && <IconInfo />}
          {type === 'danger' && <IconWarning />}
        </div>
        <div>
          <Text variant={'heading-5'}>{title}</Text>
          <Text variant={'paragraph-small'}>{details}</Text>
        </div>
        <button
          className={styles['alert-close-icon']}
          onClick={onClose}
          aria-label="alert close button"
        >
          <IconCross size={14} />
        </button>
      </div>
    )
  );
};

export default Alert;
