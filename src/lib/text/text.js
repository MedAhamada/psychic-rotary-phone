var _excluded = ["children", "variant", "align", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import styles from './text.module.css';
import PropTypes from 'prop-types';

/**
 * @param {string} variant - Valid values: 'heading-1', 'heading-2', 'heading-3', 'heading-4', 'heading-5', 'heading-6', 'paragraph-big', 'paragraph-medium', 'paragraph-small', 'paragraph-tiny', 'cta', or 'link'.
 * @param {string} align - Valid values: 'left', 'center', 'right'
 */

export var Text = function Text(_ref) {
  var children = _ref.children,
    variant = _ref.variant,
    align = _ref.align,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("p", _extends({
    className: " ".concat(styles['text'], " ").concat(styles[variant], " ").concat(align ? styles["text-".concat(align)] : '', " ").concat(className ? className : '')
  }, props), children ? children : null);
};
Text.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['heading-1', 'heading-2', 'heading-3', 'heading-4', 'heading-5', 'heading-6', 'paragraph-big', 'paragraph-medium', 'paragraph-small', 'paragraph-tiny', 'cta', 'link'])
};
export default Text;