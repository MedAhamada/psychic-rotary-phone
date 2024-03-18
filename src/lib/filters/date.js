var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/filters/date.jsx",
  _this = this;
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
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import { Fragment as _Fragment } from "react/jsx-dev-runtime";
var DateFilter = function DateFilter(_ref) {
  var onFilter = _ref.onFilter,
    onReset = _ref.onReset,
    colAccessor = _ref.colAccessor;
  var _useState = useState(false),
    open = _useState[0],
    setOpen = _useState[1];
  var _useState2 = useState(null),
    dateFrom = _useState2[0],
    setDateFrom = _useState2[1];
  var _useState3 = useState(null),
    dateTo = _useState3[0],
    setDateTo = _useState3[1];
  var _useState4 = useState(false),
    isActivated = _useState4[0],
    setIsActivated = _useState4[1];
  var _useState5 = useState(false),
    error = _useState5[0],
    setError = _useState5[1];
  var activeFilterClass = isActivated ? 'active-filter-icon' : 'filter-icon';
  var handleReset = function handleReset() {
    setDateFrom(null);
    setDateTo(null);
    setOpen(false);
    onReset();
    setIsActivated(false);
    setError(false);
  };
  var handleApply = function handleApply() {
    if (!dateFrom || !dateTo) {
      setError(true);
    } else {
      setOpen(false);
      onFilter(dateFrom, dateTo);
      setIsActivated(true);
    }
  };
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("button", {
      className: "flex-center",
      onClick: function onClick() {
        return setOpen(!open);
      },
      "data-testid": "open-" + colAccessor + "-date-filter",
      children: /*#__PURE__*/_jsxDEV(IconSlidersHoriz, {
        className: activeFilterClass
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), open && /*#__PURE__*/_jsxDEV("div", {
      className: "flex-col " + styles['filter-container'],
      "data-testid": colAccessor + "-date-filter",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "flex-col gap-xs",
        children: [/*#__PURE__*/_jsxDEV(Text, {
          variant: 'paragraph-small',
          children: "du"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, _this), /*#__PURE__*/_jsxDEV(DatePicker, {
          placeholder: "Choisir une date",
          className: "" + styles['input-date'],
          allowClear: false,
          value: dateFrom && dayjs(dateFrom),
          onChange: function onChange(date, dateString) {
            setDateFrom(dayjs(date).format('YYYY-MM-DD'));
          },
          disabledDate: function disabledDate(current) {
            return current && dayjs(current).format('YYYY-MM-DD') > dateTo;
          },
          format: 'DD-MM-YYYY',
          "data-testid": colAccessor + "-filter-input-date-from"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, _this), error && !dateFrom && /*#__PURE__*/_jsxDEV(Text, {
          variant: 'paragraph-small',
          className: 'error-field-text',
          children: "Please select a date"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 15
        }, _this), /*#__PURE__*/_jsxDEV(Text, {
          variant: 'paragraph-small',
          children: "au"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, _this), /*#__PURE__*/_jsxDEV(DatePicker, {
          placeholder: "Choisir une date",
          className: "" + styles['input-date'],
          allowClear: false,
          value: dateTo && dayjs(dateTo),
          onChange: function onChange(date, dateString) {
            setDateTo(dayjs(date).format('YYYY-MM-DD'));
          },
          disabledDate: function disabledDate(current) {
            return current && dayjs(current).format('YYYY-MM-DD') < dateFrom;
          },
          format: 'DD-MM-YYYY',
          "data-testid": colAccessor + "-filter-input-date-to"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }, _this), error && !dateTo && /*#__PURE__*/_jsxDEV(Text, {
          variant: 'paragraph-small',
          className: 'error-field-text',
          "data-testid": colAccessor + "-date-filter-error-inputs",
          children: "Please select a date"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }, _this), /*#__PURE__*/_jsxDEV("div", {
        className: "w-full flex-between-center",
        children: [/*#__PURE__*/_jsxDEV("button", {
          className: "flex-center",
          onClick: handleReset,
          "data-testid": "reset-" + colAccessor + "-date-filter",
          children: /*#__PURE__*/_jsxDEV(IconBin, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }, _this), /*#__PURE__*/_jsxDEV("button", {
          className: "flex-center",
          onClick: handleApply,
          "data-testid": "apply-" + colAccessor + "-date-filter",
          children: /*#__PURE__*/_jsxDEV(Text, {
            variant: "paragraph-small",
            style: {
              color: 'var(--blue)'
            },
            children: "Apply"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};
export default DateFilter;