var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 20)
 */
var CrawlR = function CrawlR(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 20 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 19 20"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M10.968 18.064H7.742a.97.97 0 0 0-.968.968.97.97 0 0 0 .968.968h3.226a.97.97 0 0 0 .968-.968.97.97 0 0 0-.968-.968ZM2.465 8.116a2.134 2.134 0 0 1-.61 1.242l-.971.971A2.998 2.998 0 0 0 0 12.465a3.023 3.023 0 0 0 3.02 3.019h12.667a3.023 3.023 0 0 0 3.02-3.02c0-.806-.313-1.564-.884-2.135l-.971-.974a2.163 2.163 0 0 1-.61-1.242l-.29-2.3A6.661 6.661 0 0 0 9.355 0a6.664 6.664 0 0 0-6.597 5.813l-.29 2.3-.003.003Zm1.919.242.29-2.3a4.723 4.723 0 0 1 4.678-4.123 4.723 4.723 0 0 1 4.677 4.123l.29 2.3a4.1 4.1 0 0 0 1.158 2.365l.971.97a1.086 1.086 0 0 1-.767 1.852H3.019a1.086 1.086 0 0 1-.767-1.851l.97-.971a4.083 4.083 0 0 0 1.159-2.365h.003Z"
  }));
};
export default CrawlR;