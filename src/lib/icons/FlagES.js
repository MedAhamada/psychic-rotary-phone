var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - huge | big | medium | small | tiny
 */
var FlagES = function FlagES(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 25 18"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 24,
    height: "17.143",
    x: ".666",
    y: ".143",
    fill: "#fff",
    rx: 2
  }), /*#__PURE__*/React.createElement("mask", {
    id: "a",
    width: 25,
    height: 18,
    x: 0,
    y: 0,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: 'luminance'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: 24,
    height: "17.143",
    x: ".666",
    y: ".143",
    fill: "#fff",
    rx: 2
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#DD172C",
    fillRule: "evenodd",
    d: "M.666 4.714h24V.143h-24v4.571Zm0 12.571h24v-4.571h-24v4.571Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FFD133",
    fillRule: "evenodd",
    d: "M.666 12.714h24v-8h-24v8Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FFEDB1",
    fillRule: "evenodd",
    d: "M6.952 8.143h1.143v.571H6.952v-.571Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#A41517",
    strokeWidth: ".667",
    d: "M5.916 8.266a.333.333 0 0 1 .332-.361h1.408c.195 0 .348.166.332.36l-.13 1.568a.909.909 0 0 1-1.812 0l-.13-1.567Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#A41517",
    fillRule: "evenodd",
    d: "M5.809 8.714h2.285v.571h-.571l-.572 1.143-.571-1.143h-.571v-.571Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "1.143",
    height: 4,
    x: "4.095",
    y: 7,
    fill: "#A41517",
    rx: ".571"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "1.143",
    height: 4,
    x: "8.666",
    y: 7,
    fill: "#A41517",
    rx: ".571"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#A41517",
    d: "M5.809 6.77c0-.504.409-.914.914-.914h.457c.505 0 .914.41.914.915a.229.229 0 0 1-.228.228H6.037a.229.229 0 0 1-.228-.228Z"
  })));
};
export default FlagES;