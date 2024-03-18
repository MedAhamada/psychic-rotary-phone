var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
var SlidersHoriz = function SlidersHoriz(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2.5 10.25h6.75a.5.5 0 0 1 0 1H2.5a.5.5 0 1 1 0-1Zm8.75.5a.5.5 0 0 1 .5-.5h1.75a.5.5 0 0 1 0 1h-1.75a.5.5 0 0 1-.5-.5Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10.5 10a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-1.75.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM2 5.25a.5.5 0 0 1 .5-.5h2.75a.5.5 0 1 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm5.75-.5h5.75a.5.5 0 0 1 0 1H7.75a.5.5 0 0 1 0-1Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6.5 4.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-1.75.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Z",
    clipRule: "evenodd"
  }));
};
export default SlidersHoriz;