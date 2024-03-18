import _objectWithoutPropertiesLoose from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js";
var _excluded = ["children", "variant", "align", "className"];
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/text/text.jsx",
  _this = this;
import "core-js/modules/es.object.assign.js";
import React from 'react';
import styles from './text.module.css';
import PropTypes from 'prop-types';

/**
 * @param {string} variant - Valid values: 'heading-1', 'heading-2', 'heading-3', 'heading-4', 'heading-5', 'heading-6', 'paragraph-big', 'paragraph-medium', 'paragraph-small', 'paragraph-tiny', 'cta', or 'link'.
 * @param {string} align - Valid values: 'left', 'center', 'right'
 */
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export var Text = function Text(_ref) {
  var children = _ref.children,
    variant = _ref.variant,
    align = _ref.align,
    className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/_jsxDEV("p", Object.assign({
    className: " " + styles['text'] + " " + styles[variant] + " " + (align ? styles["text-" + align] : '') + " " + (className ? className : '')
  }, props, {
    children: children ? children : null
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};
Text.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['heading-1', 'heading-2', 'heading-3', 'heading-4', 'heading-5', 'heading-6', 'paragraph-big', 'paragraph-medium', 'paragraph-small', 'paragraph-tiny', 'cta', 'link'])
};
export default Text;