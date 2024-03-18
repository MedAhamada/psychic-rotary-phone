var _excluded = ["size"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 20)
 */
var Jira = function Jira(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 20 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 31 34"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#2684FF",
    d: "m30.628 16.108-13.79-13.79L15.503.984l-10.38 10.38-4.746 4.745a1.272 1.272 0 0 0 0 1.793l9.483 9.483 5.643 5.643 10.38-10.38.16-.16 4.586-4.578a1.269 1.269 0 0 0 0-1.801Zm-15.126 5.634-4.737-4.738 4.737-4.737 4.737 4.738-4.737 4.738Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#b)",
    d: "M15.502 12.267a7.975 7.975 0 0 1-.034-11.246L5.101 11.384l5.642 5.642 4.76-4.76Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#c)",
    d: "m20.252 16.992-4.75 4.75a7.978 7.978 0 0 1 0 11.282l10.396-10.39-5.646-5.642Z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "b",
    x1: "14.654",
    x2: "8.038",
    y1: "7.473",
    y2: "14.088",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: ".18",
    stopColor: "#0052CC"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#2684FF"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "c",
    x1: "16.407",
    x2: "23.01",
    y1: "26.479",
    y2: "19.877",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: ".18",
    stopColor: "#0052CC"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#2684FF"
  }))));
};
export default Jira;