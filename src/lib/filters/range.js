function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
var Range = function Range(_ref) {
  var onFilter = _ref.onFilter,
    onReset = _ref.onReset,
    colAccessor = _ref.colAccessor;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    min = _useState4[0],
    setMin = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    max = _useState6[0],
    setMax = _useState6[1];
  var handleReset = function handleReset() {
    setMin('');
    setMax('');
    setOpen(false);
    onReset();
  };
  var handleApply = function handleApply() {
    setOpen(false);
    onFilter(min, max);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "flex-center",
    onClick: function onClick() {
      return setOpen(!open);
    },
    "data-testid": "open-".concat(colAccessor, "-range-filter")
  }, /*#__PURE__*/React.createElement(IconSlidersHoriz, null)), open && /*#__PURE__*/React.createElement("div", {
    className: "flex-col ".concat(styles['filter-container']),
    "data-testid": "".concat(colAccessor, "-range-filter")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-col gap-xs"
  }, /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-small'
  }, "min"), /*#__PURE__*/React.createElement(Input, {
    type: 'text',
    placeholder: 'Saisir un montant',
    value: min,
    grayed: 'grayish',
    onChange: function onChange(e) {
      return setMin(e.target.value);
    },
    "data-testid": "".concat(colAccessor, "-filter-min-input")
  }), /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-small'
  }, "max"), /*#__PURE__*/React.createElement(Input, {
    type: 'text',
    placeholder: 'Saisir un montant',
    value: max,
    grayed: 'grayish',
    onChange: function onChange(e) {
      return setMax(e.target.value);
    },
    "data-testid": "".concat(colAccessor, "-filter-max-input")
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-full flex-between-center"
  }, /*#__PURE__*/React.createElement("button", {
    className: "flex-center",
    onClick: handleReset,
    "data-testid": "reset-".concat(colAccessor, "-range-filter")
  }, /*#__PURE__*/React.createElement(IconBin, null)), /*#__PURE__*/React.createElement("button", {
    className: "flex-center",
    onClick: handleApply,
    "data-testid": "apply-".concat(colAccessor, "-range-filter")
  }, /*#__PURE__*/React.createElement(Text, {
    variant: "paragraph-small",
    style: {
      color: 'var(--blue)'
    }
  }, "Apply")))));
};
export default Range;