import React from 'react';
import { CheckboxDropdown, RadioDropdown } from './dropdown';
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
  return /*#__PURE__*/React.createElement(RadioDropdown, args);
};
radioDropdown.args = {
  label: 'Open options',
  options: options,
  onChange: function onChange(e) {
    return console.log(e.target.value);
  }
};
export var checkboxDropdown = function checkboxDropdown(args) {
  return /*#__PURE__*/React.createElement(CheckboxDropdown, args);
};
checkboxDropdown.args = {
  label: 'Open options',
  options: options,
  onChange: function onChange(e) {
    console.log(e);
  }
};