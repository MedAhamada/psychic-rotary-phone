var _excluded = ["type", "title", "date", "pinned", "copyLink", "redirectToLink", "linkIcon", "bgCard", "options", "openOptionsMenu", "onOptionsMenuChange", "onCloseOptionsMenu", "bgColor", "emptyTitle"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import Text from '../text/text';
import styles from './card.module.css';
import Button from '../button/button';
import { IconLink, IconPin, IconPinFilled, IconPlus } from '../icons';
import DropdownActions from '../dropdown/dropdownActions';
/**
 *
 * @param title
 * @param date
 * @param pinned
 * @param editLink
 * @param copyLink
 * @param redirectToLink
 * @param linkIcon
 * @param bgCard
 * @param {*} props
 * @param {*} type - default | empty | template
 */
export var Card = function Card(_ref) {
  var type = _ref.type,
    title = _ref.title,
    date = _ref.date,
    pinned = _ref.pinned,
    copyLink = _ref.copyLink,
    redirectToLink = _ref.redirectToLink,
    linkIcon = _ref.linkIcon,
    bgCard = _ref.bgCard,
    options = _ref.options,
    openOptionsMenu = _ref.openOptionsMenu,
    onOptionsMenuChange = _ref.onOptionsMenuChange,
    onCloseOptionsMenu = _ref.onCloseOptionsMenu,
    bgColor = _ref.bgColor,
    emptyTitle = _ref.emptyTitle,
    props = _objectWithoutProperties(_ref, _excluded);
  if (type === 'empty') {
    return /*#__PURE__*/React.createElement("button", _extends({
      className: "".concat(styles['empty-card'])
    }, props), /*#__PURE__*/React.createElement("div", {
      className: styles['empty-card-hover']
    }, /*#__PURE__*/React.createElement(Text, {
      variant: 'heading-2'
    }, emptyTitle), /*#__PURE__*/React.createElement("div", {
      className: styles['empty-card-icon']
    }, /*#__PURE__*/React.createElement(IconPlus, null))));
  }
  if (type === 'template') {
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(styles['card-link-template-container'])
    }, /*#__PURE__*/React.createElement("button", _extends({
      className: styles['card-link-template-header']
    }, props), /*#__PURE__*/React.createElement("div", {
      className: styles['empty-card-icon']
    }, /*#__PURE__*/React.createElement(IconPlus, null))), /*#__PURE__*/React.createElement("div", {
      className: styles['card-link-control']
    }, /*#__PURE__*/React.createElement("div", {
      className: styles['card-link-info']
    }, /*#__PURE__*/React.createElement(Text, {
      variant: 'heading-4'
    }, title)), /*#__PURE__*/React.createElement(DropdownActions, {
      options: options,
      open: openOptionsMenu,
      onOpenChange: onOptionsMenuChange,
      onClose: onCloseOptionsMenu
    })));
  }
  var PinIcon = function PinIcon() {
    return pinned ? /*#__PURE__*/React.createElement("span", {
      className: styles['card-link-pin-filled']
    }, /*#__PURE__*/React.createElement(IconPinFilled, {
      size: 16
    })) : /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(IconPin, {
      size: 16
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: styles['card-link-container']
  }, /*#__PURE__*/React.createElement("span", {
    className: "cursor-pointer ".concat(styles['card-link-header'], " ").concat(styles['no-repeat-center-cover']),
    style: {
      backgroundImage: "url(".concat(bgCard, ")"),
      backgroundColor: "var(--".concat(bgColor, "-light)")
    },
    role: "button",
    onClick: redirectToLink
  }, /*#__PURE__*/React.createElement("div", {
    className: styles['card-link-header-icon']
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick(e) {
      e.stopPropagation();
      copyLink();
    },
    variant: 'icon',
    icon: /*#__PURE__*/React.createElement(IconLink, {
      size: 16
    })
  }))), /*#__PURE__*/React.createElement("div", {
    className: styles['card-link-control']
  }, /*#__PURE__*/React.createElement("div", {
    className: 'flex-y-center'
  }, linkIcon && /*#__PURE__*/React.createElement("div", {
    className: "flex-center ".concat(styles['card-link-icon'])
  }, linkIcon), /*#__PURE__*/React.createElement("div", {
    className: styles['card-link-info']
  }, /*#__PURE__*/React.createElement(Text, {
    variant: 'heading-4'
  }, title))), /*#__PURE__*/React.createElement(DropdownActions, {
    options: options,
    open: openOptionsMenu,
    onOpenChange: onOptionsMenuChange,
    onClose: onCloseOptionsMenu
  })));
};
Card.propTypes = {
  type: PropTypes.oneOf(['default', 'empty', 'template']),
  title: PropTypes.string,
  // date: PropTypes.string.isRequired,
  pinned: PropTypes.bool
};
export default Card;
export { default as ContactUs } from './ContactUs';
export { default as FinanceOverview } from './FinanceOverview';
export { default as ToolCard } from './ToolCard';