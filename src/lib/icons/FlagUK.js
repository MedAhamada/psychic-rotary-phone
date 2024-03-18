var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - huge | big | medium | small | tiny
 */
var FlagUK = function FlagUK(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    width: size,
    height: size,
    viewBox: "0 0 24 18",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    y: "0.285767",
    width: "24",
    height: "17.1429",
    rx: "2",
    fill: "white"
  }), /*#__PURE__*/React.createElement("mask", {
    id: "mask0_850_80286",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "24",
    height: "18"
  }, /*#__PURE__*/React.createElement("rect", {
    y: "0.285767",
    width: "24",
    height: "17.1429",
    rx: "2",
    fill: "white"
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#mask0_850_80286)"
  }, /*#__PURE__*/React.createElement("rect", {
    y: "0.285767",
    width: "24",
    height: "17.1429",
    fill: "#0A17A7"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.72032 11.7144L-2.37744 17.1764L-1.09929 19.0713L9.14283 12.1629V18.5715H14.8571V12.1629L25.0992 19.0713L26.3774 17.1764L18.2796 11.7144H24V6.00009H18.2796L26.3774 0.538071L25.0992 -1.35687L14.8571 5.55153V-0.857058H9.14283V5.55153L-1.09929 -1.35687L-2.37744 0.538074L5.72032 6.00009H-2.67029e-05V11.7144H5.72032Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.001 5.71336L26.857 -1.42853",
    stroke: "#DB1F35",
    strokeWidth: "0.666667",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.1538 12.0265L26.8857 18.5861",
    stroke: "#DB1F35",
    strokeWidth: "0.666667",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.86209 5.69476L-3.28906 -1.14648",
    stroke: "#DB1F35",
    strokeWidth: "0.666667",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.9631 11.9471L-3.28906 19.4091",
    stroke: "#DB1F35",
    strokeWidth: "0.666667",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 10.5715H10.2857V17.4286H13.7143V10.5715H24V7.14291H13.7143V0.285767H10.2857V7.14291H0V10.5715Z",
    fill: "#E6273E"
  })));
};
export default FlagUK;