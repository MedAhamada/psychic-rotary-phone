import _objectWithoutPropertiesLoose from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js";
var _excluded = ["open", "onClose", "onOpenChange", "triggerer", "options", "placement", "className"];
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/dropdown/dropdownActions.jsx",
  _this = this;
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.object.assign.js";
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './dropdown.module.css';
import { IconDots } from '../icons';
import Text from '../text/text';

/**
 * @param open
 * @param onClose
 * @param onOpenChange
 * @param triggerer
 * @param  options    - Array: [{ name: string | number, value: string | number }]
 * @param  placement    - default : left
 * @param  className
 * @param props
 */
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export var DropdownActions = function DropdownActions(_ref) {
  var open = _ref.open,
    onClose = _ref.onClose,
    onOpenChange = _ref.onOpenChange,
    triggerer = _ref.triggerer,
    options = _ref.options,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'left' : _ref$placement,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var btnRef = useRef(null);
  var contentRef = useRef(null);
  var handleBlurMenu = function handleBlurMenu(event) {
    if (contentRef.current && btnRef.current && !contentRef.current.contains(event.target) && !btnRef.current.contains(event.target)) {
      onClose();
    }
  };
  useEffect(function () {
    document.addEventListener('click', handleBlurMenu);
    return function () {
      document.removeEventListener('click', handleBlurMenu);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var placementStyle = {
    right: 0
  };
  if (placement === 'right') {
    placementStyle = {
      left: 0
    };
  } else if (placement === 'center') {
    placementStyle = {
      left: '50%',
      transform: 'translateX(-50%)'
    };
  }
  return /*#__PURE__*/_jsxDEV("div", {
    className: "relative",
    children: [/*#__PURE__*/_jsxDEV("button", Object.assign({
      onClick: function onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        onOpenChange();
      },
      ref: btnRef,
      className: "flex-center " + className
    }, props, {
      children: triggerer || /*#__PURE__*/_jsxDEV(IconDots, {
        size: 22
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 23
      }, _this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this), open && /*#__PURE__*/_jsxDEV("div", {
      className: styles['dropdown-action-container'],
      ref: contentRef,
      style: placementStyle,
      children: options.map(function (option) {
        return /*#__PURE__*/_jsxDEV("button", {
          className: styles['dropdown-menu-option'],
          onClick: option.action,
          children: [option.icon, /*#__PURE__*/_jsxDEV(Text, {
            variant: 'paragraph-small',
            children: option.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, _this)]
        }, option.title, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, _this);
};
DropdownActions.propTypes = {
  options: PropTypes.array,
  placement: PropTypes.oneOf(['left', 'center', 'right']),
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onOpenChange: PropTypes.func,
  triggerer: PropTypes.any,
  className: PropTypes.string
};
export default DropdownActions;