import _objectDestructuringEmpty from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js";
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/switch/switch.jsx",
  _this = this;
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.object.assign.js";
import React from 'react';
import PropTypes from 'prop-types';
import styles from './switch.module.css';
import Text from '../text/text';

/**
 * @param  props  - Initialy extands checkbox attributes
 */
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import { Fragment as _Fragment } from "react/jsx-dev-runtime";
export var Switch = function Switch(_ref) {
  var props = Object.assign({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: /*#__PURE__*/_jsxDEV("label", {
      className: styles['switch-toggle'],
      children: [/*#__PURE__*/_jsxDEV("input", Object.assign({
        type: "checkbox"
      }, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV("span", {
        className: styles['switch-control']
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};
Switch.propTypes = {
  checked: PropTypes.bool.isRequired
};
export default Switch;
export var TabsSwitch = function TabsSwitch(_ref2) {
  var variant = _ref2.variant,
    tabs = _ref2.tabs,
    activeTab = _ref2.activeTab,
    onSwitch = _ref2.onSwitch;
  return /*#__PURE__*/_jsxDEV("div", {
    className: "flex gap-sm " + (variant !== 'separated' && styles['tabs']),
    children: tabs.map(function (tab) {
      return /*#__PURE__*/_jsxDEV("div", {
        className: (variant !== 'separated' ? styles['tab'] : styles['tab-separated']) + " " + (tab.key === activeTab ? styles['active'] : ''),
        onClick: function onClick() {
          return onSwitch(tab.key);
        },
        children: /*#__PURE__*/_jsxDEV(Text, {
          variant: 'paragraph-small',
          children: tab.label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this)
      }, tab.key, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, _this);
};