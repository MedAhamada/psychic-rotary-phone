import React from 'react';
import { Text } from '../text/text';
export var Header = function Header(_ref) {
  var heading = _ref.heading,
    button = _ref.button;
  return /*#__PURE__*/React.createElement("div", {
    className: 'header-container'
  }, /*#__PURE__*/React.createElement("div", {
    className: ""
  }, typeof heading === 'string' || typeof heading === 'number' ? /*#__PURE__*/React.createElement(Text, {
    variant: 'heading-1'
  }, heading) : heading), /*#__PURE__*/React.createElement("div", {
    className: ""
  }, button));
};