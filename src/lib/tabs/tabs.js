var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/tabs/tabs.jsx",
  _this = this;
import "core-js/modules/es.array.map.js";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './tabs.module.css'; // You can create a CSS file for styling
import Text from '../text/text';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export var Tabs = function Tabs(_ref) {
  var variant = _ref.variant,
    tabs = _ref.tabs,
    right = _ref.right,
    left = _ref.left;
  var _useState = useState(0),
    activeTab = _useState[0],
    setActiveTab = _useState[1];
  var handleTabClick = function handleTabClick(index) {
    setActiveTab(index);
  };
  return /*#__PURE__*/_jsxDEV("div", {
    className: "tabs-container",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "flex-y-center gap-lg",
      children: [left && /*#__PURE__*/_jsxDEV("div", {
        className: "pr-lg",
        style: {
          borderRight: '1px solid lightgray'
        },
        children: left
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, _this), /*#__PURE__*/_jsxDEV("div", {
        className: "flex gap-sm " + (variant !== 'separated' && styles['tabs']),
        children: tabs.map(function (tab, index) {
          return /*#__PURE__*/_jsxDEV("div", {
            className: (variant !== 'separated' ? styles['tab'] : styles['tab-separated']) + " " + (index === activeTab ? styles['active'] : ''),
            onClick: function onClick() {
              return handleTabClick(index);
            },
            children: /*#__PURE__*/_jsxDEV(Text, {
              variant: index === activeTab && !variant ? 'heading-5' : 'paragraph-small',
              children: tab.label
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), right && /*#__PURE__*/_jsxDEV("div", {
        className: "pl-lg",
        style: {
          borderLeft: '1px solid lightgray'
        },
        children: right
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      className: styles['tab-content'],
      children: tabs[activeTab].content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired
  }))
};
export default Tabs;