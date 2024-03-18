var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/header/header.jsx",
  _this = this;
import React from 'react';
import { Text } from '../text/text';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export var Header = function Header(_ref) {
  var heading = _ref.heading,
    button = _ref.button;
  return /*#__PURE__*/_jsxDEV("div", {
    className: 'header-container',
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "",
      children: typeof heading === 'string' || typeof heading === 'number' ? /*#__PURE__*/_jsxDEV(Text, {
        variant: 'heading-1',
        children: heading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }, _this) : heading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      className: "",
      children: button
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};