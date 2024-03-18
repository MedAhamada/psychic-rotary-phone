import _objectWithoutPropertiesLoose from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js";
var _excluded = ["size"];
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/icons/Checkbox.jsx",
  _this = this;
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var Checkbox = function Checkbox(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/_jsxDEV("svg", {
    width: size,
    height: size,
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsxDEV("rect", {
      width: size,
      height: size,
      rx: "4",
      fill: props.isSelected ? '#5A88FF' : props.color
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/_jsxDEV("g", {
      clipPath: "url(#clip0_1146_13339)",
      children: [/*#__PURE__*/_jsxDEV("path", {
        d: "M8.62506 5.65625H13.3751C14.1624 5.65625 14.9175 5.96903 15.4743 6.52578C16.031 7.08253 16.3438 7.83764 16.3438 8.625V13.375C16.3438 14.1624 16.031 14.9175 15.4743 15.4742C14.9175 16.031 14.1624 16.3438 13.3751 16.3438H8.62506C7.8377 16.3438 7.08259 16.031 6.52584 15.4742C5.96909 14.9175 5.65631 14.1624 5.65631 13.375V8.625C5.65631 7.83764 5.96909 7.08253 6.52584 6.52578C7.08259 5.96903 7.8377 5.65625 8.62506 5.65625Z",
        stroke: props.isSelected ? 'white' : 'currentColor',
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV("path", {
        d: "M10.5547 12.3359L9.21881 11",
        stroke: props.isSelected ? 'white' : 'currentColor',
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV("path", {
        d: "M12.7813 10.1094L10.5547 12.3359",
        stroke: props.isSelected ? 'white' : 'currentColor',
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/_jsxDEV("defs", {
      children: /*#__PURE__*/_jsxDEV("clipPath", {
        id: "clip0_1146_13339",
        children: /*#__PURE__*/_jsxDEV("rect", {
          width: "14.25",
          height: "14.25",
          fill: "white",
          transform: "translate(3.875 3.875)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};
export default Checkbox;