var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/input/input.stories.jsx",
  _this = this;
import "core-js/modules/es.object.assign.js";
import React from 'react';
import Input from './input';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var meta = {
  title: 'Input',
  component: Input
};
export default meta;
export var InputText = function InputText(args) {
  return /*#__PURE__*/_jsxDEV(Input, Object.assign({}, args), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 36
  }, _this);
};
InputText.args = {
  type: 'text',
  placeholder: 'Input text is here',
  label: 'Text input',
  required: true
};
export var InputEmail = function InputEmail(args) {
  return /*#__PURE__*/_jsxDEV(Input, Object.assign({}, args), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 37
  }, _this);
};
InputEmail.args = {
  type: 'email',
  placeholder: 'Input email with icon is here',
  label: 'Email input'
};
export var InputUrl = function InputUrl(args) {
  return /*#__PURE__*/_jsxDEV(Input, Object.assign({}, args), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 35
  }, _this);
};
InputUrl.args = {
  type: 'url',
  placeholder: 'Input email with https:// is here',
  label: 'Url input',
  required: true
};