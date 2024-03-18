var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
var Finance = function Finance(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 512 512"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM128 272h16c-.6-5-.9-10.1-.9-15.2c0-5.7 .4-11.3 1.1-16.8H128c-8.8 0-16-7.2-16-16s7.2-16 16-16h24.7c19.2-46.9 65.4-80 119.2-80H313c13.3 0 24 10.7 24 24s-10.7 24-24 24H271.9c-26.3 0-49.6 12.6-64.4 32H288c8.8 0 16 7.2 16 16s-7.2 16-16 16H192.9c-1.1 5.4-1.7 11-1.7 16.8c0 5.2 .5 10.3 1.4 15.2H288c8.8 0 16 7.2 16 16s-7.2 16-16 16H206.4c14.7 20.3 38.5 33.5 65.5 33.5H313c13.3 0 24 10.7 24 24s-10.7 24-24 24H271.9c-54.4 0-101-33.8-119.8-81.5H128c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
  }));
};
export default Finance;