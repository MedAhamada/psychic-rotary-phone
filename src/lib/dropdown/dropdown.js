var _excluded = ["name", "options", "label", "placeholder", "width", "onChange", "error", "required", "labelInfo", "value"],
  _excluded2 = ["name", "error", "options", "label", "onChange", "value", "width", "required", "placeholder", "labelInfo", "displayLabel"],
  _excluded3 = ["name", "items", "label", "onChange", "width", "required", "value", "error", "labelInfo", "buttonClassName", "hoverPrimary"],
  _excluded4 = ["name", "items", "label", "onChange", "value", "width", "required", "error", "labelInfo"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showDropdown = _useState2[0],
    setShowDropdown = _useState2[1];
  var _useState3 = useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    valueOption = _useState4[0],
    setValueOption = _useState4[1]; // onlu for story book test
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    buttonText = _useState6[0],
    setButtonText = _useState6[1];
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: width
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: 'dropdown-container'
  }, label && /*#__PURE__*/React.createElement(Label, {
    label: label,
    required: required,
    info: labelInfo
  }), /*#__PURE__*/React.createElement("span", {
    ref: menuButtonRef
  }, /*#__PURE__*/React.createElement(ButtonDropdown, _extends({
    placeholder: placeholder,
    text: buttonText ? buttonText : value,
    onClick: function onClick(e) {
      e.preventDefault();
      setShowDropdown(!showDropdown);
    },
    open: showDropdown,
    className: errorClass
  }, props)))), showDropdown && /*#__PURE__*/React.createElement("div", {
    className: styles['radio-dropdown'],
    ref: menuRef
  }, /*#__PURE__*/React.createElement("div", {
    className: styles['radio-dropdown-options']
  }, /*#__PURE__*/React.createElement(Radio.Group, {
    defaultValue: value,
    onChange: handleChange,
    className: "w-full"
  }, /*#__PURE__*/React.createElement(Space, {
    direction: "vertical",
    className: "w-full"
  }, options.map(function (option, index) {
    return /*#__PURE__*/React.createElement(Radio, {
      name: name,
      key: index,
      value: option.value,
      className: "".concat(styles['dropdown-radio-item'], " ").concat(option.value === valueOption && styles['checked']),
      onChange: function onChange() {
        return setButtonText(option.label);
      }
    }, option.label);
  }))))), error && /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-tiny',
    className: 'error-field-text'
  }, error));
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
    props = _objectWithoutProperties(_ref2, _excluded2);
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showDropdown = _useState8[0],
    setShowDropdown = _useState8[1];
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: width
    }
  }, label && /*#__PURE__*/React.createElement(Label, {
    label: label,
    required: required,
    info: labelInfo
  }), /*#__PURE__*/React.createElement("div", {
    className: "",
    ref: menuButtonRef
  }, /*#__PURE__*/React.createElement(ButtonDropdown, {
    placeholder: placeholder,
    text: value.length && displayLabel ? /*#__PURE__*/React.createElement("div", {
      className: "flex-y-center gap-sm"
    }, value.map(function (val) {
      return options.find(function (opt) {
        return opt.value === val;
      }).label;
    })) : value.join(', '),
    onClick: function onClick(e) {
      e.preventDefault();
      setShowDropdown(!showDropdown);
    },
    open: showDropdown,
    className: errorClass,
    "data-testid": props['data-testid'] || 'checkbox-dropdown'
  })), showDropdown && /*#__PURE__*/React.createElement("div", {
    className: styles['radio-dropdown']
  }, /*#__PURE__*/React.createElement("div", {
    className: styles['radio-dropdown-options']
  }, /*#__PURE__*/React.createElement(Checkbox.Group, _extends({
    className: "w-full",
    onChange: handleChange,
    value: value
  }, props, {
    ref: menuRef
  }), /*#__PURE__*/React.createElement(Space, {
    direction: "vertical",
    className: "w-full"
  }, options.map(function (option, index) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      name: name,
      key: index,
      value: option.value,
      className: "".concat(styles['dropdown-radio-item'], " flex-y-center ").concat(value.includes(option.value) && styles['checked']),
      checked: true,
      disabled: option.disabled
    }, option.label);
  }))))), /*#__PURE__*/React.createElement("div", null, error && /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-tiny',
    className: 'error-field-text text-left'
  }, error)));
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
    props = _objectWithoutProperties(_ref3, _excluded3);
  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    showDropdown = _useState10[0],
    setShowDropdown = _useState10[1];
  var handleChange = function handleChange(key) {
    onChange(key);
    setShowDropdown(false);
  };
  var _items = items.map(function (_ref4) {
    var label = _ref4.label,
      key = _ref4.key,
      disabled = _ref4.disabled;
    return {
      label: /*#__PURE__*/React.createElement("button", {
        className: "w-full px-sm py-sm btn-dropdown-item",
        onClick: function onClick() {
          return handleChange(key);
        },
        "data-testid": "dropdown-item-".concat(key),
        disabled: disabled
      }, label),
      key: key
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: width
    }
  }, label && /*#__PURE__*/React.createElement(Label, {
    label: label,
    required: required,
    info: labelInfo
  }), /*#__PURE__*/React.createElement(AntDropdown, {
    menu: {
      items: _items,
      className: styles['radio-dropdown-options']
    },
    trigger: ['click'],
    open: showDropdown,
    onOpenChange: function onOpenChange() {
      return setShowDropdown(!showDropdown);
    },
    overlayClassName: hoverPrimary ? 'hover-primary' : ''
  }, /*#__PURE__*/React.createElement(ButtonDropdown, _extends({
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
  }, props))), /*#__PURE__*/React.createElement("div", null, error && /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-tiny',
    className: 'error-field-text text-left'
  }, error)));
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
    props = _objectWithoutProperties(_ref5, _excluded4);
  var handleChange = function handleChange(item) {
    onChange(item);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: width
    }
  }, label && /*#__PURE__*/React.createElement(Label, {
    label: label,
    required: required,
    info: labelInfo
  }), /*#__PURE__*/React.createElement(Select, _extends({
    showSearch: true,
    placeholder: label,
    "data-testid": label,
    className: styles['select-dropdown-antd'],
    optionFilterProp: "children",
    filterOption: function filterOption(input, option) {
      var _option$label$toLower;
      return ((_option$label$toLower = option === null || option === void 0 ? void 0 : option.label.toLowerCase()) !== null && _option$label$toLower !== void 0 ? _option$label$toLower : '').includes(input.toLowerCase());
    },
    filterSort: function filterSort(optionA, optionB) {
      var _optionA$label, _optionB$label;
      return ((_optionA$label = optionA === null || optionA === void 0 ? void 0 : optionA.label) !== null && _optionA$label !== void 0 ? _optionA$label : '').toLowerCase().localeCompare(((_optionB$label = optionB === null || optionB === void 0 ? void 0 : optionB.label) !== null && _optionB$label !== void 0 ? _optionB$label : '').toLowerCase());
    },
    options: items,
    suffixIcon: /*#__PURE__*/React.createElement(React.Fragment, null, items.length === 0 && /*#__PURE__*/React.createElement(Loader, {
      size: 24
    }), /*#__PURE__*/React.createElement(IconChevronDown, {
      size: 8,
      style: {
        color: 'var(--dark)'
      }
    })),
    value: value || undefined,
    onChange: handleChange
  }, props)), /*#__PURE__*/React.createElement("div", null, error && /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-tiny',
    className: 'error-field-text text-left'
  }, error)));
};
DropdownSearch.propTypes = {
  items: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  width: PropTypes.string
};