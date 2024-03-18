var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
var Link = function Link(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 16 16"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.31 3.092a2.25 2.25 0 0 1 2.452.489L8 4.818a.5.5 0 1 0 .707-.707L7.47 2.874a3.251 3.251 0 0 0-5.302 3.542c.164.394.403.752.705 1.054l1.768 1.768a3.25 3.25 0 0 0 4.596 0 .5.5 0 0 0-.707-.707 2.25 2.25 0 0 1-3.182 0L3.58 6.763a2.251 2.251 0 0 1 .73-3.67Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9.06 6.811a2.25 2.25 0 0 1 1.592.659l1.768 1.768a2.25 2.25 0 1 1-3.182 3.182L8 11.182a.5.5 0 1 0-.707.707l1.237 1.238a3.25 3.25 0 1 0 4.597-4.596l-1.768-1.768a3.25 3.25 0 0 0-4.596 0 .5.5 0 0 0 .707.707 2.25 2.25 0 0 1 1.59-.659Z",
    clipRule: "evenodd"
  }));
};
export default Link;