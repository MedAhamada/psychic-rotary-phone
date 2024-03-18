var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
var JuicePower = function JuicePower(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 18 18"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    d: "m5.453 15.75 2.34-5.673a.466.466 0 0 0-.038-.425.44.44 0 0 0-.156-.149.42.42 0 0 0-.205-.054h-1.71a.42.42 0 0 1-.206-.053.439.439 0 0 1-.157-.149.461.461 0 0 1-.035-.426l2.65-6.301a.446.446 0 0 1 .159-.196.421.421 0 0 1 .237-.074h4.444a.42.42 0 0 1 .231.07.443.443 0 0 1 .16.185.465.465 0 0 1-.053.477L10.776 6.02a.46.46 0 0 0 .108.662.42.42 0 0 0 .23.069h1.953c.086 0 .17.026.24.075a.466.466 0 0 1 .065.693L5.454 15.75Z"
  }));
};
export default JuicePower;