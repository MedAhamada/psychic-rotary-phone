var _excluded = ["text", "variant", "size", "icon", "disabled", "width", "className"],
  _excluded2 = ["text", "open", "className", "placeholder"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
    props = _objectWithoutProperties(_ref, _excluded);
  var buttonClass = "".concat(styles['button'], " ").concat(styles["button-".concat(variant)], " ").concat(width ? styles["width-".concat(width)] : '', " ");
  if (variant === 'primary' || variant === 'secondary') {
    buttonClass += "".concat(size ? styles["button-".concat(size)] : '');
  }
  return /*#__PURE__*/React.createElement("button", _extends({}, props, {
    className: "".concat(buttonClass, " ").concat(className),
    disabled: disabled
  }), icon && variant !== 'danger' ? icon : null, variant !== 'icon' && text);
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
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: 'button'
  }, props, {
    className: "".concat(styles['dropdown-button'], " ").concat(className),
    "aria-label": "btn dropdown button"
  }), !text && placeholder && /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-small',
    className: styles['dropdown-button-placeholder']
  }, placeholder), text && /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-small'
  }, text.length > 40 ? "".concat(text.slice(0, 40), "...") : text), open ? /*#__PURE__*/React.createElement(IconChevronUp, {
    size: 8,
    className: "".concat(styles['arrow-icon'], " menu-options-dropdown-icon")
  }) : /*#__PURE__*/React.createElement(IconChevronDown, {
    size: 8,
    className: "".concat(styles['arrow-icon'], " menu-options-dropdown-icon")
  }));
};
ButtonDropdown.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  open: PropTypes.bool,
  placeholder: PropTypes.string
};
export default Button;