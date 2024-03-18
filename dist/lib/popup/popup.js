import _objectWithoutPropertiesLoose from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js";
var _excluded = ["open", "onClose", "title", "details", "icon", "onConfirm", "onCancel", "cancel", "confirm"];
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/popup/popup.jsx",
  _this = this;
import "core-js/modules/es.object.assign.js";
import React from 'react';
import Button from '../button/button';
import Text from '../text/text';
import styles from './popup.module.css';
import { Modal } from 'antd';

/**
 * @param  {boolean}   icon        - SVG icon
 * @param  {string}    title       - title
 * @param  {string}    details     - details
 */
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export var PopupRed = function PopupRed(_ref) {
  var open = _ref.open,
    onClose = _ref.onClose,
    title = _ref.title,
    details = _ref.details,
    icon = _ref.icon,
    onConfirm = _ref.onConfirm,
    onCancel = _ref.onCancel,
    cancel = _ref.cancel,
    confirm = _ref.confirm,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/_jsxDEV(Modal, Object.assign({
    open: open,
    closable: false,
    footer: null,
    style: {
      padding: '0'
    },
    className: 'modal-red-popup',
    width: 'fit-content',
    centered: true
  }, props, {
    children: /*#__PURE__*/_jsxDEV("div", {
      className: styles['popup-container'],
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: styles['popup-icon'],
        children: icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV("div", {
        className: styles['popup-info'],
        children: [/*#__PURE__*/_jsxDEV(Text, {
          variant: "heading-5",
          align: "center",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this), /*#__PURE__*/_jsxDEV(Text, {
          variant: "paragraph-small",
          align: "center",
          children: details
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV("div", {
        className: styles['popup-buttons'],
        children: [/*#__PURE__*/_jsxDEV(Button, {
          text: cancel,
          variant: "secondary",
          width: "full",
          onClick: onClose,
          "data-testid": "popup-cancel-button"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this), /*#__PURE__*/_jsxDEV(Button, {
          text: confirm,
          variant: "danger",
          width: "full",
          onClick: onConfirm,
          "data-testid": "popup-confirm-button"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};
export default PopupRed;