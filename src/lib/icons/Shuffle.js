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
var Shuffle = function Shuffle(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 16 17"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M1.5 5a.5.5 0 0 1 .5-.5h1.442a4.5 4.5 0 0 1 3.661 1.884l2.607 3.65a3.5 3.5 0 0 0 2.848 1.466H14.5a.5.5 0 0 1 0 1h-1.941a4.5 4.5 0 0 1-3.662-1.884L6.29 6.966A3.5 3.5 0 0 0 3.442 5.5H2a.5.5 0 0 1-.5-.5Zm11.146-1.854a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708L13.793 5l-1.147-1.146a.5.5 0 0 1 0-.708Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12.646 10.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708L13.793 12l-1.147-1.146a.5.5 0 0 1 0-.708ZM12.559 5.5A3.5 3.5 0 0 0 9.71 6.966l-.075.104a.5.5 0 0 1-.814-.581l.075-.105A4.5 4.5 0 0 1 12.559 4.5H14.5a.5.5 0 1 1 0 1h-1.94ZM7.062 9.814a.5.5 0 0 1 .116.697l-.075.105A4.5 4.5 0 0 1 3.442 12.5H2a.5.5 0 1 1 0-1h1.442a3.5 3.5 0 0 0 2.848-1.465l.074-.105a.5.5 0 0 1 .698-.116Z",
    clipRule: "evenodd"
  }));
};
Shuffle.propTypes = {
  size: PropTypes.number
};
export default Shuffle;