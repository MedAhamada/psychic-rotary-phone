import React from 'react';
import styles from './loader.module.css';
import PropTypes from 'prop-types';
export var Loader = function Loader(_ref) {
  var variant = _ref.variant,
    size = _ref.size;
  if (variant === 'border-top') {
    return /*#__PURE__*/React.createElement("div", {
      "data-testid": 'border-top-loader'
    }, /*#__PURE__*/React.createElement("div", {
      className: styles['border-top-loader']
    }));
  }
  if (variant === 'dots') {
    return /*#__PURE__*/React.createElement("div", {
      className: styles['dots-loader'],
      "data-testid": 'dots-loader'
    }, /*#__PURE__*/React.createElement("div", {
      className: styles['dot1'],
      "data-testid": 'dot1'
    }), /*#__PURE__*/React.createElement("div", {
      className: styles['dot2'],
      "data-testid": 'dot2'
    }), /*#__PURE__*/React.createElement("div", {
      className: styles['dot3'],
      "data-testid": 'dot3'
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    "data-testid": 'default-loader'
  }, /*#__PURE__*/React.createElement("div", {
    className: styles['default-loader'],
    style: {
      width: size,
      height: size
    }
  }));
};
Loader.propTypes = {
  variant: PropTypes.oneOf(['border-top', 'dots']),
  size: PropTypes.number
};