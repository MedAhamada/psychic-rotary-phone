import React from 'react';
import styles from './label.module.css';
import Text from '../text/text';
import { Popover } from 'antd';
import { IconInfo } from '../icons';

export const Label = ({ label, required, info, className, ...props }) => {
  return (
    <div className={styles['input-label']}>
      <Text variant={'heading-6'}>{label}</Text>
      {required && <span className={styles['asterisk-input']}>*</span>}
      {info && (
        <Popover placement="top" content={info}>
          <IconInfo size={16} />
        </Popover>
      )}
    </div>
  );
};

export default Label;
