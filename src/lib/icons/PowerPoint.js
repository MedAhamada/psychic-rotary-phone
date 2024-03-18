var _excluded = ["size"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 20)
 */
var PowerPoint = function PowerPoint(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 20 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 32 30"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "17.548",
    cy: 15,
    r: "14.452",
    fill: "url(#a)"
  }), /*#__PURE__*/React.createElement("mask", {
    id: "b",
    width: 29,
    height: 30,
    x: 3,
    y: 0,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: 'alpha'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "17.548",
    cy: 15,
    r: "14.452",
    fill: "#C4C4C4"
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#b)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "url(#c)",
    d: "M18.581-1.516h17.548v17.548H18.581z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000",
    fillOpacity: ".3",
    d: "M6.193 10.774a3 3 0 0 1 3-3h8.452a3 3 0 0 1 3 3v12.58a3 3 0 0 1-3 3H6.193v-15.58Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EB6C4D",
    d: "M1.032-1.516H18.58v17.548H1.032z"
  })), /*#__PURE__*/React.createElement("rect", {
    width: "18.581",
    height: "18.581",
    y: "5.71",
    fill: "url(#d)",
    rx: 2
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M13.42 13.407c0-2.226-1.467-3.568-3.791-3.568H6.193V20.16h2.133v-3.14H9.54c2.176 0 3.88-1.24 3.88-3.614Zm-2.163.045c0 1.002-.636 1.651-1.673 1.651H8.326v-3.332h1.243c1.037 0 1.688.545 1.688 1.68Z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "a",
    x1: "3.097",
    x2: 32,
    y1: "16.993",
    y2: "16.993",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#A73A24"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#F75936"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "c",
    x1: "32.516",
    x2: "18.581",
    y1: "8.806",
    y2: "8.806",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FDB8A3"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#F1876D"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "d",
    x1: 0,
    x2: "18.581",
    y1: "16.281",
    y2: "16.281",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#A73A24"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#F75936"
  }))));
};
export default PowerPoint;