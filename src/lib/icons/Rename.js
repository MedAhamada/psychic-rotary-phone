var _excluded = ["size"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
var Rename = function Rename(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", {
    fill: "none",
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6.5 2c-.27614 0-.5.22386-.5.5s.22386.5.5.5h1v10h-1c-.27614 0-.5.2239-.5.5s.22386.5.5.5h3c.27614 0 .5-.2239.5-.5s-.22386-.5-.5-.5h-1v-10h1c.27614 0 .5-.22386.5-.5s-.22386-.5-.5-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m4 4h2.5v1h-2.5c-.55229 0-1 .44771-1 1v3.99726c0 .55224.44772 1.00004 1 1.00004h2.5v1h-2.5c-1.10457 0-2-.8955-2-2.00004v-3.99726c0-1.10457.89543-2 2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 10.9973h-2.5v1h2.5c1.1046 0 2-.8955 2-2.00003v-3.99727c0-1.10457-.8954-2-2-2h-2.5v1h2.5c.5523 0 1 .44772 1 1v3.99727c0 .55233-.4477 1.00003-1 1.00003z"
  })));
};
export default Rename;