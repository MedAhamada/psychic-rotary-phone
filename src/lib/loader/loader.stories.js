import React from 'react';
import { Loader } from './loader';
var meta = {
  title: 'Loader',
  component: Loader
};
export default meta;
export var DefaultCard = function DefaultCard() {
  return /*#__PURE__*/React.createElement(Loader, null);
};
export var BorderTopLoader = function BorderTopLoader(args) {
  return /*#__PURE__*/React.createElement(Loader, args);
};
BorderTopLoader.args = {
  variant: 'border-top'
};
export var DotsLoader = function DotsLoader(args) {
  return /*#__PURE__*/React.createElement(Loader, args);
};
DotsLoader.args = {
  variant: 'dots'
};