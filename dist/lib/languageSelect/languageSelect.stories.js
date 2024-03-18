var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/languageSelect/languageSelect.stories.jsx",
  _this = this;
import "core-js/modules/es.object.assign.js";
import React from 'react';
import LanguageSelect from '../languageSelect/languageSelect';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
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
  return /*#__PURE__*/_jsxDEV(LanguageSelect, Object.assign({}, args), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 43
  }, _this);
};
languageDropdown.args = {
  onSelect: function onSelect(items) {
    console.log(items);
  }
};