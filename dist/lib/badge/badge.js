import _objectWithoutPropertiesLoose from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js";
var _excluded = ["variant", "text", "size", "className"];
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/badge/badge.jsx",
  _this = this;
import "core-js/modules/es.object.assign.js";
import React from 'react';
import PropTypes from 'prop-types';
import styles from './badge.module.css';
import Text from '../text/text';

/**
 * *Parent has to be position:relative to apply center
 * @param {*} props
 * @param {*} variant   - green | yellow | red | grey | blue-light | blue | blue-dark | dark | orange-light | orange | orange-dark
 * @param {*} text      - string
 * @param {*} size      - large | small
 * @param {*} className - string
 */
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export var Badge = function Badge(_ref) {
  var variant = _ref.variant,
    text = _ref.text,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'small' : _ref$size,
    className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/_jsxDEV("div", Object.assign({
    className: "\n        " + styles["badge"] + "\n        " + styles["badge-" + variant] + "\n        " + className + "\n      ",
    style: {
      padding: size === 'large' && '4px 8px'
    }
  }, props, {
    children: /*#__PURE__*/_jsxDEV(Text, {
      variant: 'heading-6',
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};
Badge.propTypes = {
  variant: PropTypes.oneOf(['green', 'yellow', 'red', 'grey', 'blue-light', 'blue', 'blue-dark', 'dark', 'orange-light', 'orange', 'orange-dark', 'yellow-light']).isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['large', 'small'])
};
export default Badge;