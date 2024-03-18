var _excluded = ["size"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 20)
 */
var Trello = function Trello(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 20 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 427 426"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "url(#a)",
    d: "M426.509 133.099c-.06-16.76-.36-33.59-1.94-50.26-2.7-28.63-16.41-51.22-40.47-67.2-18.6-12.34-39.64-15.54-61.4-15.57-36.29-.05-72.58-.02-108.87-.02-36.29 0-69.58-.16-104.37.1-10.43.08-20.96.61-31.25 2.2-29.7 4.61-51.77 20.44-66.19 46.87-10.32 18.93-11.71 39.69-11.8 60.49-.29 68.55-.28 137.11-.04 205.67.04 11.72.9 23.6 2.94 35.13 4.52 25.67 18.25 45.6 40.17 59.85 18.58 12.08 39.6 15.19 60.98 15.31 68.91.37 137.83.28 206.74.01 12.9-.05 25.97-.69 38.66-2.84 34.06-5.77 57.39-25.38 69.99-57.54 5.53-14.12 6.82-29.11 6.88-44 .28-62.74.21-125.47-.03-188.2Zm-258.13 211.08c-25.6-.69-51.25-.6-76.85 0-11.65.27-23.1-7.52-23.11-22.99l-.03-25.95c-.05-64.69-.11-129.39-.14-194.09-.01-12.86 5.45-20.92 16.14-23.86 1.73-.48 3.59-.66 5.4-.66 26.78-.04 53.57-.06 80.36-.02 12.47.02 21.59 9.2 21.6 21.84.06 37.42.02 74.84.02 112.26h-.11c0 36.59-.27 73.18.14 109.76.14 12.53-8.65 24.11-23.42 23.72v-.01Zm192.19-183.48h-.07c0 20.3.02 40.59 0 60.89-.02 14.01-8.38 23.02-22.41 23.16-26.12.27-52.25.14-78.38.05-12.11-.04-22.4-8.1-22.24-23.38.17-15.47-.02-30.94-.05-46.41-.04-24.79-.14-49.58-.07-74.36.04-12.86 5.74-20.78 16.58-23.47 1.75-.43 3.62-.52 5.43-.53 26.29-.03 52.59-.04 78.88-.01 13.21.02 22.29 9.02 22.32 22.18.04 20.62.01 41.25.01 61.88Z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "a",
    x1: "213.359",
    x2: "213.359",
    y1: "464.169",
    y2: "37.449",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#0050D1"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".99",
    stopColor: "#0060FD"
  }))));
};
export default Trello;