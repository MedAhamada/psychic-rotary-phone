var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/filters/tags.jsx",
  _this = this;
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
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import { Fragment as _Fragment } from "react/jsx-dev-runtime";
var Tags = function Tags(_ref) {
  var options = _ref.options,
    onFilter = _ref.onFilter,
    onReset = _ref.onReset,
    colAccessor = _ref.colAccessor;
  var _useState = useState(false),
    open = _useState[0],
    setOpen = _useState[1];
  var _useState2 = useState(false),
    checkedValues = _useState2[0],
    setCheckedValues = _useState2[1];
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
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("button", {
      className: "flex-center",
      onClick: function onClick() {
        return setOpen(!open);
      }
      // data-testid="open-tags-filter"
      ,
      "data-testid": "open-" + colAccessor + "-tags-filter",
      children: /*#__PURE__*/_jsxDEV(IconSlidersHoriz, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), open && /*#__PURE__*/_jsxDEV("div", {
      className: "flex-col-end gap-sm " + styles['filter-container']
      // data-testid="tags-filter-container"
      ,
      "data-testid": colAccessor + "-tags-filter",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "w-full",
        children: /*#__PURE__*/_jsxDEV(Checkbox.Group, {
          className: "flex-col gap-xs",
          options: options,
          value: checkedValues,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, _this), /*#__PURE__*/_jsxDEV("div", {
        className: "w-full flex-between-center",
        children: [/*#__PURE__*/_jsxDEV("button", {
          className: "flex-center",
          onClick: handleReset,
          "data-testid": "reset-" + colAccessor + "-tags-filter",
          children: /*#__PURE__*/_jsxDEV(IconBin, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, _this), /*#__PURE__*/_jsxDEV("button", {
          className: "flex-center",
          onClick: handleApply,
          "data-testid": "apply-" + colAccessor + "-tags-filter",
          children: /*#__PURE__*/_jsxDEV(Text, {
            variant: "paragraph-small",
            style: {
              color: 'var(--blue)'
            },
            children: "Apply"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};
export default Tags;