function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
var Tags = function Tags(_ref) {
  var options = _ref.options,
    onFilter = _ref.onFilter,
    onReset = _ref.onReset,
    colAccessor = _ref.colAccessor;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    checkedValues = _useState4[0],
    setCheckedValues = _useState4[1];
  var handleChange = function handleChange(checkedValues) {
    setCheckedValues(checkedValues);
  };
  var handleReset = function handleReset() {
    setCheckedValues([]);
    setOpen(false);
    onReset();
  };
  var handleApply = function handleApply() {
    setOpen(false);
    onFilter(checkedValues);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "flex-center",
    onClick: function onClick() {
      return setOpen(!open);
    }
    // data-testid="open-tags-filter"
    ,
    "data-testid": "open-".concat(colAccessor, "-tags-filter")
  }, /*#__PURE__*/React.createElement(IconSlidersHoriz, null)), open && /*#__PURE__*/React.createElement("div", {
    className: "flex-col-end gap-sm ".concat(styles['filter-container'])
    // data-testid="tags-filter-container"
    ,
    "data-testid": "".concat(colAccessor, "-tags-filter")
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/React.createElement(Checkbox.Group, {
    className: "flex-col gap-xs",
    options: options,
    value: checkedValues,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-full flex-between-center"
  }, /*#__PURE__*/React.createElement("button", {
    className: "flex-center",
    onClick: handleReset,
    "data-testid": "reset-".concat(colAccessor, "-tags-filter")
  }, /*#__PURE__*/React.createElement(IconBin, null)), /*#__PURE__*/React.createElement("button", {
    className: "flex-center",
    onClick: handleApply,
    "data-testid": "apply-".concat(colAccessor, "-tags-filter")
  }, /*#__PURE__*/React.createElement(Text, {
    variant: "paragraph-small",
    style: {
      color: 'var(--blue)'
    }
  }, "Apply")))));
};
export default Tags;