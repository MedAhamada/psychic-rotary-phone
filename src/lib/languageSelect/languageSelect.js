var _excluded = ["onSelect"];
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { Fragment, useEffect, useState } from 'react';
import styles from './languageSelect.module.css';
import PropTypes from 'prop-types';
import { IconChevronDown, IconFlagES, IconFlagFR, IconFlagUK } from '../icons';
import Label from '../label/label';

/**
 * A language dropdown component.
 *
 */
export var LanguageSelect = function LanguageSelect(_ref) {
  var onSelect = _ref.onSelect,
    props = _objectWithoutProperties(_ref, _excluded);
  var list = [{
    icon: /*#__PURE__*/React.createElement(IconFlagFR, null),
    name: 'Français',
    value: 'fr'
  }, {
    icon: /*#__PURE__*/React.createElement(IconFlagUK, null),
    name: 'Anglais',
    value: 'en'
  }, {
    icon: /*#__PURE__*/React.createElement(IconFlagES, null),
    name: 'Espagnol',
    value: 'es'
  }
  /*
  { icon: <IconFlagIT />, name: 'Allemand', value: 'allemand' },
  */];
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showDropdown = _useState2[0],
    setShowDropdown = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    activeItems = _useState4[0],
    setActiveItems = _useState4[1];
  var handleItemClick = function handleItemClick(value) {
    if (activeItems.includes(value)) {
      setActiveItems(activeItems.filter(function (item) {
        return item !== value;
      }));
    } else {
      setActiveItems([].concat(_toConsumableArray(activeItems), [value]));
    }
  };
  var handleArrowButtonClick = function handleArrowButtonClick(event) {
    event.stopPropagation();
    setShowDropdown(!showDropdown);
  };
  useEffect(function () {
    onSelect(activeItems);
  }, [activeItems, onSelect]);
  return /*#__PURE__*/React.createElement("div", null, props.label && /*#__PURE__*/React.createElement(Label, {
    label: props.label
  }), /*#__PURE__*/React.createElement("div", {
    className: styles['language-dropdown-container'],
    style: {
      width: '100%'
    }
  }, list.map(function (item) {
    var isActive = activeItems.includes(item.value);
    if (item.value === 'fr') {
      return /*#__PURE__*/React.createElement("button", {
        className: "".concat(styles['language-dropdown-button'], " ").concat(isActive && styles['active']),
        type: "button",
        key: item.name,
        onClick: function onClick() {
          return handleItemClick(item.value);
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: styles['language-dropdown-info']
      }, item.icon, /*#__PURE__*/React.createElement("span", null, item.name)), /*#__PURE__*/React.createElement("span", {
        onClick: handleArrowButtonClick,
        onKeyDown: function onKeyDown(e) {
          console.log(e);
        },
        className: styles['language-dropdown-arrow']
      }, /*#__PURE__*/React.createElement(IconChevronDown, {
        size: 8,
        style: {
          right: '45%',
          position: 'absolute'
        }
      })));
    }
    return /*#__PURE__*/React.createElement(Fragment, {
      key: item.name
    }, showDropdown && /*#__PURE__*/React.createElement("button", {
      className: "".concat(styles['language-dropdown-button'], " ").concat(isActive && styles['active']),
      type: "button",
      onClick: function onClick() {
        return handleItemClick(item.value);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: styles['language-dropdown-info']
    }, item.icon, /*#__PURE__*/React.createElement("span", null, item.name))));
  })));
};
LanguageSelect.propTypes = {
  onSelect: PropTypes.func
};
export default LanguageSelect;