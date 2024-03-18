var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/charts/Progressbar.jsx",
  _this = this;
import React from 'react';
import styles from './progressbar.module.css';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var Progressbar = function Progressbar(_ref) {
  var percentage = _ref.percentage;
  var _percentage = percentage > 100 ? 100 : percentage;
  return /*#__PURE__*/_jsxDEV("div", {
    className: styles["gradient-progressbar-" + (percentage > 100 ? 'dark' : 'light')],
    children: /*#__PURE__*/_jsxDEV("div", {
      className: styles['gradient-progressbar-empty'],
      style: {
        width: 100 - _percentage + "%"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};
export default Progressbar;