import React from 'react';
import { PopupRed } from './popup';
import { IconWarning } from '../icons';
var meta = {
  title: 'PopupRed',
  component: PopupRed
};
export default meta;
export var RedPopup = function RedPopup(args) {
  return /*#__PURE__*/React.createElement(PopupRed, args);
};
RedPopup.args = {
  title: 'Are you sure?',
  details: 'By clicking on the `confirm` button, you will lose the information entered in the input fields.',
  icon: /*#__PURE__*/React.createElement(IconWarning, {
    size: 32
  }),
  onCancel: function onCancel() {
    alert('canceled :(');
  },
  onConfirm: function onConfirm() {
    alert('confirmed :D');
  }
};