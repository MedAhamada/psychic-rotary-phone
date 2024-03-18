import React from 'react';
import Card from './card';
var meta = {
  title: 'Card',
  component: Card
};
export default meta;
export var DefaultCard = function DefaultCard(args) {
  return /*#__PURE__*/React.createElement(Card, args);
};
DefaultCard.args = {
  type: 'default',
  title: 'Project management',
  date: '3 centuries ago',
  pinned: true
};
export var TemplateCard = function TemplateCard(args) {
  return /*#__PURE__*/React.createElement(Card, args);
};
TemplateCard.args = {
  type: 'template',
  title: 'Project management'
};
export var EmptyCard = function EmptyCard(args) {
  return /*#__PURE__*/React.createElement(Card, args);
};
EmptyCard.args = {
  type: 'empty'
};