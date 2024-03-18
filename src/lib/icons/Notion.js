var _excluded = ["size"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 20)
 */
var Notion = function Notion(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 20 : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 31 32"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M10.761 1.316c-4.9.379-9.067.71-9.256.734-.545.119-1.042.474-1.279.97l-.213.427.024 10.275.024 10.274.307.64c.19.355 1.373 2.012 2.676 3.693 2.58 3.361 2.77 3.527 3.74 3.646.284.023 2.439-.071 4.735-.213 2.32-.143 6.06-.38 8.286-.498 9.54-.591 9.044-.544 9.612-1.018.686-.568.615.38.663-12.12.023-10.583 0-11.294-.166-11.601-.166-.38-.497-.616-4.853-3.67C22.149.795 21.936.701 20.634.677c-.545-.024-4.996.284-9.873.64Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M10.761 1.316c-4.9.379-9.067.71-9.256.734-.545.119-1.042.474-1.279.97l-.213.427.024 10.275.024 10.274.307.64c.19.355 1.373 2.012 2.676 3.693 2.58 3.361 2.77 3.527 3.74 3.646.284.023 2.439-.071 4.735-.213 2.32-.143 6.06-.38 8.286-.498 9.54-.591 9.044-.544 9.612-1.018.686-.568.615.38.663-12.12.023-10.583 0-11.294-.166-11.601-.166-.38-.497-.616-4.853-3.67C22.149.795 21.936.701 20.634.677c-.545-.024-4.996.284-9.873.64Zm11.009 1.35c.426.19 3.433 2.272 3.859 2.675.118.118.166.237.095.284-.119.118-18.75 1.231-19.295 1.136-.237-.023-.592-.165-.805-.307-.852-.592-2.96-2.32-2.96-2.439 0-.331-.07-.331 8.216-.947 1.586-.095 4.214-.284 5.8-.426 3.433-.26 4.45-.26 5.09.024Zm5.919 5.35c.142.142.26.403.307.663.024.237.048 4.64.024 9.754-.024 8.76-.047 9.328-.213 9.564-.095.166-.284.332-.45.38-.402.165-19.91 1.277-20.313 1.16a1.29 1.29 0 0 1-.568-.356l-.236-.237-.024-9.47c-.024-6.652 0-9.588.07-9.848.048-.19.214-.426.332-.52.166-.12 1.326-.214 5.303-.45 2.794-.143 7.126-.403 9.589-.569 5.918-.355 5.894-.355 6.179-.07Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M22.456 11.26c-1.065.07-2.012.165-2.107.236-.331.166-.52.45-.568.758-.024.308.071.355 1.136.497l.45.047v4.19c0 2.486-.023 4.12-.095 4.073-.047-.048-1.42-2.178-3.077-4.688-1.657-2.557-3.03-4.64-3.054-4.64-.024-.024-1.09.024-2.391.118-1.586.095-2.462.213-2.628.308-.284.142-.616.663-.616.994 0 .213.38.332 1.16.332h.426v12.027l-.686.213c-.497.142-.687.236-.781.45-.142.33-.142.615.023.615.048 0 1.16-.047 2.439-.142 2.51-.142 2.793-.213 3.054-.734.095-.142.166-.308.166-.379 0-.023-.356-.142-.758-.237-.426-.094-.852-.213-.947-.213-.166-.047-.166-.355-.166-4.569v-4.522l2.983 4.664c3.125 4.9 3.504 5.469 4.001 5.706.592.308 2.107.095 2.865-.403l.237-.142.023-6.676.024-6.7.52-.095c.616-.118.9-.402.9-.9 0-.307-.023-.33-.307-.307-.166 0-1.184.071-2.226.118Z",
    clipRule: "evenodd"
  })));
};
export default Notion;