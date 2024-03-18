import _objectWithoutPropertiesLoose from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js";
var _excluded = ["type", "title", "date", "pinned", "copyLink", "redirectToLink", "linkIcon", "bgCard", "options", "openOptionsMenu", "onOptionsMenuChange", "onCloseOptionsMenu", "bgColor", "emptyTitle"];
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/card/card.jsx",
  _this = this;
import "core-js/modules/es.object.assign.js";
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
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
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
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  if (type === 'empty') {
    return /*#__PURE__*/_jsxDEV("button", Object.assign({
      className: "" + styles['empty-card']
    }, props, {
      children: /*#__PURE__*/_jsxDEV("div", {
        className: styles['empty-card-hover'],
        children: [/*#__PURE__*/_jsxDEV(Text, {
          variant: 'heading-2',
          children: emptyTitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this), /*#__PURE__*/_jsxDEV("div", {
          className: styles['empty-card-icon'],
          children: /*#__PURE__*/_jsxDEV(IconPlus, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this);
  }
  if (type === 'template') {
    return /*#__PURE__*/_jsxDEV("div", {
      className: "" + styles['card-link-template-container'],
      children: [/*#__PURE__*/_jsxDEV("button", Object.assign({
        className: styles['card-link-template-header']
      }, props, {
        children: /*#__PURE__*/_jsxDEV("div", {
          className: styles['empty-card-icon'],
          children: /*#__PURE__*/_jsxDEV(IconPlus, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV("div", {
        className: styles['card-link-control'],
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: styles['card-link-info'],
          children: /*#__PURE__*/_jsxDEV(Text, {
            variant: 'heading-4',
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this), /*#__PURE__*/_jsxDEV(DropdownActions, {
          options: options,
          open: openOptionsMenu,
          onOpenChange: onOptionsMenuChange,
          onClose: onCloseOptionsMenu
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this);
  }
  var PinIcon = function PinIcon() {
    return pinned ? /*#__PURE__*/_jsxDEV("span", {
      className: styles['card-link-pin-filled'],
      children: /*#__PURE__*/_jsxDEV(IconPinFilled, {
        size: 16
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this) : /*#__PURE__*/_jsxDEV("span", {
      children: /*#__PURE__*/_jsxDEV(IconPin, {
        size: 16
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this);
  };
  return /*#__PURE__*/_jsxDEV("div", {
    className: styles['card-link-container'],
    children: [/*#__PURE__*/_jsxDEV("span", {
      className: "cursor-pointer " + styles['card-link-header'] + " " + styles['no-repeat-center-cover'],
      style: {
        backgroundImage: "url(" + bgCard + ")",
        backgroundColor: "var(--" + bgColor + "-light)"
      },
      role: "button",
      onClick: redirectToLink,
      children: /*#__PURE__*/_jsxDEV("div", {
        className: styles['card-link-header-icon'],
        children: /*#__PURE__*/_jsxDEV(Button, {
          onClick: function onClick(e) {
            e.stopPropagation();
            copyLink();
          },
          variant: 'icon',
          icon: /*#__PURE__*/_jsxDEV(IconLink, {
            size: 16
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      className: styles['card-link-control'],
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: 'flex-y-center',
        children: [linkIcon && /*#__PURE__*/_jsxDEV("div", {
          className: "flex-center " + styles['card-link-icon'],
          children: linkIcon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 13
        }, _this), /*#__PURE__*/_jsxDEV("div", {
          className: styles['card-link-info'],
          children: /*#__PURE__*/_jsxDEV(Text, {
            variant: 'heading-4',
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV(DropdownActions, {
        options: options,
        open: openOptionsMenu,
        onOpenChange: onOptionsMenuChange,
        onClose: onCloseOptionsMenu
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, _this);
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