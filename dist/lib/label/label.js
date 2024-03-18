import _objectWithoutPropertiesLoose from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js";
var _excluded = ["label", "required", "info", "className"];
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/label/label.jsx",
  _this = this;
import React from 'react';
import styles from './label.module.css';
import Text from '../text/text';
import { Popover } from 'antd';
import { IconInfo } from '../icons';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export var Label = function Label(_ref) {
  var label = _ref.label,
    required = _ref.required,
    info = _ref.info,
    className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/_jsxDEV("div", {
    className: styles['input-label'],
    children: [/*#__PURE__*/_jsxDEV(Text, {
      variant: 'heading-6',
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), required && /*#__PURE__*/_jsxDEV("span", {
      className: styles['asterisk-input'],
      children: "*"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 20
    }, _this), info && /*#__PURE__*/_jsxDEV(Popover, {
      placement: "top",
      content: info,
      children: /*#__PURE__*/_jsxDEV(IconInfo, {
        size: 16
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};
export default Label;