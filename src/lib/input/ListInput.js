var _excluded = ["label", "labelInfo", "limit", "required", "placeholder", "onInserted", "defaultItems", "error"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Text from '../text/text';
import styles from './input.module.css';
import Label from '../label/label';

/**
 * @param {Object} props The props of the component
 * @param {string} props.label
 * @param {number} props.limit
 * @param {boolean} props.required
 * @param {string} props.placeholder
 * @param {string} props.labelInfo
 * @param {function} props.onInserted
 * @return {JSX.Element}
 * @example
 * <ListInput
 *    label={'Lorem ipsum'}
 *    labelInfo={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
 *    placeholder={'Lorem ipsum dolor'}
 *    required={true}
 *    limit={20}
 *    onInserted={(list) => console.log(list)}
 * />
 */
var ListInput = function ListInput(_ref) {
  var label = _ref.label,
    labelInfo = _ref.labelInfo,
    limit = _ref.limit,
    required = _ref.required,
    placeholder = _ref.placeholder,
    onInserted = _ref.onInserted,
    defaultItems = _ref.defaultItems,
    error = _ref.error,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(defaultItems || []),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    item = _useState4[0],
    setItem = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    pasted = _useState6[0],
    setPasted = _useState6[1];
  var pushLink = function pushLink() {
    if (item) {
      var newItems = [].concat(_toConsumableArray(items), [item]);
      setItems(newItems);
      onInserted(newItems);
      setItem('');
    }
  };
  var handlePushLink = function handlePushLink(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      pushLink();
    } else if (e.key === 'Backspace' && !item && items.length > 0) {
      var poppedItem = items.pop() || '';
      setItem(poppedItem);
      setItems(_toConsumableArray(items));
      onInserted(_toConsumableArray(items));
    }
  };
  var handlePaste = function handlePaste(event) {
    setPasted(true);
    var clipboardData = event.clipboardData || window.Clipboard;
    var pastedText = item + clipboardData.getData('text/plain');
    var lines = pastedText.split('\n').filter(function (line) {
      return line.trim() !== '';
    });
    var newItems = [].concat(_toConsumableArray(items), _toConsumableArray(lines)).slice(0, limit);
    setItems(newItems);
    onInserted(newItems);
  };
  var handleChange = function handleChange(e) {
    if (pasted) {
      setItem('');
      setPasted(false);
    } else {
      setItem(e.target.value);
    }
  };
  var handleInputChange = function handleInputChange(index, newValue) {
    var updatedItems = _toConsumableArray(items);
    updatedItems[index] = newValue;
    var filteredItems = updatedItems.filter(function (item) {
      return item !== '';
    });
    setItems(filteredItems);
    onInserted(filteredItems);
  };
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement(Label, {
    label: label,
    required: true,
    info: labelInfo
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles['input-element'], " ").concat(styles['list-input-container'])
  }, /*#__PURE__*/React.createElement("ol", {
    className: styles['list-input']
  }, items.slice(0, limit).map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index,
      className: styles['item-input']
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: item,
      onChange: function onChange(e) {
        return handleInputChange(index, e.target.value);
      }
    }));
  }), items.length < limit && /*#__PURE__*/React.createElement("li", {
    className: styles['item-input']
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "text",
    value: item,
    placeholder: placeholder,
    onPaste: handlePaste,
    onChange: handleChange,
    onKeyDown: handlePushLink,
    onBlur: pushLink
  }, props))))), /*#__PURE__*/React.createElement("div", null, error && /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-tiny',
    className: 'error-field-text text-left'
  }, error)));
};
ListInput.propTypes = {
  label: PropTypes.string,
  labelInfo: PropTypes.string,
  limit: PropTypes.number,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  onInserted: PropTypes.func,
  defaultItems: PropTypes.array,
  error: PropTypes.string
};
export default ListInput;