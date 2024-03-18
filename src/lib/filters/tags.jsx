import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { IconBin, IconSlidersHoriz } from '../icons';
import Text from '../text/text';

import styles from './index.module.css';

/**
 * Tags Component for filtering data based on selected tags.
 * @component
 *
 * @param {Object} props - React component properties
 * @param {Array} props.options - [{value: string || element, value: string || number }]
 * @param {Function} props.onFilter - Callback function to apply tag filter with selected values.
 * @param {Function} props.onReset - Callback function to reset the tag filter.
 *
 * @returns {JSX.Element} React component rendering a tag filter interface.
 */
const Tags = ({ options, onFilter, onReset, colAccessor }) => {
  const [open, setOpen] = useState(false);
  const [checkedValues, setCheckedValues] = useState(false);

  const handleChange = (checkedValues) => {
    setCheckedValues(checkedValues);
  };

  const handleReset = () => {
    setCheckedValues([]);
    setOpen(false);
    onReset();
  };

  const handleApply = () => {
    setOpen(false);
    onFilter(checkedValues);
  };

  return (
    <>
      <button
        className="flex-center"
        onClick={() => setOpen(!open)}
        // data-testid="open-tags-filter"
        data-testid={`open-${colAccessor}-tags-filter`}
      >
        <IconSlidersHoriz />
      </button>
      {open && (
        <div
          className={`flex-col-end gap-sm ${styles['filter-container']}`}
          // data-testid="tags-filter-container"
          data-testid={`${colAccessor}-tags-filter`}
        >
          <div className="w-full">
            <Checkbox.Group
              className="flex-col gap-xs"
              options={options}
              value={checkedValues}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex-between-center">
            <button
              className="flex-center"
              onClick={handleReset}
              data-testid={`reset-${colAccessor}-tags-filter`}
            >
              <IconBin />
            </button>
            <button
              className="flex-center"
              onClick={handleApply}
              data-testid={`apply-${colAccessor}-tags-filter`}
            >
              <Text variant="paragraph-small" style={{ color: 'var(--blue)' }}>
                Apply
              </Text>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Tags;
