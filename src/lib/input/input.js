var _excluded = ["type", "label", "required", "error", "icon", "labelInfo", "datalist", "options", "outlined", "grayed"],
  _excluded2 = ["label", "placeholder", "required", "error", "type", "outlined", "country", "prefixIcon", "labelInfo", "grayed", "value", "onChange"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Text from '../text/text';
import styles from './input.module.css';
import { IconChevronDown, IconChevronUp, IconEmail, IconKey, IconSearch } from '../icons';
import Label from '../label/label';
import { AutoComplete } from 'antd';
import PhoneInput from 'react-phone-input-2';

/**
 * Extands all input props, in addition to our params
 * @param {*} type          - text | email | url | autocomplete
 * @param {*} label         -
 * @param {*} required      - boolean
 * @param error
 * @param icon     - boolean (default: true)
 * @param datalist
 * @param {*} outlined       - boolean
 * @param {*} options       - autocomplete options
 * @param grayed
 * @param props
 */
export var Input = function Input(_ref) {
  var type = _ref.type,
    label = _ref.label,
    required = _ref.required,
    error = _ref.error,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? true : _ref$icon,
    labelInfo = _ref.labelInfo,
    datalist = _ref.datalist,
    options = _ref.options,
    outlined = _ref.outlined,
    grayed = _ref.grayed,
    props = _objectWithoutProperties(_ref, _excluded);
  var inputRef = useRef(null);
  var _useState = useState(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    openAutoComplete = _useState2[0],
    setOpenAutoComplete = _useState2[1];
  var errorClass = error ? 'error-field' : '';
  if (type === 'text' || type === 'tel') {
    return /*#__PURE__*/React.createElement("div", {
      className: 'w-full'
    }, label && /*#__PURE__*/React.createElement(Label, {
      label: label,
      required: required,
      info: labelInfo
    }), /*#__PURE__*/React.createElement("div", {
      className: styles['input-container']
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", _extends({
      type: type,
      className: "".concat(styles['input-element'], " ").concat(styles['input-text'], " ").concat(errorClass),
      required: required,
      style: {
        backgroundColor: grayed === 'grayish' && 'var(--grayish)' || grayed && 'var(--gray-x-light)',
        border: grayed && 0,
        color: grayed && 'var(--dark)'
      }
    }, props)))), /*#__PURE__*/React.createElement("div", null, error && /*#__PURE__*/React.createElement(Text, {
      variant: 'paragraph-tiny',
      className: 'error-field-text text-left'
    }, error)));
  }
  var focusInput = function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus();
      setOpenAutoComplete(true);
    }
  };
  var handleBlur = function handleBlur() {
    setOpenAutoComplete(undefined);
  };
  var handleFilterOption = function handleFilterOption(inputValue, option) {
    setOpenAutoComplete(undefined);
    return option.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
  };
  if (type === 'autocomplete') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, label && /*#__PURE__*/React.createElement(Label, {
      label: label,
      required: required,
      info: labelInfo
    }), /*#__PURE__*/React.createElement(AutoComplete, _extends({
      options: options,
      open: openAutoComplete,
      ref: inputRef,
      style: {
        width: '100%',
        height: 'auto'
      },
      onBlur: handleBlur,
      onFocus: function onFocus() {
        return setOpenAutoComplete(true);
      },
      filterOption: function filterOption(inputValue, option) {
        return handleFilterOption(inputValue, option);
      }
    }, props, {
      "data-testid": 'autocomplete-' + props['data-testid']
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "".concat(styles['input-element'], " ").concat(styles['input-text'], " ").concat(errorClass),
      "data-testid": props['data-testid']
    })), error && /*#__PURE__*/React.createElement(Text, {
      variant: 'paragraph-tiny',
      className: 'error-field-text'
    }, error), openAutoComplete ? /*#__PURE__*/React.createElement(IconChevronUp, {
      size: 8,
      className: styles['auto-complete-drop-icon']
    }) : /*#__PURE__*/React.createElement(IconChevronDown, {
      size: 8,
      className: styles['auto-complete-drop-icon'],
      onClick: focusInput
    }));
  }
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement(Label, {
    label: label,
    required: required,
    info: labelInfo
  }), /*#__PURE__*/React.createElement("div", {
    className: styles['input-container']
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles['input-url-email-container'], " ").concat(errorClass)
  }, icon && /*#__PURE__*/React.createElement("div", {
    className: styles['input-side'],
    style: {
      backgroundColor: outlined && 'transparent' || grayed === 'grayish' && 'var(--grayish)' || grayed && 'var(--gray-x-light)',
      border: grayed && 0,
      color: grayed && 'var(--dark)'
    }
  }, type === 'email' && /*#__PURE__*/React.createElement(IconEmail, null), type === 'password' && /*#__PURE__*/React.createElement(IconKey, null), type === 'search' && /*#__PURE__*/React.createElement(IconSearch, null), type === 'url' && /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-small'
  }, "https://")), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    style: {
      backgroundColor: grayed === 'grayish' && 'var(--grayish)' || grayed && 'var(--gray-x-light)',
      border: grayed && 0
    },
    className: "".concat(styles['input-element'], "\n              ").concat(styles['input-url-email'], " ").concat(!icon && 'rounded-sm', "\n            ").concat((outlined || grayed) && styles['outlined-input'])
  }, props)))), /*#__PURE__*/React.createElement("div", null, error && /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-tiny',
    className: 'error-field-text text-left'
  }, error)));
};
export default Input;
export var PhoneNumberInput = function PhoneNumberInput(_ref2) {
  var _ref2$label = _ref2.label,
    label = _ref2$label === void 0 ? '' : _ref2$label,
    _ref2$placeholder = _ref2.placeholder,
    placeholder = _ref2$placeholder === void 0 ? '' : _ref2$placeholder,
    _ref2$required = _ref2.required,
    required = _ref2$required === void 0 ? false : _ref2$required,
    _ref2$error = _ref2.error,
    error = _ref2$error === void 0 ? null : _ref2$error,
    type = _ref2.type,
    outlined = _ref2.outlined,
    _ref2$country = _ref2.country,
    country = _ref2$country === void 0 ? 'fr' : _ref2$country,
    _ref2$prefixIcon = _ref2.prefixIcon,
    prefixIcon = _ref2$prefixIcon === void 0 ? null : _ref2$prefixIcon,
    labelInfo = _ref2.labelInfo,
    grayed = _ref2.grayed,
    value = _ref2.value,
    onChange = _ref2.onChange,
    props = _objectWithoutProperties(_ref2, _excluded2);
  var errorClass = error ? 'error-field' : '';
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement(Label, {
    label: label,
    required: required,
    info: labelInfo
  }), /*#__PURE__*/React.createElement("div", {
    className: styles['input-container']
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles['input-url-email-container'], " ").concat(errorClass)
  }, prefixIcon && /*#__PURE__*/React.createElement("div", {
    className: styles['input-side'],
    style: {
      backgroundColor: outlined && 'transparent' || grayed && 'var(--gray-x-light)',
      border: grayed && 0,
      color: grayed && 'var(--dark)'
    }
  }, prefixIcon), /*#__PURE__*/React.createElement(PhoneInput, _extends({
    specialLabel: "",
    country: country,
    className: "".concat(styles['input-element'], " ").concat(styles['input-text'], " ").concat(errorClass),
    inputStyle: {
      width: '100%'
    },
    placeholder: placeholder,
    onChange: onChange,
    value: value
  }, props)))), /*#__PURE__*/React.createElement("div", null, error && /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-tiny',
    className: 'error-field-text text-left'
  }, error)));
};
Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'url', 'autocomplete', 'password', 'search']),
  label: PropTypes.string,
  required: PropTypes.bool
};
export { default as ListInput } from './ListInput';