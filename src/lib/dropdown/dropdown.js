import _objectWithoutPropertiesLoose from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js";
var _excluded = ["name", "options", "label", "placeholder", "width", "onChange", "error", "required", "labelInfo", "value"],
  _excluded2 = ["name", "error", "options", "label", "onChange", "value", "width", "required", "placeholder", "labelInfo", "displayLabel"],
  _excluded3 = ["name", "items", "label", "onChange", "width", "required", "value", "error", "labelInfo", "buttonClassName", "hoverPrimary"],
  _excluded4 = ["name", "items", "label", "onChange", "value", "width", "required", "error", "labelInfo"];
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/dropdown/dropdown.jsx",
  _this = this;
import "core-js/modules/es.array.find.js";
import "core-js/modules/es.array.includes.js";
import "core-js/modules/es.array.join.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.object.assign.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.string.includes.js";
import React, { useEffect, useRef, useState } from 'react';
import { ButtonDropdown } from '../button/button';
import { Checkbox, Radio, Space, Dropdown as AntDropdown, Select } from 'antd';
import PropTypes from 'prop-types';
import styles from './dropdown.module.css';
import Text from '../text/text';
import Label from '../label/label';
import { IconChevronDown } from '../icons';
import { Loader } from '../loader/loader';

/**
 * Radio Dropdown
 * @param  options    - Array: [{ name: string | number, value: string | number }]
 * @param  label      - string
 * @param  value      - Selected item
 * @param  onChange   - Callback
 * @param  error      - string
 * @param  required   - bool
 * @param  name       - string
 * @param  placeholder - string
 * @param  width      - If not set, 100% by default
 */
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import { Fragment as _Fragment } from "react/jsx-dev-runtime";
export var RadioDropdown = function RadioDropdown(_ref) {
  var name = _ref.name,
    options = _ref.options,
    label = _ref.label,
    placeholder = _ref.placeholder,
    width = _ref.width,
    onChange = _ref.onChange,
    error = _ref.error,
    required = _ref.required,
    labelInfo = _ref.labelInfo,
    value = _ref.value,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _useState = useState(false),
    showDropdown = _useState[0],
    setShowDropdown = _useState[1];
  var _useState2 = useState(),
    valueOption = _useState2[0],
    setValueOption = _useState2[1]; // onlu for story book test
  var _useState3 = useState(null),
    buttonText = _useState3[0],
    setButtonText = _useState3[1];
  var errorClass = error ? 'error-field' : '';
  var menuRef = useRef(null);
  var menuButtonRef = useRef(null);
  var handleChange = function handleChange(e) {
    setValueOption(e.target.value);
    onChange(e);
  };
  var handleBlurMenu = function handleBlurMenu(event) {
    if (menuRef.current && menuButtonRef.current && !menuRef.current.contains(event.target) && !menuButtonRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };
  useEffect(function () {
    document.addEventListener('click', handleBlurMenu);
  }, []);
  return /*#__PURE__*/_jsxDEV("div", {
    style: {
      width: width
    },
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: 'dropdown-container',
      children: [label && /*#__PURE__*/_jsxDEV(Label, {
        label: label,
        required: required,
        info: labelInfo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 19
      }, _this), /*#__PURE__*/_jsxDEV("span", {
        ref: menuButtonRef,
        children: /*#__PURE__*/_jsxDEV(ButtonDropdown, Object.assign({
          placeholder: placeholder,
          text: buttonText ? buttonText : value,
          onClick: function onClick(e) {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          },
          open: showDropdown,
          className: errorClass
        }, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this), showDropdown && /*#__PURE__*/_jsxDEV("div", {
      className: styles['radio-dropdown'],
      ref: menuRef,
      children: /*#__PURE__*/_jsxDEV("div", {
        className: styles['radio-dropdown-options'],
        children: /*#__PURE__*/_jsxDEV(Radio.Group, {
          defaultValue: value,
          onChange: handleChange,
          className: "w-full",
          children: /*#__PURE__*/_jsxDEV(Space, {
            direction: "vertical",
            className: "w-full",
            children: options.map(function (option, index) {
              return /*#__PURE__*/_jsxDEV(Radio, {
                name: name,
                value: option.value,
                className: styles['dropdown-radio-item'] + " " + (option.value === valueOption && styles['checked']),
                onChange: function onChange() {
                  return setButtonText(option.label);
                },
                children: option.label
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }, _this), error && /*#__PURE__*/_jsxDEV(Text, {
      variant: 'paragraph-tiny',
      className: 'error-field-text',
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, _this);
};
RadioDropdown.propTypes = {};

/**
 * Checkbox Dropdown
 * @param name
 * @param  options    - Array: [{ name: string | number, value: string | number }]
 * @param  label      - string
 * @param  value      - Selected items
 * @param  onChange   - Callback
 * @param  width      - If not set, 100% by default
 * @param props
 */
export var CheckboxDropdown = function CheckboxDropdown(_ref2) {
  var name = _ref2.name,
    error = _ref2.error,
    options = _ref2.options,
    label = _ref2.label,
    onChange = _ref2.onChange,
    value = _ref2.value,
    width = _ref2.width,
    required = _ref2.required,
    placeholder = _ref2.placeholder,
    labelInfo = _ref2.labelInfo,
    displayLabel = _ref2.displayLabel,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  var _useState4 = useState(false),
    showDropdown = _useState4[0],
    setShowDropdown = _useState4[1];
  var errorClass = error ? 'error-field' : '';
  var menuRef = useRef(null);
  var menuButtonRef = useRef(null);
  var handleBlurMenu = function handleBlurMenu(event) {
    if (menuRef.current && menuButtonRef.current && !menuRef.current.contains(event.target) && !menuButtonRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };
  useEffect(function () {
    document.addEventListener('click', handleBlurMenu);
    return function () {
      document.removeEventListener('click', handleBlurMenu);
    };
  }, []);
  var handleChange = function handleChange(e) {
    onChange(e);
  };
  return /*#__PURE__*/_jsxDEV("div", {
    style: {
      width: width
    },
    children: [label && /*#__PURE__*/_jsxDEV(Label, {
      label: label,
      required: required,
      info: labelInfo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 17
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      className: "",
      ref: menuButtonRef,
      children: /*#__PURE__*/_jsxDEV(ButtonDropdown, {
        placeholder: placeholder,
        text: value.length && displayLabel ? /*#__PURE__*/_jsxDEV("div", {
          className: "flex-y-center gap-sm",
          children: value.map(function (val) {
            return options.find(function (opt) {
              return opt.value === val;
            }).label;
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 15
        }, _this) : value.join(', '),
        onClick: function onClick(e) {
          e.preventDefault();
          setShowDropdown(!showDropdown);
        },
        open: showDropdown,
        className: errorClass,
        "data-testid": props['data-testid'] || 'checkbox-dropdown'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }, _this), showDropdown && /*#__PURE__*/_jsxDEV("div", {
      className: styles['radio-dropdown'],
      children: /*#__PURE__*/_jsxDEV("div", {
        className: styles['radio-dropdown-options'],
        children: /*#__PURE__*/_jsxDEV(Checkbox.Group, Object.assign({
          className: "w-full",
          onChange: handleChange,
          value: value
        }, props, {
          ref: menuRef,
          children: /*#__PURE__*/_jsxDEV(Space, {
            direction: "vertical",
            className: "w-full",
            children: options.map(function (option, index) {
              return /*#__PURE__*/_jsxDEV(Checkbox, {
                name: name,
                value: option.value,
                className: styles['dropdown-radio-item'] + " flex-y-center " + (value.includes(option.value) && styles['checked']),
                checked: true,
                disabled: option.disabled,
                children: option.label
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 15
          }, _this)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      children: error && /*#__PURE__*/_jsxDEV(Text, {
        variant: 'paragraph-tiny',
        className: 'error-field-text text-left',
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 168,
    columnNumber: 5
  }, _this);
};
CheckboxDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  width: PropTypes.string
};
export default CheckboxDropdown;

/**
 * Dropdown
 * @param name
 * @param  items    - Array: [{ name: string | number, value: string | number }]
 * @param  label      - string
 * @param  value      - Selected items
 * @param  onChange   - Callback
 * @param  width      - If not set, 100% by default
 * @param props
 */
export var Dropdown = function Dropdown(_ref3) {
  var name = _ref3.name,
    items = _ref3.items,
    _ref3$label = _ref3.label,
    label = _ref3$label === void 0 ? '' : _ref3$label,
    onChange = _ref3.onChange,
    width = _ref3.width,
    required = _ref3.required,
    value = _ref3.value,
    error = _ref3.error,
    labelInfo = _ref3.labelInfo,
    buttonClassName = _ref3.buttonClassName,
    hoverPrimary = _ref3.hoverPrimary,
    props = _objectWithoutPropertiesLoose(_ref3, _excluded3);
  var _useState5 = useState(false),
    showDropdown = _useState5[0],
    setShowDropdown = _useState5[1];
  var handleChange = function handleChange(key) {
    onChange(key);
    setShowDropdown(false);
  };
  var _items = items.map(function (_ref4) {
    var label = _ref4.label,
      key = _ref4.key,
      disabled = _ref4.disabled;
    return {
      label: /*#__PURE__*/_jsxDEV("button", {
        className: "w-full px-sm py-sm btn-dropdown-item",
        onClick: function onClick() {
          return handleChange(key);
        },
        "data-testid": "dropdown-item-" + key,
        disabled: disabled,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 9
      }, _this),
      key: key
    };
  });
  return /*#__PURE__*/_jsxDEV("div", {
    style: {
      width: width
    },
    children: [label && /*#__PURE__*/_jsxDEV(Label, {
      label: label,
      required: required,
      info: labelInfo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 17
    }, _this), /*#__PURE__*/_jsxDEV(AntDropdown, {
      menu: {
        items: _items,
        className: styles['radio-dropdown-options']
      },
      trigger: ['click'],
      open: showDropdown,
      onOpenChange: function onOpenChange() {
        return setShowDropdown(!showDropdown);
      },
      overlayClassName: hoverPrimary ? 'hover-primary' : '',
      children: /*#__PURE__*/_jsxDEV(ButtonDropdown, Object.assign({
        placeholder: label,
        text: value,
        onClick: function onClick(e) {
          e.preventDefault();
          setShowDropdown(!showDropdown);
        },
        open: showDropdown,
        style: {
          border: error && '1px solid var(--red)'
        },
        className: buttonClassName
      }, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 7
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      children: error && /*#__PURE__*/_jsxDEV(Text, {
        variant: 'paragraph-tiny',
        className: 'error-field-text text-left',
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 295,
    columnNumber: 5
  }, _this);
};
Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  width: PropTypes.string
};

/**
 * Dropdown
 * @param name
 * @param  items    - Array: [{ name: string | number, value: string | number }]
 * @param  label      - string
 * @param  value      - Selected items
 * @param  onChange   - Callback
 * @param  width      - If not set, 100% by default
 * @param required
 * @param error
 * @param props
 */
export var DropdownSearch = function DropdownSearch(_ref5) {
  var name = _ref5.name,
    items = _ref5.items,
    label = _ref5.label,
    onChange = _ref5.onChange,
    value = _ref5.value,
    width = _ref5.width,
    required = _ref5.required,
    error = _ref5.error,
    labelInfo = _ref5.labelInfo,
    props = _objectWithoutPropertiesLoose(_ref5, _excluded4);
  var handleChange = function handleChange(item) {
    onChange(item);
  };
  return /*#__PURE__*/_jsxDEV("div", {
    style: {
      width: width
    },
    children: [label && /*#__PURE__*/_jsxDEV(Label, {
      label: label,
      required: required,
      info: labelInfo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 17
    }, _this), /*#__PURE__*/_jsxDEV(Select, Object.assign({
      showSearch: true,
      placeholder: label,
      "data-testid": label,
      className: styles['select-dropdown-antd'],
      optionFilterProp: "children",
      filterOption: function filterOption(input, option) {
        var _option$label$toLower;
        return ((_option$label$toLower = option == null ? void 0 : option.label.toLowerCase()) != null ? _option$label$toLower : '').includes(input.toLowerCase());
      },
      filterSort: function filterSort(optionA, optionB) {
        var _optionA$label, _optionB$label;
        return ((_optionA$label = optionA == null ? void 0 : optionA.label) != null ? _optionA$label : '').toLowerCase().localeCompare(((_optionB$label = optionB == null ? void 0 : optionB.label) != null ? _optionB$label : '').toLowerCase());
      },
      options: items,
      suffixIcon: /*#__PURE__*/_jsxDEV(_Fragment, {
        children: [items.length === 0 && /*#__PURE__*/_jsxDEV(Loader, {
          size: 24
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 36
        }, _this), /*#__PURE__*/_jsxDEV(IconChevronDown, {
          size: 8,
          style: {
            color: 'var(--dark)'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 13
        }, _this)]
      }, void 0, true),
      value: value || undefined,
      onChange: handleChange
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 7
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      children: error && /*#__PURE__*/_jsxDEV(Text, {
        variant: 'paragraph-tiny',
        className: 'error-field-text text-left',
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 369,
    columnNumber: 5
  }, _this);
};
DropdownSearch.propTypes = {
  items: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  width: PropTypes.string
};