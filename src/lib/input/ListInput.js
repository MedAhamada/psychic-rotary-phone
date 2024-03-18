import _objectWithoutPropertiesLoose from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js";
var _excluded = ["label", "labelInfo", "limit", "required", "placeholder", "onInserted", "defaultItems", "error"];
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/input/ListInput.jsx",
  _this = this;
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.object.assign.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.string.trim.js";
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
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var ListInput = function ListInput(_ref) {
  var label = _ref.label,
    labelInfo = _ref.labelInfo,
    limit = _ref.limit,
    required = _ref.required,
    placeholder = _ref.placeholder,
    onInserted = _ref.onInserted,
    defaultItems = _ref.defaultItems,
    error = _ref.error,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _useState = useState(defaultItems || []),
    items = _useState[0],
    setItems = _useState[1];
  var _useState2 = useState(''),
    item = _useState2[0],
    setItem = _useState2[1];
  var _useState3 = useState(false),
    pasted = _useState3[0],
    setPasted = _useState3[1];
  var pushLink = function pushLink() {
    if (item) {
      var newItems = [].concat(items, [item]);
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
      setItems([].concat(items));
      onInserted([].concat(items));
    }
  };
  var handlePaste = function handlePaste(event) {
    setPasted(true);
    var clipboardData = event.clipboardData || window.Clipboard;
    var pastedText = item + clipboardData.getData('text/plain');
    var lines = pastedText.split('\n').filter(function (line) {
      return line.trim() !== '';
    });
    var newItems = [].concat(items, lines).slice(0, limit);
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
    var updatedItems = [].concat(items);
    updatedItems[index] = newValue;
    var filteredItems = updatedItems.filter(function (item) {
      return item !== '';
    });
    setItems(filteredItems);
    onInserted(filteredItems);
  };
  return /*#__PURE__*/_jsxDEV("div", {
    children: [label && /*#__PURE__*/_jsxDEV(Label, {
      label: label,
      required: true,
      info: labelInfo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      className: styles['input-element'] + " " + styles['list-input-container'],
      children: /*#__PURE__*/_jsxDEV("ol", {
        className: styles['list-input'],
        children: [items.slice(0, limit).map(function (item, index) {
          return /*#__PURE__*/_jsxDEV("li", {
            className: styles['item-input'],
            children: /*#__PURE__*/_jsxDEV("input", {
              type: "text",
              value: item,
              onChange: function onChange(e) {
                return handleInputChange(index, e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this);
        }), items.length < limit && /*#__PURE__*/_jsxDEV("li", {
          className: styles['item-input'],
          children: /*#__PURE__*/_jsxDEV("input", Object.assign({
            type: "text",
            value: item,
            placeholder: placeholder,
            onPaste: handlePaste,
            onChange: handleChange,
            onKeyDown: handlePushLink,
            onBlur: pushLink
          }, props), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      children: error && /*#__PURE__*/_jsxDEV(Text, {
        variant: 'paragraph-tiny',
        className: 'error-field-text text-left',
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 5
  }, _this);
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