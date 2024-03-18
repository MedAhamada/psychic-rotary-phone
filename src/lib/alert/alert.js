var _excluded = ["type", "title", "details", "show", "onClose", "position"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './alert.module.css';
import Text from '../text/text';
import { IconCheckmark, IconCross, IconInfo, IconWarning } from '../icons';

/**
 * Alert component to display messages with different types.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {string} props.type - The type of alert ('success', 'warning', 'danger').
 * @param {string} props.title - The title of the alert.
 * @param {string} props.details - The details or description of the alert.
 * @param {boolean} props.show - Indicates whether the alert should be displayed.
 * @param {function} props.onClose - Callback function to close the alert.
 * @param {string} [props.position] - The position of the alert ('fixed', 'absolute').
 * @returns {JSX.Element}
 */
export var Alert = function Alert(_ref) {
  var type = _ref.type,
    title = _ref.title,
    details = _ref.details,
    show = _ref.show,
    onClose = _ref.onClose,
    position = _ref.position,
    props = _objectWithoutProperties(_ref, _excluded);
  useEffect(function () {
    var timeoutId;
    if (show) {
      timeoutId = setTimeout(function () {
        onClose();
      }, 3000);
    }
    return function () {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [show, onClose]);
  return show && /*#__PURE__*/React.createElement("div", _extends({
    className: "".concat(styles['alert-container'], " ").concat(styles["".concat(position)])
  }, props, {
    "data-testid": 'alert-testid'
  }), /*#__PURE__*/React.createElement("div", {
    className: styles["alert-".concat(type, "-icon")]
  }, type === 'success' && /*#__PURE__*/React.createElement(IconCheckmark, null), type === 'warning' && /*#__PURE__*/React.createElement(IconInfo, null), type === 'danger' && /*#__PURE__*/React.createElement(IconWarning, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Text, {
    variant: 'heading-5'
  }, title), /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-small'
  }, details)), /*#__PURE__*/React.createElement("button", {
    className: styles['alert-close-icon'],
    onClick: onClose,
    "aria-label": "alert close button"
  }, /*#__PURE__*/React.createElement(IconCross, {
    size: 14
  })));
};
export default Alert;