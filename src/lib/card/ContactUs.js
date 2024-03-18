import React from 'react';
import iceMountain from '../../assets/images/ice-mountain.webp';
import Text from '../text/text';
import Button from '../button/button';
import { IconEmail } from '../icons';
var ContactUs = function ContactUs() {
  return /*#__PURE__*/React.createElement("div", {
    className: 'contract-help-card flex-center',
    style: {
      background: "url(".concat(iceMountain, ")")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: 'flex-col-center gap-sm'
  }, /*#__PURE__*/React.createElement(Text, {
    variant: 'heading-3'
  }, "Besoin d'aide ?"), /*#__PURE__*/React.createElement(Button, {
    variant: 'primary',
    text: 'Contactez-nous',
    icon: /*#__PURE__*/React.createElement(IconEmail, null),
    onClick: function onClick() {
      return alert('Contact me');
    }
  })));
};
export default ContactUs;