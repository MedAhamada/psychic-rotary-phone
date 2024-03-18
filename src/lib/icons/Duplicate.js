var _excluded = ["size"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
var Duplicate = function Duplicate(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return props.isSelected ? /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("rect", {
    width: size,
    height: size,
    rx: "4",
    fill: "url(#paint0_linear_1196_13187)"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.24988 6.5V12.5C7.24988 13.7426 8.25724 14.75 9.49988 14.75H15.4999C16.7425 14.75 17.7499 13.7426 17.7499 12.5V6.5C17.7499 5.25736 16.7425 4.25 15.4999 4.25H9.49988C8.25724 4.25 7.24988 5.25736 7.24988 6.5Z",
    stroke: "white",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.7499 14.75V15.5C14.7499 16.7426 13.7425 17.75 12.4999 17.75H6.49988C5.25724 17.75 4.24988 16.7426 4.24988 15.5V9.5C4.24988 8.25736 5.25724 7.25 6.49988 7.25H7.24988",
    stroke: "white",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5005 11V8",
    stroke: "white",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.9999 9.49951H13.9999",
    stroke: "white",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear_1196_13187",
    x1: "22",
    y1: "12.9038",
    x2: "0",
    y2: "12.9038",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#2062D9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#67CBF6"
  })))) : /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("rect", {
    width: size,
    height: size,
    rx: "4",
    fill: "#F7F9FC"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.24988 6.5V12.5C7.24988 13.7426 8.25724 14.75 9.49988 14.75H15.4999C16.7425 14.75 17.7499 13.7426 17.7499 12.5V6.5C17.7499 5.25736 16.7425 4.25 15.4999 4.25H9.49988C8.25724 4.25 7.24988 5.25736 7.24988 6.5Z",
    stroke: "url(#paint0_linear_1598_25148)",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.7499 14.75V15.5C14.7499 16.7426 13.7425 17.75 12.4999 17.75H6.49988C5.25724 17.75 4.24988 16.7426 4.24988 15.5V9.5C4.24988 8.25736 5.25724 7.25 6.49988 7.25H7.24988",
    stroke: "url(#paint1_linear_1598_25148)",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5005 11V8",
    stroke: "url(#paint2_linear_1598_25148)",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.9999 9.49951H13.9999",
    stroke: "url(#paint3_linear_1598_25148)",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear_1598_25148",
    x1: "17.7499",
    y1: "10.4087",
    x2: "7.24988",
    y2: "10.4087",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#2062D9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#67CBF6"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint1_linear_1598_25148",
    x1: "14.7499",
    y1: "13.4087",
    x2: "4.24988",
    y2: "13.4087",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#2062D9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#67CBF6"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint2_linear_1598_25148",
    x1: "12.8755",
    y1: "9.75962",
    x2: "12.1255",
    y2: "9.75962",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#2062D9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#67CBF6"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint3_linear_1598_25148",
    x1: "13.9999",
    y1: "9.56442",
    x2: "10.9999",
    y2: "9.56442",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#2062D9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#67CBF6"
  }))));
};
export default Duplicate;