import React from 'react';
import PropTypes from 'prop-types';
import styles from './switch.module.css';
import Text from '../text/text';

/**
 * @param  props  - Initialy extands checkbox attributes
 */
export const Switch = ({ ...props }) => {
  return (
    <>
      <label className={styles['switch-toggle']}>
        <input type="checkbox" {...props} />
        <span className={styles['switch-control']}></span>
      </label>
      {/* <AntSwitch /> */}
    </>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
};

export default Switch;

export const TabsSwitch = ({ variant, tabs, activeTab, onSwitch }) => {
  return (
    <div className={`flex gap-sm ${variant !== 'separated' && styles['tabs']}`}>
      {tabs.map((tab) => (
        <div
          key={tab.key}
          className={`${
            variant !== 'separated' ? styles['tab'] : styles['tab-separated']
          } ${tab.key === activeTab ? styles['active'] : ''}`}
          onClick={() => onSwitch(tab.key)}
        >
          <Text variant={'paragraph-small'}>{tab.label}</Text>
        </div>
      ))}
    </div>
  );
};
