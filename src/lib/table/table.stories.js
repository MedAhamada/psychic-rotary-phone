import React from 'react';
import Alert from './table';
var meta = {
  title: 'Alert',
  component: Alert
};
export default meta;
export var AlertSucess = function AlertSucess(args) {
  return /*#__PURE__*/React.createElement(Alert, args);
};
AlertSucess.args = {
  type: 'success',
  title: 'Success Hello world!',
  details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  show: true
};
export var AlertWarning = function AlertWarning(args) {
  return /*#__PURE__*/React.createElement(Alert, args);
};
AlertWarning.args = {
  type: 'warning',
  title: 'Warning Hello world!',
  details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  show: true
};
export var AlertDanger = function AlertDanger(args) {
  return /*#__PURE__*/React.createElement(Alert, args);
};
AlertDanger.args = {
  type: 'danger',
  title: 'Danger Hello world!',
  details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  show: true
};