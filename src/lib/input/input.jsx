import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Text from '../text/text';
import styles from './input.module.css';
import {
  IconChevronDown,
  IconChevronUp,
  IconEmail,
  IconKey,
  IconSearch,
} from '../icons';
import Label from '../label/label';
import { AutoComplete } from 'antd';
import PhoneInput from 'react-phone-input-2';

/**
 * Extands all input props, in addition to our params
 * @param {*} type          - text | email | url | autocomplete
 * @param {*} label         -
 * @param {*} required      - boolean
 * @param error
 * @param icon     - boolean (default: true)
 * @param datalist
 * @param {*} outlined       - boolean
 * @param {*} options       - autocomplete options
 * @param grayed
 * @param props
 */
export const Input = ({
  type,
  label,
  required,
  error,
  icon = true,
  labelInfo,
  datalist,
  options,
  outlined,
  grayed,
  ...props
}) => {
  const inputRef = useRef(null);

  const [openAutoComplete, setOpenAutoComplete] = useState(undefined);

  const errorClass = error ? 'error-field' : '';

  if (type === 'text' || type === 'tel') {
    return (
      <div className={'w-full'}>
        {label && <Label label={label} required={required} info={labelInfo} />}
        <div className={styles['input-container']}>
          <div>
            <input
              type={type}
              className={`${styles['input-element']} ${styles['input-text']} ${errorClass}`}
              required={required}
              style={{
                backgroundColor:
                  (grayed === 'grayish' && 'var(--grayish)') ||
                  (grayed && 'var(--gray-x-light)'),
                border: grayed && 0,
                color: grayed && 'var(--dark)',
              }}
              {...props}
            />
          </div>
        </div>
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
  }

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setOpenAutoComplete(true);
    }
  };

  const handleBlur = () => {
    setOpenAutoComplete(undefined);
  };

  const handleFilterOption = (inputValue, option) => {
    setOpenAutoComplete(undefined);
    return option.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
  };

  if (type === 'autocomplete') {
    return (
      <div style={{ position: 'relative' }}>
        {label && <Label label={label} required={required} info={labelInfo} />}
        <AutoComplete
          options={options}
          open={openAutoComplete}
          ref={inputRef}
          style={{ width: '100%', height: 'auto' }}
          onBlur={handleBlur}
          onFocus={() => setOpenAutoComplete(true)}
          filterOption={(inputValue, option) =>
            handleFilterOption(inputValue, option)
          }
          {...props}
          data-testid={'autocomplete-' + props['data-testid']}
        >
          <input
            type="text"
            className={`${styles['input-element']} ${styles['input-text']} ${errorClass}`}
            data-testid={props['data-testid']}
          />
        </AutoComplete>

        {error && (
          <Text variant={'paragraph-tiny'} className={'error-field-text'}>
            {error}
          </Text>
        )}

        {openAutoComplete ? (
          <IconChevronUp
            size={8}
            className={styles['auto-complete-drop-icon']}
          />
        ) : (
          <IconChevronDown
            size={8}
            className={styles['auto-complete-drop-icon']}
            onClick={focusInput}
          />
        )}
      </div>
    );
  }

  return (
    <div>
      {label && <Label label={label} required={required} info={labelInfo} />}
      <div className={styles['input-container']}>
        <div className={`${styles['input-url-email-container']} ${errorClass}`}>
          {icon && (
            <div
              className={styles['input-side']}
              style={{
                backgroundColor:
                  (outlined && 'transparent') ||
                  (grayed === 'grayish' && 'var(--grayish)') ||
                  (grayed && 'var(--gray-x-light)'),
                border: grayed && 0,
                color: grayed && 'var(--dark)',
              }}
            >
              {type === 'email' && <IconEmail />}
              {type === 'password' && <IconKey />}
              {type === 'search' && <IconSearch />}
              {type === 'url' && (
                <Text variant={'paragraph-small'}>https://</Text>
              )}
            </div>
          )}
          <input
            type={type}
            style={{
              backgroundColor:
                (grayed === 'grayish' && 'var(--grayish)') ||
                (grayed && 'var(--gray-x-light)'),
              border: grayed && 0,
            }}
            className={`${styles['input-element']}
              ${styles['input-url-email']} ${!icon && 'rounded-sm'}
            ${(outlined || grayed) && styles['outlined-input']}`}
            {...props}
          />
        </div>
      </div>
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

export default Input;

export const PhoneNumberInput = ({
  label = '',
  placeholder = '',
  required = false,
  error = null,
  type,
  outlined,
  country = 'fr',
  prefixIcon = null,
  labelInfo,
  grayed,
  value,
  onChange,
  ...props
}) => {
  const errorClass = error ? 'error-field' : '';

  return (
    <div>
      {label && <Label label={label} required={required} info={labelInfo} />}
      <div className={styles['input-container']}>
        <div className={`${styles['input-url-email-container']} ${errorClass}`}>
          {prefixIcon && (
            <div
              className={styles['input-side']}
              style={{
                backgroundColor:
                  (outlined && 'transparent') ||
                  (grayed && 'var(--gray-x-light)'),
                border: grayed && 0,
                color: grayed && 'var(--dark)',
              }}
            >
              {prefixIcon}
            </div>
          )}
          <PhoneInput
            specialLabel=""
            country={country}
            className={`${styles['input-element']} ${styles['input-text']} ${errorClass}`}
            inputStyle={{
              width: '100%',
            }}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            {...props}
          />
        </div>
      </div>
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

Input.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'email',
    'url',
    'autocomplete',
    'password',
    'search',
  ]),
  label: PropTypes.string,
  required: PropTypes.bool,
};

export { default as ListInput } from './ListInput';
