var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
var ChartSimple = function ChartSimple(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#5A88FF",
    d: "M5.968 2.413c0-.842.683-1.524 1.524-1.524h1.016c.841 0 1.524.682 1.524 1.524v11.174c0 .842-.683 1.524-1.524 1.524H7.492a1.524 1.524 0 0 1-1.524-1.524V2.413ZM.888 8.508c0-.841.683-1.524 1.524-1.524h1.016c.842 0 1.524.683 1.524 1.524v5.08c0 .84-.682 1.523-1.524 1.523H2.412A1.524 1.524 0 0 1 .89 13.587V8.508Zm11.683-5.587h1.016c.841 0 1.524.682 1.524 1.523v9.143c0 .842-.683 1.524-1.524 1.524h-1.016a1.524 1.524 0 0 1-1.524-1.524V4.444c0-.84.683-1.523 1.524-1.523Z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M.889 0h14.222v16H.889z"
  }))));
};
export default ChartSimple;