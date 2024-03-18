import React from 'react';
import Input from './input';
var meta = {
  title: 'Input',
  component: Input
};
export default meta;
export var InputText = function InputText(args) {
  return /*#__PURE__*/React.createElement(Input, args);
};
InputText.args = {
  type: 'text',
  placeholder: 'Input text is here',
  label: 'Text input',
  required: true
};
export var InputEmail = function InputEmail(args) {
  return /*#__PURE__*/React.createElement(Input, args);
};
InputEmail.args = {
  type: 'email',
  placeholder: 'Input email with icon is here',
  label: 'Email input'
};
export var InputUrl = function InputUrl(args) {
  return /*#__PURE__*/React.createElement(Input, args);
};
InputUrl.args = {
  type: 'url',
  placeholder: 'Input email with https:// is here',
  label: 'Url input',
  required: true
};