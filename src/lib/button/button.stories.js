import React from 'react';
import Button from './button';
import { IconBin, IconPlus } from '../icons';
var meta = {
  title: 'Button',
  component: Button
};
export default meta;
export var Primary = function Primary(args) {
  return /*#__PURE__*/React.createElement(Button, args);
};
Primary.args = {
  text: 'Primary',
  icon: /*#__PURE__*/React.createElement(IconPlus, {
    size: 14
  })
};
export var Secondary = function Secondary(args) {
  return /*#__PURE__*/React.createElement(Button, args);
};
Secondary.args = {
  text: 'Secondary',
  variant: 'secondary',
  icon: /*#__PURE__*/React.createElement(IconPlus, {
    size: 14
  })
};
export var Danger = function Danger(args) {
  return /*#__PURE__*/React.createElement(Button, args);
};
Danger.args = {
  text: 'Danger',
  variant: 'danger',
  icon: /*#__PURE__*/React.createElement(IconPlus, {
    size: 14
  })
};
export var Icon = function Icon(args) {
  return /*#__PURE__*/React.createElement(Button, args);
};
Icon.args = {
  icon: /*#__PURE__*/React.createElement(IconPlus, {
    size: 14
  }),
  variant: 'icon'
};
export var Link = function Link(args) {
  return /*#__PURE__*/React.createElement(Button, args);
};
Link.args = {
  text: 'Supprimer',
  variant: 'link',
  icon: /*#__PURE__*/React.createElement(IconBin, {
    size: 14
  })
};