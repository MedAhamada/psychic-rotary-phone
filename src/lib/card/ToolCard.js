function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["status", "title", "statusText", "description", "date", "analyses", "image"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import Text from '../text/text';
import styles from './card.module.css';
import Badge from '../badge/badge';
import { IconCalendar, IconChartSimple } from '../icons';

/**
 *
 * @param title
 * @param date
 * @param status - active | inactive | unavailable
 * @param description
 * @param icon
 * @param image
 * @param statusText
 * @param image
 * @param link
 * @param analyses
 * @param {*} props
 */
var ToolCard = function ToolCard(_ref) {
  var status = _ref.status,
    title = _ref.title,
    statusText = _ref.statusText,
    description = _ref.description,
    date = _ref.date,
    analyses = _ref.analyses,
    image = _ref.image,
    props = _objectWithoutProperties(_ref, _excluded);
  var renderFooter = function renderFooter() {
    if (status === 'unavailable') return null;
    return /*#__PURE__*/React.createElement("div", {
      className: 'flex gap-md w-full'
    }, /*#__PURE__*/React.createElement("p", {
      className: styles['tool-card-footer-text']
    }, /*#__PURE__*/React.createElement(IconCalendar, {
      size: 16
    }), status === 'active' && /*#__PURE__*/React.createElement(Text, {
      variant: 'paragraph-small'
    }, date)), /*#__PURE__*/React.createElement("p", {
      className: styles['tool-card-footer-text']
    }, /*#__PURE__*/React.createElement(IconChartSimple, {
      size: 16
    }), status === 'active' && /*#__PURE__*/React.createElement(Text, {
      variant: 'paragraph-small'
    }, analyses)));
  };
  var content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: styles['tool-card-image']
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    width: "100%",
    height: "100%",
    alt: description
  }), status !== 'active' && /*#__PURE__*/React.createElement("div", {
    className: "image-overlay"
  }), /*#__PURE__*/React.createElement(Badge, {
    variant: status === 'active' && 'green' || status === 'unavailable' && 'grey' || status === 'inactive' && 'blue-light',
    size: "large",
    text: statusText,
    className: styles['tool-card-badge']
  })), /*#__PURE__*/React.createElement("div", {
    className: styles['tool-card-header']
  }, /*#__PURE__*/React.createElement("img", {
    src: title,
    alt: "title card",
    width: "100%",
    height: "100%"
  })), /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-small',
    align: 'left',
    className: styles['tool-card-description']
  }, description), renderFooter());
  var renderButton = function renderButton() {
    return /*#__PURE__*/React.createElement("button", _objectSpread(_objectSpread({}, props), {}, {
      className: "".concat(styles['tool-card-container-disabled'], " cursor-default")
    }), content);
  };
  var renderLink = function renderLink() {
    return /*#__PURE__*/React.createElement("a", _objectSpread(_objectSpread({}, props), {}, {
      className: styles['tool-card-container']
    }), content);
  };
  return status === 'active' ? renderLink() : renderButton();
};
ToolCard.propTypes = {
  status: PropTypes.oneOf(['active', 'inactive', 'unavailable']),
  title: PropTypes.string
};
export default ToolCard;