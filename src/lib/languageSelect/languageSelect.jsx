import React, { Fragment, useEffect, useState } from 'react';
import styles from './languageSelect.module.css';
import PropTypes from 'prop-types';
import { IconChevronDown, IconFlagES, IconFlagFR, IconFlagUK } from '../icons';
import Label from '../label/label';

/**
 * A language dropdown component.
 *
 */
export const LanguageSelect = ({ onSelect, ...props }) => {
  const list = [
    { icon: <IconFlagFR />, name: 'Français', value: 'fr' },
    { icon: <IconFlagUK />, name: 'Anglais', value: 'en' },
    { icon: <IconFlagES />, name: 'Espagnol', value: 'es' },
    /*
    { icon: <IconFlagIT />, name: 'Allemand', value: 'allemand' },
*/
  ];

  const [showDropdown, setShowDropdown] = useState(false);
  const [activeItems, setActiveItems] = useState([]);

  const handleItemClick = (value) => {
    if (activeItems.includes(value)) {
      setActiveItems(activeItems.filter((item) => item !== value));
    } else {
      setActiveItems([...activeItems, value]);
    }
  };

  const handleArrowButtonClick = (event) => {
    event.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    onSelect(activeItems);
  }, [activeItems, onSelect]);

  return (
    <div>
      {props.label && <Label label={props.label} />}
      <div
        className={styles['language-dropdown-container']}
        style={{ width: '100%' }}
      >
        {list.map((item) => {
          const isActive = activeItems.includes(item.value);

          if (item.value === 'fr') {
            return (
              <button
                className={`${styles['language-dropdown-button']} ${
                  isActive && styles['active']
                }`}
                type="button"
                key={item.name}
                onClick={() => handleItemClick(item.value)}
              >
                <div className={styles['language-dropdown-info']}>
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                <span
                  onClick={handleArrowButtonClick}
                  onKeyDown={(e) => {
                    console.log(e);
                  }}
                  className={styles['language-dropdown-arrow']}
                >
                  <IconChevronDown
                    size={8}
                    style={{ right: '45%', position: 'absolute' }}
                  />
                </span>
              </button>
            );
          }

          return (
            <Fragment key={item.name}>
              {showDropdown && (
                <button
                  className={`${styles['language-dropdown-button']} ${
                    isActive && styles['active']
                  }`}
                  type="button"
                  onClick={() => handleItemClick(item.value)}
                >
                  <span className={styles['language-dropdown-info']}>
                    {item.icon}
                    <span>{item.name}</span>
                  </span>
                </button>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

LanguageSelect.propTypes = {
  onSelect: PropTypes.func,
};

export default LanguageSelect;
