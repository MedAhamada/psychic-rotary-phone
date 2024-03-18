import _objectWithoutPropertiesLoose from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js";
var _excluded = ["onSelect"];
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/languageSelect/languageSelect.jsx",
  _this = this;
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.array.includes.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.string.includes.js";
import React, { Fragment, useEffect, useState } from 'react';
import styles from './languageSelect.module.css';
import PropTypes from 'prop-types';
import { IconChevronDown, IconFlagES, IconFlagFR, IconFlagUK } from '../icons';
import Label from '../label/label';

/**
 * A language dropdown component.
 *
 */
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export var LanguageSelect = function LanguageSelect(_ref) {
  var onSelect = _ref.onSelect,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var list = [{
    icon: /*#__PURE__*/_jsxDEV(IconFlagFR, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this),
    name: 'Français',
    value: 'fr'
  }, {
    icon: /*#__PURE__*/_jsxDEV(IconFlagUK, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this),
    name: 'Anglais',
    value: 'en'
  }, {
    icon: /*#__PURE__*/_jsxDEV(IconFlagES, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this),
    name: 'Espagnol',
    value: 'es'
  }
  /*
  { icon: <IconFlagIT />, name: 'Allemand', value: 'allemand' },
  */];
  var _useState = useState(false),
    showDropdown = _useState[0],
    setShowDropdown = _useState[1];
  var _useState2 = useState([]),
    activeItems = _useState2[0],
    setActiveItems = _useState2[1];
  var handleItemClick = function handleItemClick(value) {
    if (activeItems.includes(value)) {
      setActiveItems(activeItems.filter(function (item) {
        return item !== value;
      }));
    } else {
      setActiveItems([].concat(activeItems, [value]));
    }
  };
  var handleArrowButtonClick = function handleArrowButtonClick(event) {
    event.stopPropagation();
    setShowDropdown(!showDropdown);
  };
  useEffect(function () {
    onSelect(activeItems);
  }, [activeItems, onSelect]);
  return /*#__PURE__*/_jsxDEV("div", {
    children: [props.label && /*#__PURE__*/_jsxDEV(Label, {
      label: props.label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 23
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      className: styles['language-dropdown-container'],
      style: {
        width: '100%'
      },
      children: list.map(function (item) {
        var isActive = activeItems.includes(item.value);
        if (item.value === 'fr') {
          return /*#__PURE__*/_jsxDEV("button", {
            className: styles['language-dropdown-button'] + " " + (isActive && styles['active']),
            type: "button",
            onClick: function onClick() {
              return handleItemClick(item.value);
            },
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: styles['language-dropdown-info'],
              children: [item.icon, /*#__PURE__*/_jsxDEV("span", {
                children: item.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 17
            }, _this), /*#__PURE__*/_jsxDEV("span", {
              onClick: handleArrowButtonClick,
              onKeyDown: function onKeyDown(e) {
                console.log(e);
              },
              className: styles['language-dropdown-arrow'],
              children: /*#__PURE__*/_jsxDEV(IconChevronDown, {
                size: 8,
                style: {
                  right: '45%',
                  position: 'absolute'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 17
            }, _this)]
          }, item.name, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, _this);
        }
        return /*#__PURE__*/_jsxDEV(Fragment, {
          children: showDropdown && /*#__PURE__*/_jsxDEV("button", {
            className: styles['language-dropdown-button'] + " " + (isActive && styles['active']),
            type: "button",
            onClick: function onClick() {
              return handleItemClick(item.value);
            },
            children: /*#__PURE__*/_jsxDEV("span", {
              className: styles['language-dropdown-info'],
              children: [item.icon, /*#__PURE__*/_jsxDEV("span", {
                children: item.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 17
          }, _this)
        }, item.name, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, _this);
};
LanguageSelect.propTypes = {
  onSelect: PropTypes.func
};
export default LanguageSelect;