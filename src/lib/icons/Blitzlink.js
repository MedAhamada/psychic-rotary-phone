var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 20)
 */
var Blitzlink = function Blitzlink(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 20 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M17.446 13.34a.985.985 0 0 0 .703-.36l.023-.03c1.07-1.339 1.697-2.89 1.81-4.484a7.908 7.908 0 0 0-2.294-6.152A7.896 7.896 0 0 0 11.536.02C9.942.133 8.391.76 7.052 1.83l-.026.023a.973.973 0 0 0-.08 1.442.968.968 0 0 0 1.29.07l.068-.054c.938-.752 2.022-1.213 3.129-1.336a5.96 5.96 0 0 1 4.894 1.71 5.944 5.944 0 0 1 1.71 4.89c-.123 1.107-.588 2.191-1.34 3.13l-.054.068a.964.964 0 0 0 .81 1.568h-.007Zm-4.467 4.81a.973.973 0 0 0 .08-1.442.968.968 0 0 0-1.29-.07l-.068.055c-.939.751-2.023 1.212-3.13 1.335a5.94 5.94 0 0 1-4.89-1.71 5.944 5.944 0 0 1-1.71-4.89c.123-1.107.588-2.19 1.34-3.13l.054-.067a.964.964 0 0 0-.07-1.287.972.972 0 0 0-.685-.284h-.055a.968.968 0 0 0-.703.361l-.023.029C.76 8.389.133 9.94.02 11.534a7.908 7.908 0 0 0 2.294 6.152 7.897 7.897 0 0 0 6.152 2.294c1.594-.113 3.146-.739 4.485-1.81l.025-.023.004.004Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M13.227 7.744a.968.968 0 0 0-1.652-.684L7.06 11.576a.959.959 0 0 0-.284.684c0 .258.1.5.284.684a.992.992 0 0 0 1.368 0l4.517-4.516a.959.959 0 0 0 .283-.684Z"
  }));
};
export default Blitzlink;