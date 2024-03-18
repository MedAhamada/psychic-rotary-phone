var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/card/card.stories.jsx",
  _this = this;
import "core-js/modules/es.object.assign.js";
import React from 'react';
import Card from './card';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var meta = {
  title: 'Card',
  component: Card
};
export default meta;
export var DefaultCard = function DefaultCard(args) {
  return /*#__PURE__*/_jsxDEV(Card, Object.assign({}, args), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 38
  }, _this);
};
DefaultCard.args = {
  type: 'default',
  title: 'Project management',
  date: '3 centuries ago',
  pinned: true
};
export var TemplateCard = function TemplateCard(args) {
  return /*#__PURE__*/_jsxDEV(Card, Object.assign({}, args), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 39
  }, _this);
};
TemplateCard.args = {
  type: 'template',
  title: 'Project management'
};
export var EmptyCard = function EmptyCard(args) {
  return /*#__PURE__*/_jsxDEV(Card, Object.assign({}, args), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 36
  }, _this);
};
EmptyCard.args = {
  type: 'empty'
};