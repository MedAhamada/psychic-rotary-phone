var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/dropdown/dropdown.stories.jsx",
  _this = this;
import "core-js/modules/es.object.assign.js";
import React from 'react';
import { CheckboxDropdown, RadioDropdown } from './dropdown';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var meta = {
  title: 'Dropdown',
  component: RadioDropdown
};
export default meta;
var options = [{
  label: 'Option 1',
  value: 'option-1'
}, {
  label: 'Option 2',
  value: 'option-2'
}, {
  label: 'Option 3',
  value: 'option-3'
}, {
  label: 'Option 4',
  value: 'option-4'
}, {
  label: 'Option 5',
  value: 'option-5'
}];
export var radioDropdown = function radioDropdown(args) {
  return /*#__PURE__*/_jsxDEV(RadioDropdown, Object.assign({}, args), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 40
  }, _this);
};
radioDropdown.args = {
  label: 'Open options',
  options: options,
  onChange: function onChange(e) {
    return console.log(e.target.value);
  }
};
export var checkboxDropdown = function checkboxDropdown(args) {
  return /*#__PURE__*/_jsxDEV(CheckboxDropdown, Object.assign({}, args), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 43
  }, _this);
};
checkboxDropdown.args = {
  label: 'Open options',
  options: options,
  onChange: function onChange(e) {
    console.log(e);
  }
};