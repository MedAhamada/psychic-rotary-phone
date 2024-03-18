import React, { useState } from 'react';
import Text from '../text/text';
import Input from '../input/input';
import { IconBin, IconSlidersHoriz } from '../icons';

import styles from './index.module.css';

/**
 * Range Component for filtering data based on a numerical range.
 * @component
 *
 * @param {Object} props - React component properties
 * @param {Function} props.onFilter - Callback function to apply range filter with specified minimum and maximum values.
 * @param {Function} props.onReset - Callback function to reset the range filter.
 *
 * @returns {JSX.Element} React component rendering a numerical range filter interface.
 */
const Range = ({ onFilter, onReset, colAccessor }) => {
  const [open, setOpen] = useState(false);
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');

  const handleReset = () => {
    setMin('');
    setMax('');
    setOpen(false);
    onReset();
  };

  const handleApply = () => {
    setOpen(false);
    onFilter(min, max);
  };

  return (
    <>
      <button
        className="flex-center"
        onClick={() => setOpen(!open)}
        data-testid={`open-${colAccessor}-range-filter`}
      >
        <IconSlidersHoriz />
      </button>
      {open && (
        <div
          className={`flex-col ${styles['filter-container']}`}
          data-testid={`${colAccessor}-range-filter`}
        >
          <div className="flex-col gap-xs">
            <Text variant={'paragraph-small'}>min</Text>
            <Input
              type={'text'}
              placeholder={'Saisir un montant'}
              value={min}
              grayed={'grayish'}
              onChange={(e) => setMin(e.target.value)}
              data-testid={`${colAccessor}-filter-min-input`}
            />

            <Text variant={'paragraph-small'}>max</Text>
            <Input
              type={'text'}
              placeholder={'Saisir un montant'}
              value={max}
              grayed={'grayish'}
              onChange={(e) => setMax(e.target.value)}
              data-testid={`${colAccessor}-filter-max-input`}
            />
          </div>
          <div className="w-full flex-between-center">
            <button
              className="flex-center"
              onClick={handleReset}
              data-testid={`reset-${colAccessor}-range-filter`}
            >
              <IconBin />
            </button>
            <button
              className="flex-center"
              onClick={handleApply}
              data-testid={`apply-${colAccessor}-range-filter`}
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

export default Range;
