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
    width: size,
    height: size,
    viewBox: "0 0 17 18"
  }, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M1.279 2.604H15.36v13.503H1.28V2.604Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#0A66C2",
    d: "M.017 1.718C.017 1.046.58.5 1.271.5h14.458c.693 0 1.254.546 1.254 1.218v14.565c0 .672-.561 1.217-1.254 1.217H1.271c-.692 0-1.254-.545-1.254-1.217V1.718Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M5.173 14.728V7.074H2.634v7.654h2.539ZM3.904 6.03c.885 0 1.436-.588 1.436-1.323-.016-.75-.55-1.322-1.419-1.322s-1.436.571-1.436 1.322c0 .735.55 1.323 1.403 1.323h.016Zm2.674 8.698h2.539v-4.274c0-.229.016-.458.083-.62.184-.458.601-.931 1.303-.931.919 0 1.286.701 1.286 1.73v4.094h2.539v-4.388c0-2.35-1.253-3.444-2.923-3.444-1.37 0-1.97.766-2.305 1.289h.017v-1.11h-2.54c.034.718 0 7.654 0 7.654Z"
  })));
};
export default GoogleAds;