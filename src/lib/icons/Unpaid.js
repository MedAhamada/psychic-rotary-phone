var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
var Unpaid = function Unpaid(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2.4",
    d: "M22 31.8H7.8C5.7 31.8 4 30.1 4 28V9.8C4 7.7 5.7 6 7.8 6h30.4C40.3 6 42 7.7 42 9.8V20"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2.4",
    d: "M26.358 15.942a4.752 4.752 0 0 1 0 6.718 4.752 4.752 0 0 1-6.718 0 4.752 4.752 0 0 1 0-6.718 4.749 4.749 0 0 1 6.718 0ZM12 26h-2m26-14h-2m2 30c-4.418 0-8-3.58-8-7.998 0-4.328 3.68-8.004 8.008-8.002A8 8 0 0 1 36 42Z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2.4",
    d: "M38.4 34h-3.2v-3.2"
  })));
};
export default Unpaid;