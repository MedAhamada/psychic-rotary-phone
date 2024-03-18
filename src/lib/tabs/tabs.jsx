import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './tabs.module.css'; // You can create a CSS file for styling
import Text from '../text/text';

export const Tabs = ({ variant, tabs, right, left }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="flex-y-center gap-lg">
        {left && (
          <div className="pr-lg" style={{ borderRight: '1px solid lightgray' }}>
            {left}
          </div>
        )}
        <div
          className={`flex gap-sm ${variant !== 'separated' && styles['tabs']}`}
        >
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`${
                variant !== 'separated'
                  ? styles['tab']
                  : styles['tab-separated']
              } ${index === activeTab ? styles['active'] : ''}`}
              onClick={() => handleTabClick(index)}
            >
              <Text
                variant={
                  index === activeTab && !variant
                    ? 'heading-5'
                    : 'paragraph-small'
                }
              >
                {tab.label}
              </Text>
            </div>
          ))}
        </div>
        {right && (
          <div className="pl-lg" style={{ borderLeft: '1px solid lightgray' }}>
            {right}
          </div>
        )}
      </div>
      <div className={styles['tab-content']}>{tabs[activeTab].content}</div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ),
};

export default Tabs;
