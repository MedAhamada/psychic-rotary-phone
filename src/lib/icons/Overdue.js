var _excluded = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
var Overdue = function Overdue(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2.4",
    d: "M12 42H8a2 2 0 0 1-2-2V28a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2Zm14-8h4.666c.866 0 1.708-.28 2.4-.8l4.832-3.624a3.03 3.03 0 0 1 3.96 4.566l-4.146 4.146a8.008 8.008 0 0 1-4.088 2.188l-5.86 1.172a7.997 7.997 0 0 1-3.51-.084l-5.3-1.324a7.914 7.914 0 0 0-1.938-.24H14"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2.4",
    d: "M26 34h2.97A3.03 3.03 0 0 0 32 30.97v-.606c0-1.39-.946-2.602-2.294-2.938l-4.584-1.146a9.38 9.38 0 0 0-7.488 1.298L14 30m20.337-19.69a5.676 5.676 0 1 1-8.027 8.027 5.676 5.676 0 0 1 8.027-8.027Z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2.4",
    d: "M29.262 8.75a5.633 5.633 0 0 0-1.574-3.088 5.676 5.676 0 0 0-8.026 8.026 5.665 5.665 0 0 0 5.074 1.56"
  })));
};
export default Overdue;