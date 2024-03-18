import React, { useEffect, useRef, useState } from 'react';
import { ButtonDropdown } from '../button/button';
import { Checkbox, Radio, Space, Dropdown as AntDropdown, Select } from 'antd';
import PropTypes from 'prop-types';
import styles from './dropdown.module.css';
import Text from '../text/text';
import Label from '../label/label';
import { IconChevronDown } from '../icons';
import { Loader } from '../loader/loader';

/**
 * Radio Dropdown
 * @param  options    - Array: [{ name: string | number, value: string | number }]
 * @param  label      - string
 * @param  value      - Selected item
 * @param  onChange   - Callback
 * @param  error      - string
 * @param  required   - bool
 * @param  name       - string
 * @param  placeholder - string
 * @param  width      - If not set, 100% by default
 */
export const RadioDropdown = ({
  name,
  options,
  label,
  placeholder,
  width,
  onChange,
  error,
  required,
  labelInfo,
  value,
  ...props
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [valueOption, setValueOption] = useState(); // onlu for story book test
  const [buttonText, setButtonText] = useState(null);
  const errorClass = error ? 'error-field' : '';
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const handleChange = (e) => {
    setValueOption(e.target.value);
    onChange(e);
  };

  const handleBlurMenu = (event) => {
    if (
      menuRef.current &&
      menuButtonRef.current &&
      !menuRef.current.contains(event.target) &&
      !menuButtonRef.current.contains(event.target)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleBlurMenu);
  }, []);

  return (
    <div style={{ width }}>
      <div className={'dropdown-container'}>
        {label && <Label label={label} required={required} info={labelInfo} />}
        <span ref={menuButtonRef}>
          <ButtonDropdown
            placeholder={placeholder}
            text={buttonText ? buttonText : value}
            onClick={(e) => {
              e.preventDefault();
              setShowDropdown(!showDropdown);
            }}
            open={showDropdown}
            className={errorClass}
            {...props}
          />
        </span>
      </div>
      {showDropdown && (
        <div className={styles['radio-dropdown']} ref={menuRef}>
          <div className={styles['radio-dropdown-options']}>
            <Radio.Group
              defaultValue={value}
              onChange={handleChange}
              className="w-full"
            >
              <Space direction="vertical" className="w-full">
                {options.map((option, index) => (
                  <Radio
                    name={name}
                    key={index}
                    value={option.value}
                    className={`${styles['dropdown-radio-item']} ${
                      option.value === valueOption && styles['checked']
                    }`}
                    onChange={() => setButtonText(option.label)}
                  >
                    {option.label}
                  </Radio>
                ))}
              </Space>
            </Radio.Group>
          </div>
        </div>
      )}
      {error && (
        <Text variant={'paragraph-tiny'} className={'error-field-text'}>
          {error}
        </Text>
      )}
    </div>
  );
};
RadioDropdown.propTypes = {};

/**
 * Checkbox Dropdown
 * @param name
 * @param  options    - Array: [{ name: string | number, value: string | number }]
 * @param  label      - string
 * @param  value      - Selected items
 * @param  onChange   - Callback
 * @param  width      - If not set, 100% by default
 * @param props
 */
export const CheckboxDropdown = ({
  name,
  error,
  options,
  label,
  onChange,
  value,
  width,
  required,
  placeholder,
  labelInfo,
  displayLabel,
  ...props
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const errorClass = error ? 'error-field' : '';
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const handleBlurMenu = (event) => {
    if (
      menuRef.current &&
      menuButtonRef.current &&
      !menuRef.current.contains(event.target) &&
      !menuButtonRef.current.contains(event.target)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleBlurMenu);
    return () => {
      document.removeEventListener('click', handleBlurMenu);
    };
  }, []);

  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <div style={{ width }}>
      {label && <Label label={label} required={required} info={labelInfo} />}
      <div className="" ref={menuButtonRef}>
        <ButtonDropdown
          placeholder={placeholder}
          text={
            value.length && displayLabel ? (
              <div className="flex-y-center gap-sm">
                {value.map(
                  (val) => options.find((opt) => opt.value === val).label
                )}
              </div>
            ) : (
              value.join(', ')
            )
          }
          onClick={(e) => {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }}
          open={showDropdown}
          className={errorClass}
          data-testid={props['data-testid'] || 'checkbox-dropdown'}
        />
      </div>
      {showDropdown && (
        <div className={styles['radio-dropdown']}>
          <div className={styles['radio-dropdown-options']}>
            <Checkbox.Group
              className="w-full"
              onChange={handleChange}
              value={value}
              {...props}
              ref={menuRef}
            >
              <Space direction="vertical" className="w-full">
                {options.map((option, index) => (
                  <Checkbox
                    name={name}
                    key={index}
                    value={option.value}
                    className={`${
                      styles['dropdown-radio-item']
                    } flex-y-center ${
                      value.includes(option.value) && styles['checked']
                    }`}
                    checked={true}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </Checkbox>
                ))}
              </Space>
            </Checkbox.Group>
          </div>
        </div>
      )}
      <div>
        {error && (
          <Text
            variant={'paragraph-tiny'}
            className={'error-field-text text-left'}
          >
            {error}
          </Text>
        )}
      </div>
    </div>
  );
};
CheckboxDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  width: PropTypes.string,
};

export default CheckboxDropdown;

/**
 * Dropdown
 * @param name
 * @param  items    - Array: [{ name: string | number, value: string | number }]
 * @param  label      - string
 * @param  value      - Selected items
 * @param  onChange   - Callback
 * @param  width      - If not set, 100% by default
 * @param props
 */
export const Dropdown = ({
  name,
  items,
  label = '',
  onChange,
  width,
  required,
  value,
  error,
  labelInfo,
  buttonClassName,
  hoverPrimary,
  ...props
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (key) => {
    onChange(key);
    setShowDropdown(false);
  };

  const _items = items.map(({ label, key, disabled }) => {
    return {
      label: (
        <button
          className={`w-full px-sm py-sm btn-dropdown-item`}
          onClick={() => handleChange(key)}
          data-testid={`dropdown-item-${key}`}
          disabled={disabled}
        >
          {label}
        </button>
      ),
      key: key,
    };
  });

  return (
    <div style={{ width }}>
      {label && <Label label={label} required={required} info={labelInfo} />}
      <AntDropdown
        menu={{
          items: _items,
          className: styles['radio-dropdown-options'],
        }}
        trigger={['click']}
        open={showDropdown}
        onOpenChange={() => setShowDropdown(!showDropdown)}
        overlayClassName={hoverPrimary ? 'hover-primary' : ''}
      >
        <ButtonDropdown
          placeholder={label}
          text={value}
          onClick={(e) => {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }}
          open={showDropdown}
          style={{ border: error && '1px solid var(--red)' }}
          className={buttonClassName}
          {...props}
        />
      </AntDropdown>
      <div>
        {error && (
          <Text
            variant={'paragraph-tiny'}
            className={'error-field-text text-left'}
          >
            {error}
          </Text>
        )}
      </div>
    </div>
  );
};
Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  width: PropTypes.string,
};

/**
 * Dropdown
 * @param name
 * @param  items    - Array: [{ name: string | number, value: string | number }]
 * @param  label      - string
 * @param  value      - Selected items
 * @param  onChange   - Callback
 * @param  width      - If not set, 100% by default
 * @param required
 * @param error
 * @param props
 */
export const DropdownSearch = ({
  name,
  items,
  label,
  onChange,
  value,
  width,
  required,
  error,
  labelInfo,
  ...props
}) => {
  const handleChange = (item) => {
    onChange(item);
  };

  return (
    <div style={{ width }}>
      {label && <Label label={label} required={required} info={labelInfo} />}
      <Select
        showSearch
        placeholder={label}
        data-testid={label}
        className={styles['select-dropdown-antd']}
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option?.label.toLowerCase() ?? '').includes(input.toLowerCase())
        }
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '')
            .toLowerCase()
            .localeCompare((optionB?.label ?? '').toLowerCase())
        }
        options={items}
        suffixIcon={
          <>
            {items.length === 0 && <Loader size={24} />}
            <IconChevronDown size={8} style={{ color: 'var(--dark)' }} />
          </>
        }
        value={value || undefined}
        onChange={handleChange}
        {...props}
      />
      <div>
        {error && (
          <Text
            variant={'paragraph-tiny'}
            className={'error-field-text text-left'}
          >
            {error}
          </Text>
        )}
      </div>
    </div>
  );
};
DropdownSearch.propTypes = {
  items: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  width: PropTypes.string,
};
