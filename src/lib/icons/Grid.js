var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
var Grid = function Grid(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 14 14"
  }), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.965 3.035a.05.05 0 1 1 .07-.07.05.05 0 0 1-.07.07m4.07-.07a.05.05 0 1 1-.07.07.05.05 0 0 1 .07-.07m4 0a.05.05 0 1 1-.07.07.05.05 0 0 1 .07-.07m-8 4a.05.05 0 1 1-.07.07.05.05 0 0 1 .07-.07m3.93.07a.05.05 0 1 1 .07-.07.05.05 0 0 1-.07.07m4.07-.07a.05.05 0 1 1-.07.07.05.05 0 0 1 .07-.07m-8.07 4.07a.05.05 0 1 1 .07-.07.05.05 0 0 1-.07.07m4.07-.07a.05.05 0 1 1-.07.07.05.05 0 0 1 .07-.07m3.93 0a.05.05 0 0 1 .07.07.05.05 0 0 1-.07-.07"
  })));
};
export default Grid;