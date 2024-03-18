var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 20)
 */
var Shoppyz = function Shoppyz(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 20 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 21 20"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M17.62 3.87H4.951l-.223-.915A3.862 3.862 0 0 0 .968 0 .97.97 0 0 0 0 .968a.97.97 0 0 0 .968.967c.893 0 1.667.607 1.88 1.478l2.075 8.503a4.242 4.242 0 0 0 4.132 3.245h5.5a4.248 4.248 0 0 0 4.125-3.222l1.271-5.084A2.405 2.405 0 0 0 17.62 3.87Zm.454 2.514v.006l-1.27 5.08a2.316 2.316 0 0 1-2.25 1.756h-5.5a2.312 2.312 0 0 1-2.25-1.768L5.425 5.806h12.193a.468.468 0 0 1 .455.578ZM6.475 20a.968.968 0 1 0 0-1.935.968.968 0 0 0 0 1.935Zm10.645 0a.968.968 0 1 0 0-1.935.968.968 0 0 0 0 1.935Z"
  }));
};
export default Shoppyz;