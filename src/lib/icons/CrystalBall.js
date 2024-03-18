var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
var CrystalBall = function CrystalBall(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M448 224c0 62.7-25.7 119.3-67.2 160H67.2C25.7 343.3 0 286.7 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224zM152.5 84.3l-9.8 26.4-26.4 9.8c-7 2.6-7 12.4 0 15l26.4 9.8 9.8 26.4c2.6 7 12.4 7 15 0l9.8-26.4 26.4-9.8c7-2.6 7-12.4 0-15l-26.4-9.8-9.8-26.4c-2.6-7-12.4-7-15 0zm159 48c-2.6-7-12.4-7-15 0l-18.4 49.8-49.8 18.4c-7 2.6-7 12.4 0 15l49.8 18.4 18.4 49.8c2.6 7 12.4 7 15 0l18.4-49.8 49.8-18.4c7-2.6 7-12.4 0-15l-49.8-18.4-18.4-49.8zm98.9 331.8c3.7 5.1 5.6 11.3 5.6 17.6c0 16.7-13.6 30.3-30.3 30.3H62.3C45.6 512 32 498.4 32 481.7c0-6.3 2-12.5 5.6-17.6L72 416H376l34.4 48.1z"
  }));
};
CrystalBall.propTypes = {
  size: PropTypes.number
};
export default CrystalBall;