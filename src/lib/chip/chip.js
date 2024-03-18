import _objectWithoutPropertiesLoose from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js";
var _excluded = ["title", "subtitle", "img"];
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/chip/chip.jsx",
  _this = this;
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.object.assign.js";
import React, { useEffect, useRef, useState } from 'react';
import Text from '../text/text';
import Badge from '../badge/badge';
import { IconChevronRight, IconInfo } from '../icons';
import { Popover, Radio, Space } from 'antd';
import styles from './chip.module.css';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export var MemberChip = function MemberChip(_ref) {
  var imgSrc = _ref.imgSrc,
    name = _ref.name,
    staff = _ref.staff,
    status = _ref.status;
  return /*#__PURE__*/_jsxDEV("div", {
    className: 'team-member-chip',
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "chip-img",
      children: /*#__PURE__*/_jsxDEV("img", {
        src: imgSrc,
        alt: "" + name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      className: "chip-info",
      children: [/*#__PURE__*/_jsxDEV(Text, {
        variant: 'heading-5',
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV(Text, {
        variant: 'paragraph-tiny',
        children: staff
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), status === 'active' && /*#__PURE__*/_jsxDEV(Badge, {
      variant: "green",
      text: "Active",
      className: 'ship-badge'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, _this), status === 'pending' && /*#__PURE__*/_jsxDEV(Badge, {
      variant: "yellow",
      text: "Pending invitation",
      className: 'ship-badge'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, _this), status === 'inactive' && /*#__PURE__*/_jsxDEV(Badge, {
      variant: "red",
      text: "Inactive",
      className: 'ship-badge'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};
export var WorkspaceChip = function WorkspaceChip(_ref2) {
  var title = _ref2.title,
    subtitle = _ref2.subtitle,
    img = _ref2.img,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded);
  return /*#__PURE__*/_jsxDEV("button", Object.assign({
    className: "workspace-chip flex-between-center"
  }, props, {
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "workspace-chip-content flex-y-center",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "flex-col-start",
        children: [/*#__PURE__*/_jsxDEV(Text, {
          variant: 'heading-4',
          align: 'left',
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), /*#__PURE__*/_jsxDEV(Text, {
          variant: 'paragraph-tiny',
          align: 'left',
          children: subtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/_jsxDEV("span", {
      className: 'p-xs',
      children: /*#__PURE__*/_jsxDEV(IconChevronRight, {
        size: 12
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, _this);
};
export var ToolChip = function ToolChip(_ref3) {
  var imgSrc = _ref3.imgSrc,
    active = _ref3.active,
    onChangeHandle = _ref3.onChangeHandle,
    popoverContent = _ref3.popoverContent,
    isClickable = _ref3.isClickable,
    status = _ref3.status,
    disabled = _ref3.disabled,
    icon = _ref3.icon,
    name = _ref3.name,
    headline = _ref3.headline,
    _ref3$options = _ref3.options,
    options = _ref3$options === void 0 ? [] : _ref3$options,
    onClick = _ref3.onClick;
  var menuRef = useRef(null);
  var menuButtonRef = useRef(null);
  var _useState = useState(false),
    openMenu = _useState[0],
    setOpenMenu = _useState[1];
  var _useState2 = useState(active),
    value = _useState2[0],
    setValue = _useState2[1];
  var handleBlurMenu = function handleBlurMenu(event) {
    if (menuRef.current && menuButtonRef.current && !menuRef.current.contains(event.target) && !menuButtonRef.current.contains(event.target)) {
      setOpenMenu(false);
    }
  };
  useEffect(function () {
    document.addEventListener('click', handleBlurMenu);
    return function () {
      document.removeEventListener('click', handleBlurMenu);
    };
  }, []);
  var _onChange = function onChange(optionValue) {
    setValue(optionValue);
    onChangeHandle(optionValue);
    setOpenMenu(false);
  };
  return /*#__PURE__*/_jsxDEV("div", {
    className: "flex-y-center gap-sm",
    children: [/*#__PURE__*/_jsxDEV("button", {
      className: "flex-y-center gap-sm " + (!onClick && 'cursor-default'),
      onClick: onClick,
      children: [/*#__PURE__*/_jsxDEV("span", {
        className: "flex-center " + styles['tool-chip-image'],
        style: {
          backgroundImage: imgSrc
        },
        children: icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV("div", {
        className: "text-left",
        children: [/*#__PURE__*/_jsxDEV(Text, {
          variant: 'heading-4',
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, _this), /*#__PURE__*/_jsxDEV(Text, {
          variant: 'paragraph-tiny',
          className: 'color-gray-dark',
          children: headline
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      className: "relative ml-auto",
      children: [isClickable ? /*#__PURE__*/_jsxDEV("button", {
        onClick: function onClick() {
          return setOpenMenu(!openMenu);
        },
        disabled: disabled,
        ref: menuButtonRef,
        children: /*#__PURE__*/_jsxDEV(Badge, {
          variant: disabled ? 'grey' : active ? 'green' : 'blue-light',
          text: status,
          size: 'large'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }, _this) : /*#__PURE__*/_jsxDEV(Popover, {
        content: disabled && popoverContent,
        children: /*#__PURE__*/_jsxDEV(Badge, {
          variant: disabled ? 'grey' : active ? 'green' : 'blue-light',
          text: status,
          size: 'large'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }, _this), openMenu && /*#__PURE__*/_jsxDEV("div", {
        className: "absolute bg-white-shadow rounded-sm p-base my-xs",
        style: {
          zIndex: 555
        },
        ref: menuRef,
        children: /*#__PURE__*/_jsxDEV(Radio.Group, {
          value: value,
          children: /*#__PURE__*/_jsxDEV(Space, {
            direction: "vertical",
            children: options == null ? void 0 : options.map(function (option, index) {
              return /*#__PURE__*/_jsxDEV(Radio, {
                name: 'status',
                value: option.value,
                onChange: function onChange() {
                  return _onChange(option.value);
                },
                children: option.label
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }, _this);
};
export var TeamMemberChip = function TeamMemberChip(_ref4) {
  var name = _ref4.name,
    staff = _ref4.staff,
    image = _ref4.image,
    status = _ref4.status;
  return /*#__PURE__*/_jsxDEV(Popover, {
    placement: "top",
    content: name.length > 30 ? name : '',
    trigger: "hover",
    children: /*#__PURE__*/_jsxDEV("div", {
      className: styles['team-member-chip'] + " p-md rounded-md flex-y-center gap-sm",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: styles['member-image'],
        children: [/*#__PURE__*/_jsxDEV("img", {
          src: image,
          alt: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 9
        }, _this), status && /*#__PURE__*/_jsxDEV("span", {
          className: styles["status-dot-" + status]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 20
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 7
      }, _this), /*#__PURE__*/_jsxDEV("div", {
        className: "flex-col gap-xs",
        children: [/*#__PURE__*/_jsxDEV(Text, {
          variant: 'heading-3',
          className: styles['text-team'],
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 9
        }, _this), /*#__PURE__*/_jsxDEV(Text, {
          variant: 'paragraph-small',
          children: staff
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 168,
    columnNumber: 3
  }, _this);
};