import React, { useState } from 'react';
import { Radio, Space } from 'antd';
import styles from './radioGroup.module.css';
import PropTypes from 'prop-types';
export const RadioGroup = ({
  name,
  defaultValue,
  options,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e);
  };

  return (
    <Radio.Group onChange={handleChange} value={value} className="w-full">
      <Space direction="horizontal" className="w-full">
        {options.map((option, index) => (
          <Radio
            data-testid={option.dataTestId}
            name={name}
            key={index}
            value={option.value}
            className={`${styles['radio-item']} ${
              option.value == value && styles['checked']
            }`}
          >
            {option.label}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioGroup;
