import _objectWithoutPropertiesLoose from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js";
var _excluded = ["type", "title", "details", "show", "onClose", "position"];
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/alert/alert.jsx",
  _this = this;
import "core-js/modules/es.object.assign.js";
import "core-js/modules/web.timers.js";
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
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export var Alert = function Alert(_ref) {
  var type = _ref.type,
    title = _ref.title,
    details = _ref.details,
    show = _ref.show,
    onClose = _ref.onClose,
    position = _ref.position,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
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
  return show && /*#__PURE__*/_jsxDEV("div", Object.assign({
    className: styles['alert-container'] + " " + styles["" + position]
  }, props, {
    "data-testid": 'alert-testid',
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: styles["alert-" + type + "-icon"],
      children: [type === 'success' && /*#__PURE__*/_jsxDEV(IconCheckmark, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 34
      }, _this), type === 'warning' && /*#__PURE__*/_jsxDEV(IconInfo, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 34
      }, _this), type === 'danger' && /*#__PURE__*/_jsxDEV(IconWarning, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 33
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      children: [/*#__PURE__*/_jsxDEV(Text, {
        variant: 'heading-5',
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }, _this), /*#__PURE__*/_jsxDEV(Text, {
        variant: 'paragraph-small',
        children: details
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, _this), /*#__PURE__*/_jsxDEV("button", {
      className: styles['alert-close-icon'],
      onClick: onClose,
      "aria-label": "alert close button",
      children: /*#__PURE__*/_jsxDEV(IconCross, {
        size: 14
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 7
  }, _this);
};
export default Alert;