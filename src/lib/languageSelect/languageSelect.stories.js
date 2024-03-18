import React from 'react';
import LanguageSelect from '../languageSelect/languageSelect';
var meta = {
  title: 'LanguageSelect',
  component: LanguageSelect
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
export var languageDropdown = function languageDropdown(args) {
  return /*#__PURE__*/React.createElement(LanguageSelect, args);
};
languageDropdown.args = {
  onSelect: function onSelect(items) {
    console.log(items);
  }
};