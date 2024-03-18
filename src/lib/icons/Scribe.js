var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 20)
 */
var Scribe = function Scribe(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 20 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 18 20"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M17.42 16.448V5.961c0-.774-.304-1.503-.852-2.051L13.506.852A2.885 2.885 0 0 0 11.456 0H3.548A3.55 3.55 0 0 0 0 3.548v12.904A3.55 3.55 0 0 0 3.548 20h10.323a3.55 3.55 0 0 0 3.548-3.548v-.004Zm-15.485 0V3.545c0-.89.723-1.613 1.613-1.613h7.907c.258 0 .5.1.684.284L15.2 5.277a.959.959 0 0 1 .284.684v10.487c0 .89-.723 1.613-1.613 1.613H3.548c-.89 0-1.613-.722-1.613-1.613Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M10.323 11.609H6.774a.97.97 0 0 0-.967.968.97.97 0 0 0 .967.967h3.549a.97.97 0 0 0 .967-.967.97.97 0 0 0-.967-.968Zm0-5.161H6.774a.97.97 0 0 0-.967.967.97.97 0 0 0 .967.968h3.549a.97.97 0 0 0 .967-.967.97.97 0 0 0-.967-.968Z"
  }));
};
export default Scribe;