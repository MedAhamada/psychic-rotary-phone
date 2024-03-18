var _excluded = ["size"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
var GlobeAdmin = function GlobeAdmin(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return props.isSelected ? /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 4C0 1.79086 1.79086 0 4 0H18C20.2092 0 22 1.79086 22 4V18C22 20.2091 20.2092 22 18 22H4C1.79086 22 0 20.2091 0 18V4Z",
    fill: "url(#paint0_linear_1196_13187)"
  }), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_1196_13187)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 4.25C14.7365 4.25 17.75 7.2635 17.75 11C17.75 14.7365 14.7365 17.75 11 17.75",
    stroke: "white",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 17.75C7.2635 17.75 4.25 14.7365 4.25 11C4.25 7.2635 7.2635 4.25 11 4.25",
    stroke: "white",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.626 5.04506C7.4585 8.66381 7.4585 13.3371 9.626 16.9558C10.2605 18.0156 11.7402 18.0156 12.3747 16.9558C14.5422 13.3371 14.5422 8.66381 12.3747 5.04506C11.7395 3.98531 10.2605 3.98531 9.626 5.04506Z",
    stroke: "white",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.25 11H17.75",
    stroke: "white",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear_1196_13187",
    x1: "22",
    y1: "12.9038",
    x2: "0",
    y2: "12.9038",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#2062D9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#67CBF6"
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_1196_13187"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "15",
    height: "15",
    fill: "white",
    transform: "translate(3.49989 3.5)"
  })))) : /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("rect", {
    width: size,
    height: size,
    rx: "4",
    fill: "#F7F9FC"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 4.25C14.7365 4.25 17.75 7.2635 17.75 11C17.75 14.7365 14.7365 17.75 11 17.75",
    stroke: "url(#paint0_linear_1161_15174)",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 17.75C7.2635 17.75 4.25 14.7365 4.25 11C4.25 7.2635 7.2635 4.25 11 4.25",
    stroke: "url(#paint1_linear_1161_15174)",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.626 5.04506C7.4585 8.66381 7.4585 13.3371 9.626 16.9558C10.2605 18.0156 11.7402 18.0156 12.3747 16.9558C14.5422 13.3371 14.5422 8.66381 12.3747 5.04506C11.7395 3.98531 10.2605 3.98531 9.626 5.04506Z",
    stroke: "url(#paint2_linear_1161_15174)",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.25 11H17.75",
    stroke: "url(#paint3_linear_1161_15174)",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear_1161_15174",
    x1: "17.75",
    y1: "12.1683",
    x2: "11",
    y2: "12.1683",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#2062D9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#67CBF6"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint1_linear_1161_15174",
    x1: "11",
    y1: "12.1683",
    x2: "4.25",
    y2: "12.1683",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#2062D9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#67CBF6"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint2_linear_1161_15174",
    x1: "14.0004",
    y1: "12.1687",
    x2: "8.00037",
    y2: "12.1687",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#2062D9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#67CBF6"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint3_linear_1161_15174",
    x1: "17.75",
    y1: "11.5865",
    x2: "4.25",
    y2: "11.5865",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#2062D9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#67CBF6"
  }))));
};
export default GlobeAdmin;