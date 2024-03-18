function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import PropTypes from 'prop-types';
import styles from './switch.module.css';
import Text from '../text/text';

/**
 * @param  props  - Initialy extands checkbox attributes
 */
export var Switch = function Switch(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    className: styles['switch-toggle']
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, props)), /*#__PURE__*/React.createElement("span", {
    className: styles['switch-control']
  })));
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
  return /*#__PURE__*/React.createElement("div", {
    className: "flex gap-sm ".concat(variant !== 'separated' && styles['tabs'])
  }, tabs.map(function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      key: tab.key,
      className: "".concat(variant !== 'separated' ? styles['tab'] : styles['tab-separated'], " ").concat(tab.key === activeTab ? styles['active'] : ''),
      onClick: function onClick() {
        return onSwitch(tab.key);
      }
    }, /*#__PURE__*/React.createElement(Text, {
      variant: 'paragraph-small'
    }, tab.label));
  }));
};