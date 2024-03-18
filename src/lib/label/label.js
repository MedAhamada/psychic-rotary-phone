var _excluded = ["label", "required", "info", "className"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import styles from './label.module.css';
import Text from '../text/text';
import { Popover } from 'antd';
import { IconInfo } from '../icons';
export var Label = function Label(_ref) {
  var label = _ref.label,
    required = _ref.required,
    info = _ref.info,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("div", {
    className: styles['input-label']
  }, /*#__PURE__*/React.createElement(Text, {
    variant: 'heading-6'
  }, label), required && /*#__PURE__*/React.createElement("span", {
    className: styles['asterisk-input']
  }, "*"), info && /*#__PURE__*/React.createElement(Popover, {
    placement: "top",
    content: info
  }, /*#__PURE__*/React.createElement(IconInfo, {
    size: 16
  })));
};
export default Label;