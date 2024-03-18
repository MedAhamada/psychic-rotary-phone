import React, { useState } from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

import Text from '../text/text';
import { IconSlidersHoriz, IconBin } from '../icons';

import styles from './index.module.css';

/**
 * Date Component for filtering data based on date range.
 * @component
 *
 * @param {Object} props - React component properties
 * @param {Function} props.onFilter - Callback function to apply date filter with provided date range.
 * @param {Function} props.onReset - Callback function to reset the date filter.
 *
 * @returns {JSX.Element} React component rendering a date filter interface.
 */
const DateFilter = ({ onFilter, onReset, colAccessor }) => {
  const [open, setOpen] = useState(false);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [isActivated, setIsActivated] = useState(false);
  const [error, setError] = useState(false);
  const activeFilterClass = isActivated ? 'active-filter-icon' : 'filter-icon';

  const handleReset = () => {
    setDateFrom(null);
    setDateTo(null);
    setOpen(false);
    onReset();
    setIsActivated(false);
    setError(false);
  };

  const handleApply = () => {
    if (!dateFrom || !dateTo) {
      setError(true);
    } else {
      setOpen(false);
      onFilter(dateFrom, dateTo);
      setIsActivated(true);
    }
  };

  return (
    <>
      <button
        className="flex-center"
        onClick={() => setOpen(!open)}
        data-testid={`open-${colAccessor}-date-filter`}
      >
        <IconSlidersHoriz className={activeFilterClass} />
      </button>
      {open && (
        <div
          className={`flex-col ${styles['filter-container']}`}
          data-testid={`${colAccessor}-date-filter`}
        >
          <div className="flex-col gap-xs">
            <Text variant={'paragraph-small'}>du</Text>
            <DatePicker
              placeholder="Choisir une date"
              className={`${styles['input-date']}`}
              allowClear={false}
              value={dateFrom && dayjs(dateFrom)}
              onChange={(date, dateString) => {
                setDateFrom(dayjs(date).format('YYYY-MM-DD'));
              }}
              disabledDate={(current) => {
                return current && dayjs(current).format('YYYY-MM-DD') > dateTo;
              }}
              format={'DD-MM-YYYY'}
              data-testid={`${colAccessor}-filter-input-date-from`}
            />
            {error && !dateFrom && (
              <Text variant={'paragraph-small'} className={'error-field-text'}>
                Please select a date
              </Text>
            )}
            <Text variant={'paragraph-small'}>au</Text>
            <DatePicker
              placeholder="Choisir une date"
              className={`${styles['input-date']}`}
              allowClear={false}
              value={dateTo && dayjs(dateTo)}
              onChange={(date, dateString) => {
                setDateTo(dayjs(date).format('YYYY-MM-DD'));
              }}
              disabledDate={(current) => {
                return (
                  current && dayjs(current).format('YYYY-MM-DD') < dateFrom
                );
              }}
              format={'DD-MM-YYYY'}
              data-testid={`${colAccessor}-filter-input-date-to`}
            />
            {error && !dateTo && (
              <Text
                variant={'paragraph-small'}
                className={'error-field-text'}
                data-testid={`${colAccessor}-date-filter-error-inputs`}
              >
                Please select a date
              </Text>
            )}
          </div>
          <div className="w-full flex-between-center">
            <button
              className="flex-center"
              onClick={handleReset}
              data-testid={`reset-${colAccessor}-date-filter`}
            >
              <IconBin />
            </button>
            <button
              className="flex-center"
              onClick={handleApply}
              data-testid={`apply-${colAccessor}-date-filter`}
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

export default DateFilter;
