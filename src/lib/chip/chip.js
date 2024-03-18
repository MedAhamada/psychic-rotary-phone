var _excluded = ["title", "subtitle", "img"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useEffect, useRef, useState } from 'react';
import Text from '../text/text';
import Badge from '../badge/badge';
import { IconChevronRight, IconInfo } from '../icons';
import { Popover, Radio, Space } from 'antd';
import styles from './chip.module.css';
export var MemberChip = function MemberChip(_ref) {
  var imgSrc = _ref.imgSrc,
    name = _ref.name,
    staff = _ref.staff,
    status = _ref.status;
  return /*#__PURE__*/React.createElement("div", {
    className: 'team-member-chip'
  }, /*#__PURE__*/React.createElement("div", {
    className: "chip-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: imgSrc,
    alt: "".concat(name)
  })), /*#__PURE__*/React.createElement("div", {
    className: "chip-info"
  }, /*#__PURE__*/React.createElement(Text, {
    variant: 'heading-5'
  }, name), /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-tiny'
  }, staff)), status === 'active' && /*#__PURE__*/React.createElement(Badge, {
    variant: "green",
    text: "Active",
    className: 'ship-badge'
  }), status === 'pending' && /*#__PURE__*/React.createElement(Badge, {
    variant: "yellow",
    text: "Pending invitation",
    className: 'ship-badge'
  }), status === 'inactive' && /*#__PURE__*/React.createElement(Badge, {
    variant: "red",
    text: "Inactive",
    className: 'ship-badge'
  }));
};
export var WorkspaceChip = function WorkspaceChip(_ref2) {
  var title = _ref2.title,
    subtitle = _ref2.subtitle,
    img = _ref2.img,
    props = _objectWithoutProperties(_ref2, _excluded);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "workspace-chip flex-between-center"
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "workspace-chip-content flex-y-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-col-start"
  }, /*#__PURE__*/React.createElement(Text, {
    variant: 'heading-4',
    align: 'left'
  }, title), /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-tiny',
    align: 'left'
  }, subtitle))), /*#__PURE__*/React.createElement("span", {
    className: 'p-xs'
  }, /*#__PURE__*/React.createElement(IconChevronRight, {
    size: 12
  })));
};
export var ToolChip = function ToolChip(_ref3) {
  var imgSrc = _ref3.imgSrc,
    active = _ref3.active,
    onChangeHandle = _ref3.onChangeHandle,
    popoverContent = _ref3.popoverContent,
    isClickable = _ref3.isClickable,
    status = _ref3.status,
    disabled = _ref3.disabled,
    icon = _ref3.icon,
    name = _ref3.name,
    headline = _ref3.headline,
    _ref3$options = _ref3.options,
    options = _ref3$options === void 0 ? [] : _ref3$options,
    onClick = _ref3.onClick;
  var menuRef = useRef(null);
  var menuButtonRef = useRef(null);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    openMenu = _useState2[0],
    setOpenMenu = _useState2[1];
  var _useState3 = useState(active),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var handleBlurMenu = function handleBlurMenu(event) {
    if (menuRef.current && menuButtonRef.current && !menuRef.current.contains(event.target) && !menuButtonRef.current.contains(event.target)) {
      setOpenMenu(false);
    }
  };
  useEffect(function () {
    document.addEventListener('click', handleBlurMenu);
    return function () {
      document.removeEventListener('click', handleBlurMenu);
    };
  }, []);
  var _onChange = function onChange(optionValue) {
    setValue(optionValue);
    onChangeHandle(optionValue);
    setOpenMenu(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-y-center gap-sm"
  }, /*#__PURE__*/React.createElement("button", {
    className: "flex-y-center gap-sm ".concat(!onClick && 'cursor-default'),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex-center ".concat(styles['tool-chip-image']),
    style: {
      backgroundImage: imgSrc
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "text-left"
  }, /*#__PURE__*/React.createElement(Text, {
    variant: 'heading-4'
  }, name), /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-tiny',
    className: 'color-gray-dark'
  }, headline))), /*#__PURE__*/React.createElement("div", {
    className: "relative ml-auto"
  }, isClickable ? /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setOpenMenu(!openMenu);
    },
    disabled: disabled,
    ref: menuButtonRef
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: disabled ? 'grey' : active ? 'green' : 'blue-light',
    text: status,
    size: 'large'
  })) : /*#__PURE__*/React.createElement(Popover, {
    content: disabled && popoverContent
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: disabled ? 'grey' : active ? 'green' : 'blue-light',
    text: status,
    size: 'large'
  })), openMenu && /*#__PURE__*/React.createElement("div", {
    className: "absolute bg-white-shadow rounded-sm p-base my-xs",
    style: {
      zIndex: 555
    },
    ref: menuRef
  }, /*#__PURE__*/React.createElement(Radio.Group, {
    value: value
  }, /*#__PURE__*/React.createElement(Space, {
    direction: "vertical"
  }, options === null || options === void 0 ? void 0 : options.map(function (option, index) {
    return /*#__PURE__*/React.createElement(Radio, {
      name: 'status',
      key: index,
      value: option.value,
      onChange: function onChange() {
        return _onChange(option.value);
      }
    }, option.label);
  }))))));
};
export var TeamMemberChip = function TeamMemberChip(_ref4) {
  var name = _ref4.name,
    staff = _ref4.staff,
    image = _ref4.image,
    status = _ref4.status;
  return /*#__PURE__*/React.createElement(Popover, {
    placement: "top",
    content: name.length > 30 ? name : '',
    trigger: "hover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles['team-member-chip'], " p-md rounded-md flex-y-center gap-sm")
  }, /*#__PURE__*/React.createElement("div", {
    className: styles['member-image']
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name
  }), status && /*#__PURE__*/React.createElement("span", {
    className: styles["status-dot-".concat(status)]
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-col gap-xs"
  }, /*#__PURE__*/React.createElement(Text, {
    variant: 'heading-3',
    className: styles['text-team']
  }, name), /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-small'
  }, staff))));
};