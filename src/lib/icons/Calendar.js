var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 * @param props
 */
var Calendar = function Calendar(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_6504_80400)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.93629 1V2H2.41248C1.57121 2 0.888672 2.67188 0.888672 3.5V5H15.1109V3.5C15.1109 2.67188 14.4284 2 13.5871 2H12.0633V1C12.0633 0.446875 11.6093 0 11.0474 0C10.4855 0 10.0315 0.446875 10.0315 1V2H5.96804V1C5.96804 0.446875 5.51407 0 4.95216 0C4.39026 0 3.93629 0.446875 3.93629 1ZM15.1109 6H0.888672V14.5C0.888672 15.3281 1.57121 16 2.41248 16H13.5871C14.4284 16 15.1109 15.3281 15.1109 14.5V6Z",
    fill: "#5A88FF"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_6504_80400"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "14.2222",
    height: "16",
    fill: "white",
    transform: "translate(0.888672)"
  }))));
};
export default Calendar;