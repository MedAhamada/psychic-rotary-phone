import _objectWithoutPropertiesLoose from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js";
var _excluded = ["name", "defaultValue", "options", "onChange"];
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/radioGroup/radioGroup.jsx",
  _this = this;
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.function.name.js";
import React, { useState } from 'react';
import { Radio, Space } from 'antd';
import styles from './radioGroup.module.css';
import PropTypes from 'prop-types';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export var RadioGroup = function RadioGroup(_ref) {
  var name = _ref.name,
    defaultValue = _ref.defaultValue,
    options = _ref.options,
    onChange = _ref.onChange,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _useState = useState(defaultValue),
    value = _useState[0],
    setValue = _useState[1];
  var handleChange = function handleChange(e) {
    setValue(e.target.value);
    onChange(e);
  };
  return /*#__PURE__*/_jsxDEV(Radio.Group, {
    onChange: handleChange,
    value: value,
    className: "w-full",
    children: /*#__PURE__*/_jsxDEV(Space, {
      direction: "horizontal",
      className: "w-full",
      children: options.map(function (option, index) {
        return /*#__PURE__*/_jsxDEV(Radio, {
          "data-testid": option.dataTestId,
          name: name,
          value: option.value,
          className: styles['radio-item'] + " " + (option.value == value && styles['checked']),
          children: option.label
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};
RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};
export default RadioGroup;