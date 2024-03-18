var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
var GoogleAds = function GoogleAds(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2442.4 2237",
    width: size,
    height: size
  }, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC04",
    d: "M50.4,1628.6L862.5,221.9l703.7,406.3L754.2,2034.9L50.4,1628.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M2385.1,1623.7L1572.5,216.5C1467.6,18.1,1221.8-57.7,1023.4,47.2S749.3,397.9,854.1,596.3   c4.6,8.7,9.5,17.2,14.7,25.6l812.6,1407.2c109.6,195.8,357.2,265.7,553,156.1c195.8-109.6,265.7-357.2,156.1-553   c-1.8-3.2-3.6-6.3-5.4-9.4L2385.1,1623.7L2385.1,1623.7z"
  }), /*#__PURE__*/React.createElement("circle", {
    fill: "#34A853",
    cx: "406.3",
    cy: "1828.6",
    r: "406.3"
  })));
};
export default GoogleAds;