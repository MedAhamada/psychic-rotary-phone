var _excluded = ["titles", "infos", "leftBar", "rightBar", "rightLegend", "leftLegend", "localeInteger"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import Text from '../text/text';
import styles from './bars.module.css';
import { Popover } from 'antd';
import PropTypes from 'prop-types';

/**
 *
 * @param {Object} leftBar
 * @param {Object} rightBar
 * @param {Object} titles
 * @param {Object} infos
 * @param {String} blueLegend
 * @param {String} redLegend
 * @return {JSX.Element} The Bars Chart
 * @example
 * <ChartBars
 *   titles={{tf_page:"", tf_domain:"", refdom_page:"", refdom_domain:"", domain_rating:""}}
 *   infos={{tf_page:"", tf_domain:"", refdom_page:"", refdom_domain:"", domain_rating:""}}
 *   leftBar={{
 *      tf_page: "",
 *      tf_domain: "",
 *      refdom_page: "",
 *      refdom_domain: "",
 *      "domain-rating": ""
 *     }}
 *   leftLegend=""
 *   rightBar={{
 *      tf_page: "",
 *      tf_domain: "",
 *      refdom_page: "",
 *      refdom_domain: "",
 *      "domain-rating": ""
 *     }}
 *   rightLegend=""
 * />
 */
var Bars = function Bars(_ref) {
  var titles = _ref.titles,
    infos = _ref.infos,
    leftBar = _ref.leftBar,
    rightBar = _ref.rightBar,
    rightLegend = _ref.rightLegend,
    leftLegend = _ref.leftLegend,
    localeInteger = _ref.localeInteger,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "flex-col gap-xl w-full"
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "flex-between-start gap-sm"
  }, /*#__PURE__*/React.createElement(Bar, {
    title: titles.tf_page,
    leftBar: leftBar.tf_page,
    rightBar: rightBar.tf_page,
    barsInfo: infos.tf_page,
    localeInteger: localeInteger
  }), /*#__PURE__*/React.createElement(Bar, {
    title: titles.tf_domain,
    leftBar: leftBar.tf_domain,
    rightBar: rightBar.tf_domain,
    barsInfo: infos.tf_domain,
    localeInteger: localeInteger
  }), /*#__PURE__*/React.createElement(Bar, {
    title: titles.refdom_page,
    leftBar: leftBar.refdom_page,
    rightBar: rightBar.refdom_page,
    barsInfo: infos.refdom_page,
    localeInteger: localeInteger
  }), /*#__PURE__*/React.createElement(Bar, {
    title: titles.refdom_domain,
    leftBar: leftBar.refdom_domain,
    rightBar: rightBar.refdom_domain,
    barsInfo: infos.refdom_domain,
    localeInteger: localeInteger
  }), /*#__PURE__*/React.createElement(Bar, {
    title: titles.domain_rating,
    leftBar: leftBar['domain-rating'],
    rightBar: rightBar['domain-rating'],
    barsInfo: infos.domain_rating,
    localeInteger: localeInteger
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-y-center gap-md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: styles['legend-square-blue']
  }), /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-tiny',
    align: 'center'
  }, rightLegend)), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: styles['legend-square-red']
  }), /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-tiny',
    align: 'center'
  }, leftLegend))));
};
export default Bars;
Bars.propTypes = {
  titles: PropTypes.object,
  infos: PropTypes.object,
  leftBar: PropTypes.object,
  rightBar: PropTypes.object,
  rightLegend: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  leftLegend: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
var Bar = function Bar(_ref2) {
  var title = _ref2.title,
    rightBar = _ref2.rightBar,
    leftBar = _ref2.leftBar,
    barsInfo = _ref2.barsInfo,
    localeInteger = _ref2.localeInteger;
  var adjustedrightBar = rightBar < leftBar ? rightBar / leftBar * 100 : 100;
  var adjustedleftBar = rightBar > leftBar ? leftBar / rightBar * 100 : 100;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-col-center gap-base"
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles['double-bar'], " flex-y-end")
  }, /*#__PURE__*/React.createElement(Popover, {
    content: localeInteger(rightBar)
  }, /*#__PURE__*/React.createElement("div", {
    className: styles['blue-bar'],
    style: {
      height: "".concat(adjustedrightBar, "%")
    }
  })), /*#__PURE__*/React.createElement(Popover, {
    content: localeInteger(leftBar)
  }, /*#__PURE__*/React.createElement("div", {
    className: styles['red-bar'],
    style: {
      height: "".concat(adjustedleftBar, "%")
    }
  }))), /*#__PURE__*/React.createElement(Popover, {
    placement: "bottom",
    content: /*#__PURE__*/React.createElement(Text, {
      variant: 'paragraph-small',
      className: styles['bars-popover']
    }, barsInfo)
  }, /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-tiny',
    align: 'center'
  }, title)));
};
Bar.propTypes = {
  title: PropTypes.string,
  rightBar: PropTypes.number,
  leftBar: PropTypes.number,
  barsInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};