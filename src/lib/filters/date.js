function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
var DateFilter = function DateFilter(_ref) {
  var onFilter = _ref.onFilter,
    onReset = _ref.onReset,
    colAccessor = _ref.colAccessor;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    dateFrom = _useState4[0],
    setDateFrom = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    dateTo = _useState6[0],
    setDateTo = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isActivated = _useState8[0],
    setIsActivated = _useState8[1];
  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    error = _useState10[0],
    setError = _useState10[1];
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "flex-center",
    onClick: function onClick() {
      return setOpen(!open);
    },
    "data-testid": "open-".concat(colAccessor, "-date-filter")
  }, /*#__PURE__*/React.createElement(IconSlidersHoriz, {
    className: activeFilterClass
  })), open && /*#__PURE__*/React.createElement("div", {
    className: "flex-col ".concat(styles['filter-container']),
    "data-testid": "".concat(colAccessor, "-date-filter")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-col gap-xs"
  }, /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-small'
  }, "du"), /*#__PURE__*/React.createElement(DatePicker, {
    placeholder: "Choisir une date",
    className: "".concat(styles['input-date']),
    allowClear: false,
    value: dateFrom && dayjs(dateFrom),
    onChange: function onChange(date, dateString) {
      setDateFrom(dayjs(date).format('YYYY-MM-DD'));
    },
    disabledDate: function disabledDate(current) {
      return current && dayjs(current).format('YYYY-MM-DD') > dateTo;
    },
    format: 'DD-MM-YYYY',
    "data-testid": "".concat(colAccessor, "-filter-input-date-from")
  }), error && !dateFrom && /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-small',
    className: 'error-field-text'
  }, "Please select a date"), /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-small'
  }, "au"), /*#__PURE__*/React.createElement(DatePicker, {
    placeholder: "Choisir une date",
    className: "".concat(styles['input-date']),
    allowClear: false,
    value: dateTo && dayjs(dateTo),
    onChange: function onChange(date, dateString) {
      setDateTo(dayjs(date).format('YYYY-MM-DD'));
    },
    disabledDate: function disabledDate(current) {
      return current && dayjs(current).format('YYYY-MM-DD') < dateFrom;
    },
    format: 'DD-MM-YYYY',
    "data-testid": "".concat(colAccessor, "-filter-input-date-to")
  }), error && !dateTo && /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-small',
    className: 'error-field-text',
    "data-testid": "".concat(colAccessor, "-date-filter-error-inputs")
  }, "Please select a date")), /*#__PURE__*/React.createElement("div", {
    className: "w-full flex-between-center"
  }, /*#__PURE__*/React.createElement("button", {
    className: "flex-center",
    onClick: handleReset,
    "data-testid": "reset-".concat(colAccessor, "-date-filter")
  }, /*#__PURE__*/React.createElement(IconBin, null)), /*#__PURE__*/React.createElement("button", {
    className: "flex-center",
    onClick: handleApply,
    "data-testid": "apply-".concat(colAccessor, "-date-filter")
  }, /*#__PURE__*/React.createElement(Text, {
    variant: "paragraph-small",
    style: {
      color: 'var(--blue)'
    }
  }, "Apply")))));
};
export default DateFilter;