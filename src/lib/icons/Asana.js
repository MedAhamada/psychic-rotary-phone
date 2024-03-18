var _excluded = ["size"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 20)
 */
var Asana = function Asana(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 20 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 31 29",
    fill: "none"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_850_79946)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M24.2584 15.3084C20.5344 15.3084 17.5161 18.3267 17.5161 22.0501C17.5161 25.7737 20.5344 28.7927 24.2584 28.7927C27.9817 28.7927 31 25.7737 31 22.0501C31 18.3267 27.9817 15.3084 24.2584 15.3084ZM6.74197 15.3087C3.01863 15.3091 0 18.3267 0 22.0504C0 25.7737 3.01863 28.7923 6.74197 28.7923C10.4656 28.7923 13.4843 25.7737 13.4843 22.0504C13.4843 18.3267 10.4656 15.3087 6.74164 15.3087H6.74197ZM22.242 6.88094C22.242 10.6043 19.2237 13.6236 15.5003 13.6236C11.7764 13.6236 8.75805 10.6043 8.75805 6.88094C8.75805 3.15759 11.7764 0.138968 15.5003 0.138968C19.2237 0.138968 22.2417 3.15759 22.2417 6.88094H22.242Z",
    fill: "url(#paint0_radial_850_79946)"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "paint0_radial_850_79946",
    cx: 0,
    cy: 0,
    r: 1,
    gradientUnits: "userSpaceOnUse",
    gradientTransform: "translate(15.5042 15.8167) scale(20.553 18.9974)"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FFB900"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.6",
    stopColor: "#F95D8F"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.999",
    stopColor: "#F95353"
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_850_79946"
  }, /*#__PURE__*/React.createElement("rect", {
    width: 31,
    height: "28.6564",
    fill: "white",
    transform: "translate(0 0.137598)"
  }))));
};
export default Asana;