var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/loader/loader.jsx",
  _this = this;
import React from 'react';
import styles from './loader.module.css';
import PropTypes from 'prop-types';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export var Loader = function Loader(_ref) {
  var variant = _ref.variant,
    size = _ref.size;
  if (variant === 'border-top') {
    return /*#__PURE__*/_jsxDEV("div", {
      "data-testid": 'border-top-loader',
      children: /*#__PURE__*/_jsxDEV("div", {
        className: styles['border-top-loader']
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this);
  }
  if (variant === 'dots') {
    return /*#__PURE__*/_jsxDEV("div", {
      className: styles['dots-loader'],
      "data-testid": 'dots-loader',
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: styles['dot1'],
        "data-testid": 'dot1'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV("div", {
        className: styles['dot2'],
        "data-testid": 'dot2'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV("div", {
        className: styles['dot3'],
        "data-testid": 'dot3'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this);
  }
  return /*#__PURE__*/_jsxDEV("div", {
    "data-testid": 'default-loader',
    children: /*#__PURE__*/_jsxDEV("div", {
      className: styles['default-loader'],
      style: {
        width: size,
        height: size
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};
Loader.propTypes = {
  variant: PropTypes.oneOf(['border-top', 'dots']),
  size: PropTypes.number
};