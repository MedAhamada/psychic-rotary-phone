var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size   - Number (default: 20)
 */
var Cash = function Cash(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 20 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 16 17"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M.5 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1V5Zm14 0h-13v7h13V5Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM5.5 8.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm5.124-4.33a.5.5 0 0 1 .705-.046l4 3.5a.5.5 0 0 1-.658.752l-4-3.5a.5.5 0 0 1-.047-.705Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15.376 8.67a.5.5 0 0 1-.047.706l-4 3.5a.5.5 0 0 1-.658-.752l4-3.5a.5.5 0 0 1 .705.047Zm-10-4.5a.5.5 0 0 1-.047.706l-4 3.5a.5.5 0 0 1-.658-.752l4-3.5a.5.5 0 0 1 .705.047Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M.624 8.67a.5.5 0 0 1 .705-.046l4 3.5a.5.5 0 0 1-.658.752l-4-3.5a.5.5 0 0 1-.047-.705Z",
    clipRule: "evenodd"
  }));
};
export default Cash;