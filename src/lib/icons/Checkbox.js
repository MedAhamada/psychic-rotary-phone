var _excluded = ["size"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
var Checkbox = function Checkbox(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("rect", {
    width: size,
    height: size,
    rx: "4",
    fill: props.isSelected ? '#5A88FF' : props.color
  }), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_1146_13339)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.62506 5.65625H13.3751C14.1624 5.65625 14.9175 5.96903 15.4743 6.52578C16.031 7.08253 16.3438 7.83764 16.3438 8.625V13.375C16.3438 14.1624 16.031 14.9175 15.4743 15.4742C14.9175 16.031 14.1624 16.3438 13.3751 16.3438H8.62506C7.8377 16.3438 7.08259 16.031 6.52584 15.4742C5.96909 14.9175 5.65631 14.1624 5.65631 13.375V8.625C5.65631 7.83764 5.96909 7.08253 6.52584 6.52578C7.08259 5.96903 7.8377 5.65625 8.62506 5.65625Z",
    stroke: props.isSelected ? 'white' : 'currentColor',
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5547 12.3359L9.21881 11",
    stroke: props.isSelected ? 'white' : 'currentColor',
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.7813 10.1094L10.5547 12.3359",
    stroke: props.isSelected ? 'white' : 'currentColor',
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_1146_13339"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "14.25",
    height: "14.25",
    fill: "white",
    transform: "translate(3.875 3.875)"
  }))));
};
export default Checkbox;