var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/card/ContactUs.jsx",
  _this = this;
import React from 'react';
import iceMountain from '../../assets/images/ice-mountain.webp';
import Text from '../text/text';
import Button from '../button/button';
import { IconEmail } from '../icons';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var ContactUs = function ContactUs() {
  return /*#__PURE__*/_jsxDEV("div", {
    className: 'contract-help-card flex-center',
    style: {
      background: "url(" + iceMountain + ")"
    },
    children: /*#__PURE__*/_jsxDEV("div", {
      className: 'flex-col-center gap-sm',
      children: [/*#__PURE__*/_jsxDEV(Text, {
        variant: 'heading-3',
        children: "Besoin d'aide ?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV(Button, {
        variant: 'primary',
        text: 'Contactez-nous',
        icon: /*#__PURE__*/_jsxDEV(IconEmail, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, _this),
        onClick: function onClick() {
          return alert('Contact me');
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};
export default ContactUs;