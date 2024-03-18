var _excluded = ["variant", "text", "size", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
export var Badge = function Badge(_ref) {
  var variant = _ref.variant,
    text = _ref.text,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'small' : _ref$size,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "\n        ".concat(styles["badge"], "\n        ").concat(styles["badge-".concat(variant)], "\n        ").concat(className, "\n      "),
    style: {
      padding: size === 'large' && '4px 8px'
    }
  }, props), /*#__PURE__*/React.createElement(Text, {
    variant: 'heading-6'
  }, text));
};
Badge.propTypes = {
  variant: PropTypes.oneOf(['green', 'yellow', 'red', 'grey', 'blue-light', 'blue', 'blue-dark', 'dark', 'orange-light', 'orange', 'orange-dark', 'yellow-light']).isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['large', 'small'])
};
export default Badge;