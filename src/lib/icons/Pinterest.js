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
    viewBox: "0 0 19 20"
  }, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M9.49997 0.5C14.747 0.5 19 4.75362 19 10C19 15.247 14.747 19.5 9.49997 19.5C4.25297 19.5 0 15.247 0 10C0 4.75362 4.25304 0.5 9.49997 0.5Z",
    fill: "#C8232C"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.78731 4.66016C6.43973 4.66016 4.75293 6.9841 4.75293 8.92147C4.75293 10.0947 5.2113 11.1385 6.19574 11.5274C6.35664 11.591 6.50215 11.5298 6.54845 11.357L6.69213 10.809C6.73961 10.6385 6.72122 10.578 6.59117 10.429C6.30674 10.1054 6.12628 9.6856 6.12628 9.09124C6.12628 7.36759 7.45808 5.82441 9.59439 5.82441C11.4867 5.82441 12.5257 6.94366 12.5257 8.43812C12.5257 10.4047 11.6268 12.0648 10.292 12.0648C9.55577 12.0648 9.00362 11.4752 9.18056 10.7502C9.39194 9.88687 9.80283 8.95409 9.80283 8.33005C9.80283 7.77255 9.49349 7.30583 8.85224 7.30583C8.09875 7.30583 7.49376 8.0605 7.49376 9.07161C7.49376 9.71586 7.71877 10.1511 7.71877 10.1511L6.81214 13.8685C6.54317 14.9711 6.77235 16.3237 6.79133 16.4603C6.8032 16.541 6.9101 16.56 6.95876 16.4995C7.02822 16.4116 7.92539 15.3387 8.23056 14.2664C8.31724 13.963 8.72636 12.3913 8.72636 12.3913C8.97101 12.8443 9.68648 13.2421 10.4471 13.2421C12.711 13.2421 14.2477 11.243 14.2477 8.56752C14.247 6.54471 12.4776 4.66016 9.78731 4.66016Z",
    fill: "white"
  })));
};
export default GoogleAds;