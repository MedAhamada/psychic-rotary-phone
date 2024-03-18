function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './tabs.module.css'; // You can create a CSS file for styling
import Text from '../text/text';
export var Tabs = function Tabs(_ref) {
  var variant = _ref.variant,
    tabs = _ref.tabs,
    right = _ref.right,
    left = _ref.left;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  var handleTabClick = function handleTabClick(index) {
    setActiveTab(index);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "tabs-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-y-center gap-lg"
  }, left && /*#__PURE__*/React.createElement("div", {
    className: "pr-lg",
    style: {
      borderRight: '1px solid lightgray'
    }
  }, left), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-sm ".concat(variant !== 'separated' && styles['tabs'])
  }, tabs.map(function (tab, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "".concat(variant !== 'separated' ? styles['tab'] : styles['tab-separated'], " ").concat(index === activeTab ? styles['active'] : ''),
      onClick: function onClick() {
        return handleTabClick(index);
      }
    }, /*#__PURE__*/React.createElement(Text, {
      variant: index === activeTab && !variant ? 'heading-5' : 'paragraph-small'
    }, tab.label));
  })), right && /*#__PURE__*/React.createElement("div", {
    className: "pl-lg",
    style: {
      borderLeft: '1px solid lightgray'
    }
  }, right)), /*#__PURE__*/React.createElement("div", {
    className: styles['tab-content']
  }, tabs[activeTab].content));
};
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired
  }))
};
export default Tabs;