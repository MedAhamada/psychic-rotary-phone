var _excluded = ["open", "onClose", "onOpenChange", "triggerer", "options", "placement", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
    props = _objectWithoutProperties(_ref, _excluded);
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
  return /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("button", _extends({
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onOpenChange();
    },
    ref: btnRef,
    className: "flex-center ".concat(className)
  }, props), triggerer || /*#__PURE__*/React.createElement(IconDots, {
    size: 22
  })), open && /*#__PURE__*/React.createElement("div", {
    className: styles['dropdown-action-container'],
    ref: contentRef,
    style: placementStyle
  }, options.map(function (option) {
    return /*#__PURE__*/React.createElement("button", {
      key: option.title,
      className: styles['dropdown-menu-option'],
      onClick: option.action
    }, option.icon, /*#__PURE__*/React.createElement(Text, {
      variant: 'paragraph-small'
    }, option.title));
  })));
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