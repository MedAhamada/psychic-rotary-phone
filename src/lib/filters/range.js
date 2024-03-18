var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/filters/range.jsx",
  _this = this;
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
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import { Fragment as _Fragment } from "react/jsx-dev-runtime";
var Range = function Range(_ref) {
  var onFilter = _ref.onFilter,
    onReset = _ref.onReset,
    colAccessor = _ref.colAccessor;
  var _useState = useState(false),
    open = _useState[0],
    setOpen = _useState[1];
  var _useState2 = useState(''),
    min = _useState2[0],
    setMin = _useState2[1];
  var _useState3 = useState(''),
    max = _useState3[0],
    setMax = _useState3[1];
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
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("button", {
      className: "flex-center",
      onClick: function onClick() {
        return setOpen(!open);
      },
      "data-testid": "open-" + colAccessor + "-range-filter",
      children: /*#__PURE__*/_jsxDEV(IconSlidersHoriz, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), open && /*#__PURE__*/_jsxDEV("div", {
      className: "flex-col " + styles['filter-container'],
      "data-testid": colAccessor + "-range-filter",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "flex-col gap-xs",
        children: [/*#__PURE__*/_jsxDEV(Text, {
          variant: 'paragraph-small',
          children: "min"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, _this), /*#__PURE__*/_jsxDEV(Input, {
          type: 'text',
          placeholder: 'Saisir un montant',
          value: min,
          grayed: 'grayish',
          onChange: function onChange(e) {
            return setMin(e.target.value);
          },
          "data-testid": colAccessor + "-filter-min-input"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, _this), /*#__PURE__*/_jsxDEV(Text, {
          variant: 'paragraph-small',
          children: "max"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, _this), /*#__PURE__*/_jsxDEV(Input, {
          type: 'text',
          placeholder: 'Saisir un montant',
          value: max,
          grayed: 'grayish',
          onChange: function onChange(e) {
            return setMax(e.target.value);
          },
          "data-testid": colAccessor + "-filter-max-input"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, _this), /*#__PURE__*/_jsxDEV("div", {
        className: "w-full flex-between-center",
        children: [/*#__PURE__*/_jsxDEV("button", {
          className: "flex-center",
          onClick: handleReset,
          "data-testid": "reset-" + colAccessor + "-range-filter",
          children: /*#__PURE__*/_jsxDEV(IconBin, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, _this), /*#__PURE__*/_jsxDEV("button", {
          className: "flex-center",
          onClick: handleApply,
          "data-testid": "apply-" + colAccessor + "-range-filter",
          children: /*#__PURE__*/_jsxDEV(Text, {
            variant: "paragraph-small",
            style: {
              color: 'var(--blue)'
            },
            children: "Apply"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};
export default Range;