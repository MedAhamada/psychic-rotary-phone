var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
var ArrowsClockwise = function ArrowsClockwise(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 14 14"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12.259 2.39c.241 0 .437.197.437.438v2.625a.438.438 0 0 1-.437.438H9.634a.437.437 0 1 1 0-.875h2.187V2.828c0-.241.196-.437.438-.437Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7 2.625a4.375 4.375 0 0 0-3.094 1.281.438.438 0 0 1-.619-.618 5.25 5.25 0 0 1 7.425 0l1.856 1.856a.437.437 0 1 1-.619.619l-1.856-1.857A4.374 4.374 0 0 0 7 2.625ZM1.303 8.547c0-.242.196-.438.438-.438h2.625a.437.437 0 1 1 0 .875H2.178v2.188a.438.438 0 0 1-.875 0V8.547Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M1.431 8.237a.44.44 0 0 1 .62 0l1.855 1.857a4.373 4.373 0 0 0 6.187 0 .438.438 0 0 1 .62.618 5.25 5.25 0 0 1-7.425 0L1.43 8.856a.438.438 0 0 1 0-.619Z",
    clipRule: "evenodd"
  }));
};
export default ArrowsClockwise;