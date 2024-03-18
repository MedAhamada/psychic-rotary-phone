var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 20)
 */
var SmartPerf = function SmartPerf(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 20 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 18 20"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M8.69 20a2.92 2.92 0 0 0 2.264-1.064l6.376-7.719c.727-.88.873-2.067.386-3.096a2.912 2.912 0 0 0-2.65-1.67h-2.82V2.916A2.928 2.928 0 0 0 9.311 0a2.92 2.92 0 0 0-2.265 1.064L.671 8.782a2.877 2.877 0 0 0-.386 3.097 2.912 2.912 0 0 0 2.651 1.67h2.82v3.535A2.928 2.928 0 0 0 8.689 20Zm-5.754-8.386a.981.981 0 0 1-.762-1.603L8.55 2.293a.989.989 0 0 1 1.749.623v4.928c0 .3.246.545.548.545h4.218a.981.981 0 0 1 .763 1.603L9.452 17.71a.987.987 0 0 1-.763.358.993.993 0 0 1-.425-.094.992.992 0 0 1-.558-.909v-4.902a.55.55 0 0 0-.548-.546H2.936v-.003Z"
  }));
};
export default SmartPerf;