var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - huge | big | medium | small | tiny
 */
var FlagFR = function FlagFR(_ref) {
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
  }), /*#__PURE__*/React.createElement("g", {
    id: "Flags"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Mask",
    x: 0.25,
    y: 0.25,
    width: 23.5,
    height: 16.6429,
    rx: 1.75,
    fill: "white",
    stroke: "#F5F5F5",
    strokeWidth: 0.5
  }), /*#__PURE__*/React.createElement("mask", {
    id: "mask0_850_80275",
    maskUnits: "userSpaceOnUse",
    x: 0,
    y: 0,
    width: 24,
    height: 18
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Mask_2",
    x: 0.25,
    y: 0.25,
    width: 23.5,
    height: 16.6429,
    rx: 1.75,
    fill: "white",
    stroke: "white",
    strokeWidth: 0.5
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#mask0_850_80275)"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Mask_3",
    x: 16,
    width: 8,
    height: 17.1429,
    fill: "#F44653"
  }), /*#__PURE__*/React.createElement("path", {
    id: "Rectangle 2",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 17.1429H8V0H0V17.1429Z",
    fill: "#1035BB"
  }))));
};
export default FlagFR;