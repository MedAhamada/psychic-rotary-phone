var _excluded = ["open", "onClose", "title", "details", "icon", "onConfirm", "onCancel", "cancel", "confirm"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Modal, _extends({
    open: open,
    closable: false,
    footer: null,
    style: {
      padding: '0'
    },
    className: 'modal-red-popup',
    width: 'fit-content',
    centered: true
  }, props), /*#__PURE__*/React.createElement("div", {
    className: styles['popup-container']
  }, /*#__PURE__*/React.createElement("div", {
    className: styles['popup-icon']
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: styles['popup-info']
  }, /*#__PURE__*/React.createElement(Text, {
    variant: "heading-5",
    align: "center"
  }, title), /*#__PURE__*/React.createElement(Text, {
    variant: "paragraph-small",
    align: "center"
  }, details)), /*#__PURE__*/React.createElement("div", {
    className: styles['popup-buttons']
  }, /*#__PURE__*/React.createElement(Button, {
    text: cancel,
    variant: "secondary",
    width: "full",
    onClick: onClose,
    "data-testid": "popup-cancel-button"
  }), /*#__PURE__*/React.createElement(Button, {
    text: confirm,
    variant: "danger",
    width: "full",
    onClick: onConfirm,
    "data-testid": "popup-confirm-button"
  }))));
};
export default PopupRed;