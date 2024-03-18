var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 20)
 */
var Word = function Word(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 20 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 32 28"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 24,
    height: 28,
    x: 8,
    fill: "#2B78B1",
    rx: 2
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#1B366F",
    d: "M8 21h24v5a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-5Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#20478B",
    d: "M8 14h24v7H8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#215295",
    d: "M8 7h24v7H8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000",
    fillOpacity: ".3",
    d: "M8 10a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H8V10Z"
  }), /*#__PURE__*/React.createElement("rect", {
    width: 18,
    height: 18,
    y: 5,
    fill: "#223E74",
    rx: 2
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M15 9.014h-1.948l-1.53 6.525L9.85 9H8.203l-1.687 6.539L5 9.014H3L5.601 19h1.726L9 12.688 10.673 19H12.4L15 9.014Z"
  }));
};
export default Word;