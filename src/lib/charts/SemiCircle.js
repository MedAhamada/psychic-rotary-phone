var _excluded = ["size", "fame"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import Text from '../text/text';
import styles from './semicircle.module.css';

/**
 *
 * @param {*} size  - Number (default: 18)
 * @param {*} fame  - Number
 */
var SemiCircle = function SemiCircle(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 209 : _ref$size,
    fame = _ref.fame,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    fill: "none",
    viewBox: "0 0 209 137",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#fff",
    "stroke-linecap": "round",
    "stroke-width": "28",
    d: "M193.214 121.842A90.003 90.003 0 0 0 104.864 14 90 90 0 0 0 16.84 122.107"
  }), /*#__PURE__*/React.createElement("g", {
    filter: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "#E7EAEE",
    "stroke-linecap": "round",
    "stroke-width": "20",
    d: "M193.214 121.842A90.003 90.003 0 0 0 104.865 14 90 90 0 0 0 16.84 122.107"
  })), /*#__PURE__*/React.createElement("path", {
    stroke: "#E7EAEE",
    "stroke-linecap": "round",
    "stroke-width": "20",
    d: "M16.786 121.842a90 90 0 0 1 125.688-99.67"
  }), /*#__PURE__*/React.createElement("g", {
    filter: "url(#b)"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "url(#c)",
    "stroke-linecap": "round",
    "stroke-width": "20",
    d: "M193.214 121.842A90.003 90.003 0 0 0 104.865 14a90 90 0 0 0-88.024 108.107"
  })), /*#__PURE__*/React.createElement("g", {
    filter: "url(#d)"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "url(#e)",
    "stroke-linecap": "round",
    "stroke-width": "20",
    d: "M16.786 121.842a90 90 0 0 1 125.688-99.67"
  })), fame >= 600 && /*#__PURE__*/React.createElement("path", {
    fill: "#3B4D6F",
    d: "M154.501 82.696a4.381 4.381 0 0 0 .7-5.821 4.428 4.428 0 0 0-5.735-1.336l-48.941 26.626c-5.55 3.02-7.232 10.172-3.604 15.33 3.629 5.157 10.955 6.031 15.705 1.872l41.875-36.67Z"
  }), fame >= 300 && fame < 600 && /*#__PURE__*/React.createElement("path", {
    fill: "#3B4D6F",
    d: "M109.592 54.896a4.38 4.38 0 0 0-8.706 0l-6.174 55.565c-.658 5.923 3.979 11.104 9.939 11.104h1.176c5.961 0 10.597-5.181 9.939-11.104l-6.174-55.565Z"
  }), fame < 300 && /*#__PURE__*/React.createElement("path", {
    fill: "#3B4D6F",
    d: "M55.5 82.696a4.381 4.381 0 0 1-.701-5.821 4.429 4.429 0 0 1 5.735-1.336l48.941 26.626c5.551 3.02 7.232 10.172 3.604 15.33-3.628 5.157-10.955 6.031-15.704 1.872l-41.876-36.67Z"
  }), /*#__PURE__*/React.createElement("g", {
    filter: "url(#f)"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "url(#g)",
    "stroke-linecap": "round",
    "stroke-width": "20",
    d: "M16.786 121.842a90 90 0 0 1 38.077-92.584"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "a",
    width: "208",
    height: "136.109",
    x: "1",
    y: "0",
    "color-interpolation-filters": "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/React.createElement("feOffset", null), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "2"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
  }), /*#__PURE__*/React.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_7302_70202"
  }), /*#__PURE__*/React.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "effect1_dropShadow_7302_70202",
    result: "shape"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "b",
    width: "208",
    height: "136.109",
    x: "1",
    y: "0",
    "color-interpolation-filters": "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/React.createElement("feOffset", null), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "2"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
  }), /*#__PURE__*/React.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_7302_70202"
  }), /*#__PURE__*/React.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "effect1_dropShadow_7302_70202",
    result: "shape"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "d",
    width: "155.476",
    height: "135.844",
    x: "1",
    y: "0",
    "color-interpolation-filters": "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/React.createElement("feOffset", null), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "2"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
  }), /*#__PURE__*/React.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_7302_70202"
  }), /*#__PURE__*/React.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "effect1_dropShadow_7302_70202",
    result: "shape"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "f",
    width: "69.864",
    height: "122.586",
    x: "0",
    y: "14.257",
    "color-interpolation-filters": "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/React.createElement("feOffset", null), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "2.5"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
  }), /*#__PURE__*/React.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_7302_70202"
  }), /*#__PURE__*/React.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "effect1_dropShadow_7302_70202",
    result: "shape"
  })), fame >= 600 && /*#__PURE__*/React.createElement("linearGradient", {
    id: "c",
    x1: "195",
    x2: "15",
    y1: "125.5",
    y2: "125.5",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: ".465",
    "stop-color": "#FF5A5A"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    "stop-color": "#CD1F1F"
  })), fame >= 300 && fame < 600 && /*#__PURE__*/React.createElement("linearGradient", {
    id: "e",
    x1: "149",
    x2: "18.5",
    y1: "27.5",
    y2: "131.5",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: ".25",
    "stop-color": "#FF9F5A"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    "stop-color": "#C85423"
  })), fame < 300 && /*#__PURE__*/React.createElement("linearGradient", {
    id: "g",
    x1: "34.932",
    x2: "34.932",
    y1: "29.258",
    y2: "121.842",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: ".29",
    "stop-color": "#44DA86"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    "stop-color": "#168848"
  }))));
};
export default SemiCircle;