import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Text from '../text/text';
import styles from './input.module.css';
import Label from '../label/label';

/**
 * @param {Object} props The props of the component
 * @param {string} props.label
 * @param {number} props.limit
 * @param {boolean} props.required
 * @param {string} props.placeholder
 * @param {string} props.labelInfo
 * @param {function} props.onInserted
 * @return {JSX.Element}
 * @example
 * <ListInput
 *    label={'Lorem ipsum'}
 *    labelInfo={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
 *    placeholder={'Lorem ipsum dolor'}
 *    required={true}
 *    limit={20}
 *    onInserted={(list) => console.log(list)}
 * />
 */
const ListInput = ({
  label,
  labelInfo,
  limit,
  required,
  placeholder,
  onInserted,
  defaultItems,
  error,
  ...props
}) => {
  const [items, setItems] = useState(defaultItems || []);
  const [item, setItem] = useState('');
  const [pasted, setPasted] = useState(false);

  const pushLink = () => {
    if (item) {
      const newItems = [...items, item];
      setItems(newItems);
      onInserted(newItems);
      setItem('');
    }
  };

  const handlePushLink = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      pushLink();
    } else if (e.key === 'Backspace' && !item && items.length > 0) {
      const poppedItem = items.pop() || '';
      setItem(poppedItem);
      setItems([...items]);
      onInserted([...items]);
    }
  };

  const handlePaste = (event) => {
    setPasted(true);
    const clipboardData = event.clipboardData || window.Clipboard;
    const pastedText = item + clipboardData.getData('text/plain');
    const lines = pastedText.split('\n').filter((line) => line.trim() !== '');
    const newItems = [...items, ...lines].slice(0, limit);
    setItems(newItems);
    onInserted(newItems);
  };

  const handleChange = (e) => {
    if (pasted) {
      setItem('');
      setPasted(false);
    } else {
      setItem(e.target.value);
    }
  };

  const handleInputChange = (index, newValue) => {
    const updatedItems = [...items];
    updatedItems[index] = newValue;
    const filteredItems = updatedItems.filter((item) => item !== '');
    setItems(filteredItems);
    onInserted(filteredItems);
  };

  return (
    <div>
      {label && <Label label={label} required={true} info={labelInfo} />}
      <div
        className={`${styles['input-element']} ${styles['list-input-container']}`}
      >
        <ol className={styles['list-input']}>
          {items.slice(0, limit).map((item, index) => (
            <li key={index} className={styles['item-input']}>
              <input
                type="text"
                value={item}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            </li>
          ))}
          {items.length < limit && (
            <li className={styles['item-input']}>
              <input
                type="text"
                value={item}
                placeholder={placeholder}
                onPaste={handlePaste}
                onChange={handleChange}
                onKeyDown={handlePushLink}
                onBlur={pushLink}
                {...props}
              />
            </li>
          )}
        </ol>
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

ListInput.propTypes = {
  label: PropTypes.string,
  labelInfo: PropTypes.string,
  limit: PropTypes.number,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  onInserted: PropTypes.func,
  defaultItems: PropTypes.array,
  error: PropTypes.string,
};

export default ListInput;
