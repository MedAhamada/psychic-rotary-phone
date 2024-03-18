import _objectWithoutPropertiesLoose from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js";
var _excluded = ["type", "label", "required", "error", "icon", "labelInfo", "datalist", "options", "outlined", "grayed"],
  _excluded2 = ["label", "placeholder", "required", "error", "type", "outlined", "country", "prefixIcon", "labelInfo", "grayed", "value", "onChange"];
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/input/input.jsx",
  _this = this;
import "core-js/modules/es.array.index-of.js";
import "core-js/modules/es.object.assign.js";
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
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
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
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var inputRef = useRef(null);
  var _useState = useState(undefined),
    openAutoComplete = _useState[0],
    setOpenAutoComplete = _useState[1];
  var errorClass = error ? 'error-field' : '';
  if (type === 'text' || type === 'tel') {
    return /*#__PURE__*/_jsxDEV("div", {
      className: 'w-full',
      children: [label && /*#__PURE__*/_jsxDEV(Label, {
        label: label,
        required: required,
        info: labelInfo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }, _this), /*#__PURE__*/_jsxDEV("div", {
        className: styles['input-container'],
        children: /*#__PURE__*/_jsxDEV("div", {
          children: /*#__PURE__*/_jsxDEV("input", Object.assign({
            type: type,
            className: styles['input-element'] + " " + styles['input-text'] + " " + errorClass,
            required: required,
            style: {
              backgroundColor: grayed === 'grayish' && 'var(--grayish)' || grayed && 'var(--gray-x-light)',
              border: grayed && 0,
              color: grayed && 'var(--dark)'
            }
          }, props), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV("div", {
        children: error && /*#__PURE__*/_jsxDEV(Text, {
          variant: 'paragraph-tiny',
          className: 'error-field-text text-left',
          children: error
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this);
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
    return /*#__PURE__*/_jsxDEV("div", {
      style: {
        position: 'relative'
      },
      children: [label && /*#__PURE__*/_jsxDEV(Label, {
        label: label,
        required: required,
        info: labelInfo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 19
      }, _this), /*#__PURE__*/_jsxDEV(AutoComplete, Object.assign({
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
        "data-testid": 'autocomplete-' + props['data-testid'],
        children: /*#__PURE__*/_jsxDEV("input", {
          type: "text",
          className: styles['input-element'] + " " + styles['input-text'] + " " + errorClass,
          "data-testid": props['data-testid']
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, _this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, _this), error && /*#__PURE__*/_jsxDEV(Text, {
        variant: 'paragraph-tiny',
        className: 'error-field-text',
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }, _this), openAutoComplete ? /*#__PURE__*/_jsxDEV(IconChevronUp, {
        size: 8,
        className: styles['auto-complete-drop-icon']
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 11
      }, _this) : /*#__PURE__*/_jsxDEV(IconChevronDown, {
        size: 8,
        className: styles['auto-complete-drop-icon'],
        onClick: focusInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, _this);
  }
  return /*#__PURE__*/_jsxDEV("div", {
    children: [label && /*#__PURE__*/_jsxDEV(Label, {
      label: label,
      required: required,
      info: labelInfo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      className: styles['input-container'],
      children: /*#__PURE__*/_jsxDEV("div", {
        className: styles['input-url-email-container'] + " " + errorClass,
        children: [icon && /*#__PURE__*/_jsxDEV("div", {
          className: styles['input-side'],
          style: {
            backgroundColor: outlined && 'transparent' || grayed === 'grayish' && 'var(--grayish)' || grayed && 'var(--gray-x-light)',
            border: grayed && 0,
            color: grayed && 'var(--dark)'
          },
          children: [type === 'email' && /*#__PURE__*/_jsxDEV(IconEmail, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 36
          }, _this), type === 'password' && /*#__PURE__*/_jsxDEV(IconKey, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 39
          }, _this), type === 'search' && /*#__PURE__*/_jsxDEV(IconSearch, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 37
          }, _this), type === 'url' && /*#__PURE__*/_jsxDEV(Text, {
            variant: 'paragraph-small',
            children: "https://"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 13
        }, _this), /*#__PURE__*/_jsxDEV("input", Object.assign({
          type: type,
          style: {
            backgroundColor: grayed === 'grayish' && 'var(--grayish)' || grayed && 'var(--gray-x-light)',
            border: grayed && 0
          },
          className: styles['input-element'] + "\n              " + styles['input-url-email'] + " " + (!icon && 'rounded-sm') + "\n            " + ((outlined || grayed) && styles['outlined-input'])
        }, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      children: error && /*#__PURE__*/_jsxDEV(Text, {
        variant: 'paragraph-tiny',
        className: 'error-field-text text-left',
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 146,
    columnNumber: 5
  }, _this);
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
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  var errorClass = error ? 'error-field' : '';
  return /*#__PURE__*/_jsxDEV("div", {
    children: [label && /*#__PURE__*/_jsxDEV(Label, {
      label: label,
      required: required,
      info: labelInfo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      className: styles['input-container'],
      children: /*#__PURE__*/_jsxDEV("div", {
        className: styles['input-url-email-container'] + " " + errorClass,
        children: [prefixIcon && /*#__PURE__*/_jsxDEV("div", {
          className: styles['input-side'],
          style: {
            backgroundColor: outlined && 'transparent' || grayed && 'var(--gray-x-light)',
            border: grayed && 0,
            color: grayed && 'var(--dark)'
          },
          children: prefixIcon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 13
        }, _this), /*#__PURE__*/_jsxDEV(PhoneInput, Object.assign({
          specialLabel: "",
          country: country,
          className: styles['input-element'] + " " + styles['input-text'] + " " + errorClass,
          inputStyle: {
            width: '100%'
          },
          placeholder: placeholder,
          onChange: onChange,
          value: value
        }, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 7
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      children: error && /*#__PURE__*/_jsxDEV(Text, {
        variant: 'paragraph-tiny',
        className: 'error-field-text text-left',
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 219,
    columnNumber: 5
  }, _this);
};
Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'url', 'autocomplete', 'password', 'search']),
  label: PropTypes.string,
  required: PropTypes.bool
};
export { default as ListInput } from './ListInput';