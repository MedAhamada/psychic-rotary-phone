import _objectWithoutPropertiesLoose from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js";
var _excluded = ["text", "variant", "size", "icon", "disabled", "width", "className"],
  _excluded2 = ["text", "open", "className", "placeholder"];
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/button/button.jsx",
  _this = this;
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.object.assign.js";
import React from 'react';
import PropTypes from 'prop-types';
import Text from '../text/text';
import styles from './button.module.css';
import { IconChevronDown, IconChevronUp } from '../icons';

/**
 * All different kind of button options
 *
 * @type {Object}
 */

/**
 * DEFAULT
 * The primary button
 *
 * @param  {string}    text        - text
 * @param  {string}    variant     - primary | secondary | yellow | danger | icon | link
 * @param  {string}    size        - large | small
 * @param  {boolean}   disabled    - true | false
 * @param  {Object}    icon        - SVG icon
 * @param  {boolean}   width       - full | fit
 * @param  {string}   className
 * @param props
 */
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export var Button = function Button(_ref) {
  var _ref$text = _ref.text,
    text = _ref$text === void 0 ? '' : _ref$text,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? '' : _ref$size,
    icon = _ref.icon,
    disabled = _ref.disabled,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 'fit' : _ref$width,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var buttonClass = styles['button'] + " " + styles["button-" + variant] + " " + (width ? styles["width-" + width] : '') + " ";
  if (variant === 'primary' || variant === 'secondary') {
    buttonClass += "" + (size ? styles["button-" + size] : '');
  }
  return /*#__PURE__*/_jsxDEV("button", Object.assign({}, props, {
    className: buttonClass + " " + className,
    disabled: disabled,
    children: [icon && variant !== 'danger' ? icon : null, variant !== 'icon' && text]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};
Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'yellow', 'danger', 'icon', 'link']),
  width: PropTypes.oneOf(['full', 'fit']),
  size: PropTypes.oneOf(['large', 'small']),
  disabled: PropTypes.bool,
  icon: PropTypes.node
};

/**
 * DEFAULT
 * The primary button
 *
 * @param  {string}    text        - text
 * @param  prop    extande all button attributes
 */
export var ButtonDropdown = function ButtonDropdown(_ref2) {
  var text = _ref2.text,
    open = _ref2.open,
    className = _ref2.className,
    placeholder = _ref2.placeholder,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  return /*#__PURE__*/_jsxDEV("button", Object.assign({
    type: 'button'
  }, props, {
    className: styles['dropdown-button'] + " " + className,
    "aria-label": "btn dropdown button",
    children: [!text && placeholder && /*#__PURE__*/_jsxDEV(Text, {
      variant: 'paragraph-small',
      className: styles['dropdown-button-placeholder'],
      children: placeholder
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }, _this), text && /*#__PURE__*/_jsxDEV(Text, {
      variant: 'paragraph-small',
      children: text.length > 40 ? text.slice(0, 40) + "..." : text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }, _this), open ? /*#__PURE__*/_jsxDEV(IconChevronUp, {
      size: 8,
      className: styles['arrow-icon'] + " menu-options-dropdown-icon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }, _this) : /*#__PURE__*/_jsxDEV(IconChevronDown, {
      size: 8,
      className: styles['arrow-icon'] + " menu-options-dropdown-icon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 5
  }, _this);
};
ButtonDropdown.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  open: PropTypes.bool,
  placeholder: PropTypes.string
};
export default Button;