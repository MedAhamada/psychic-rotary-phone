var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - huge | big | medium | small | tiny
 */
var FlagIT = function FlagIT(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 18"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: "23.5",
    height: "16.643",
    x: ".25",
    y: ".679",
    fill: "#fff",
    stroke: "#F5F5F5",
    strokeWidth: ".5",
    rx: "1.75"
  }), /*#__PURE__*/React.createElement("mask", {
    id: "a",
    width: 24,
    height: 18,
    x: 0,
    y: 0,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: 'luminance'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: "23.5",
    height: "16.643",
    x: ".25",
    y: ".679",
    fill: "#fff",
    stroke: "#fff",
    strokeWidth: ".5",
    rx: "1.75"
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#E43D4C",
    d: "M16 .429h8v17.143h-8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#1BB65D",
    fillRule: "evenodd",
    d: "M0 17.571h8V.43H0v17.14Z",
    clipRule: "evenodd"
  })));
};
export default FlagIT;