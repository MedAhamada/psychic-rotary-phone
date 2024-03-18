var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/popup/popup.stories.jsx",
  _this = this;
import "core-js/modules/es.object.assign.js";
import React from 'react';
import { PopupRed } from './popup';
import { IconWarning } from '../icons';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var meta = {
  title: 'PopupRed',
  component: PopupRed
};
export default meta;
export var RedPopup = function RedPopup(args) {
  return /*#__PURE__*/_jsxDEV(PopupRed, Object.assign({}, args), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 35
  }, _this);
};
RedPopup.args = {
  title: 'Are you sure?',
  details: 'By clicking on the `confirm` button, you will lose the information entered in the input fields.',
  icon: /*#__PURE__*/_jsxDEV(IconWarning, {
    size: 32
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this),
  onCancel: function onCancel() {
    alert('canceled :(');
  },
  onConfirm: function onConfirm() {
    alert('confirmed :D');
  }
};