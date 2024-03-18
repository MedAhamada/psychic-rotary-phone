import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './dropdown.module.css';
import { IconDots } from '../icons';
import Text from '../text/text';

/**
 * @param open
 * @param onClose
 * @param onOpenChange
 * @param triggerer
 * @param  options    - Array: [{ name: string | number, value: string | number }]
 * @param  placement    - default : left
 * @param  className
 * @param props
 */
export const DropdownActions = ({
  open,
  onClose,
  onOpenChange,
  triggerer,
  options,
  placement = 'left',
  className = '',
  ...props
}) => {
  const btnRef = useRef(null);
  const contentRef = useRef(null);

  const handleBlurMenu = (event) => {
    if (
      contentRef.current &&
      btnRef.current &&
      !contentRef.current.contains(event.target) &&
      !btnRef.current.contains(event.target)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleBlurMenu);
    return () => {
      document.removeEventListener('click', handleBlurMenu);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let placementStyle = { right: 0 };
  if (placement === 'right') {
    placementStyle = { left: 0 };
  } else if (placement === 'center') {
    placementStyle = {
      left: '50%',
      transform: 'translateX(-50%)',
    };
  }

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onOpenChange();
        }}
        ref={btnRef}
        className={`flex-center ${className}`}
        {...props}
      >
        {triggerer || <IconDots size={22} />}
      </button>
      {open && (
        <div
          className={styles['dropdown-action-container']}
          ref={contentRef}
          style={placementStyle}
        >
          {options.map((option) => (
            <button
              key={option.title}
              className={styles['dropdown-menu-option']}
              onClick={option.action}
            >
              {option.icon}
              <Text variant={'paragraph-small'}>{option.title}</Text>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

DropdownActions.propTypes = {
  options: PropTypes.array,
  placement: PropTypes.oneOf(['left', 'center', 'right']),
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onOpenChange: PropTypes.func,
  triggerer: PropTypes.any,
  className: PropTypes.string,
};

export default DropdownActions;
