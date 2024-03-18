var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
var GoogleAds = function GoogleAds(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 52 52"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#070707",
    d: "M0 7a7 7 0 0 1 7-7h38a7 7 0 0 1 7 7v38a7 7 0 0 1-7 7H7a7 7 0 0 1-7-7V7Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00F2EA",
    fillRule: "evenodd",
    d: "M22.023 21.192V19.49a13.163 13.163 0 0 0-1.784-.13C12.939 19.36 7 25.3 7 32.6c0 4.478 2.238 8.442 5.652 10.84a13.187 13.187 0 0 1-3.555-9.015c0-7.196 5.77-13.064 12.926-13.232Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00F2EA",
    fillRule: "evenodd",
    d: "M22.335 40.47c3.257 0 5.914-2.591 6.035-5.82l.011-28.825h5.266A10.003 10.003 0 0 1 33.477 4h-7.192l-.012 28.826c-.12 3.228-2.778 5.818-6.034 5.818-.977 0-1.94-.238-2.805-.694a6.037 6.037 0 0 0 4.901 2.52Zm21.15-24.861v-1.602a9.943 9.943 0 0 1-5.45-1.62 10.008 10.008 0 0 0 5.45 3.222Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FF004F",
    fillRule: "evenodd",
    d: "M38.035 12.386a9.962 9.962 0 0 1-2.46-6.56h-1.928a10.026 10.026 0 0 0 4.388 6.56ZM20.24 26.552a6.052 6.052 0 0 0-6.046 6.046 6.05 6.05 0 0 0 3.24 5.352 6.008 6.008 0 0 1-1.144-3.526 6.053 6.053 0 0 1 6.046-6.047c.623 0 1.22.103 1.784.28v-7.343a13.163 13.163 0 0 0-1.784-.13c-.105 0-.208.006-.312.008v5.64a5.941 5.941 0 0 0-1.784-.28Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FF004F",
    fillRule: "evenodd",
    d: "M43.484 15.61v5.59c-3.73 0-7.185-1.194-10.007-3.219v14.617c0 7.3-5.938 13.24-13.238 13.24-2.82 0-5.437-.89-7.587-2.4a13.202 13.202 0 0 0 9.683 4.224c7.3 0 13.24-5.939 13.24-13.238V19.807a17.107 17.107 0 0 0 10.006 3.218v-7.194c-.72 0-1.42-.077-2.097-.222Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M33.477 32.598V17.981A17.104 17.104 0 0 0 43.484 21.2v-5.59a10.011 10.011 0 0 1-5.45-3.223 10.027 10.027 0 0 1-4.387-6.56H28.38l-.011 28.825c-.121 3.228-2.778 5.82-6.035 5.82a6.038 6.038 0 0 1-4.901-2.52 6.05 6.05 0 0 1-3.241-5.353 6.053 6.053 0 0 1 6.046-6.046 5.92 5.92 0 0 1 1.784.28v-5.64c-7.156.168-12.926 6.036-12.926 13.232a13.19 13.19 0 0 0 3.555 9.014 13.16 13.16 0 0 0 7.587 2.4c7.3 0 13.238-5.94 13.238-13.24Z",
    clipRule: "evenodd"
  }));
};
export default GoogleAds;