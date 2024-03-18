var _excluded = ["size", "color"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 20)
 */
var Igloo = function Igloo(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 20 : _ref$size,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512",
    width: size,
    height: size,
    fill: color || '#2f80ed'
  }, /*#__PURE__*/React.createElement("path", {
    d: "M320 160H48.5C100.2 82.82 188.1 32 288 32C298.8 32 309.5 32.6 320 33.76V160zM352 39.14C424.9 55.67 487.2 99.82 527.5 160H352V39.14zM96 192V320H0C0 274 10.77 230.6 29.94 192H96zM192 320H128V192H448V320H384V352H576V432C576 458.5 554.5 480 528 480H352V352C352 316.7 323.3 288 288 288C252.7 288 224 316.7 224 352V480H48C21.49 480 0 458.5 0 432V352H192V320zM480 192H546.1C565.2 230.6 576 274 576 320H480V192z"
  }));
};
export default Igloo;