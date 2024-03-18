import _objectWithoutPropertiesLoose from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js";
var _excluded = ["titles", "infos", "leftBar", "rightBar", "rightLegend", "leftLegend", "localeInteger"];
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/charts/Bars.jsx",
  _this = this;
import "core-js/modules/es.object.assign.js";
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
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var Bars = function Bars(_ref) {
  var titles = _ref.titles,
    infos = _ref.infos,
    leftBar = _ref.leftBar,
    rightBar = _ref.rightBar,
    rightLegend = _ref.rightLegend,
    leftLegend = _ref.leftLegend,
    localeInteger = _ref.localeInteger,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/_jsxDEV("div", Object.assign({
    className: "flex-col gap-xl w-full"
  }, props, {
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "flex-between-start gap-sm",
      children: [/*#__PURE__*/_jsxDEV(Bar, {
        title: titles.tf_page,
        leftBar: leftBar.tf_page,
        rightBar: rightBar.tf_page,
        barsInfo: infos.tf_page,
        localeInteger: localeInteger
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV(Bar, {
        title: titles.tf_domain,
        leftBar: leftBar.tf_domain,
        rightBar: rightBar.tf_domain,
        barsInfo: infos.tf_domain,
        localeInteger: localeInteger
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV(Bar, {
        title: titles.refdom_page,
        leftBar: leftBar.refdom_page,
        rightBar: rightBar.refdom_page,
        barsInfo: infos.refdom_page,
        localeInteger: localeInteger
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV(Bar, {
        title: titles.refdom_domain,
        leftBar: leftBar.refdom_domain,
        rightBar: rightBar.refdom_domain,
        barsInfo: infos.refdom_domain,
        localeInteger: localeInteger
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV(Bar, {
        title: titles.domain_rating,
        leftBar: leftBar['domain-rating'],
        rightBar: rightBar['domain-rating'],
        barsInfo: infos.domain_rating,
        localeInteger: localeInteger
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      className: "flex-y-center gap-md",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "flex gap-sm",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: styles['legend-square-blue']
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this), /*#__PURE__*/_jsxDEV(Text, {
          variant: 'paragraph-tiny',
          align: 'center',
          children: rightLegend
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV("div", {
        className: "flex gap-sm",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: styles['legend-square-red']
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this), /*#__PURE__*/_jsxDEV(Text, {
          variant: 'paragraph-tiny',
          align: 'center',
          children: leftLegend
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, _this);
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
  return /*#__PURE__*/_jsxDEV("div", {
    className: "flex-col-center gap-base",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: styles['double-bar'] + " flex-y-end",
      children: [/*#__PURE__*/_jsxDEV(Popover, {
        content: localeInteger(rightBar),
        children: /*#__PURE__*/_jsxDEV("div", {
          className: styles['blue-bar'],
          style: {
            height: adjustedrightBar + "%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV(Popover, {
        content: localeInteger(leftBar),
        children: /*#__PURE__*/_jsxDEV("div", {
          className: styles['red-bar'],
          style: {
            height: adjustedleftBar + "%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, _this), /*#__PURE__*/_jsxDEV(Popover, {
      placement: "bottom",
      content: /*#__PURE__*/_jsxDEV(Text, {
        variant: 'paragraph-small',
        className: styles['bars-popover'],
        children: barsInfo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 11
      }, _this),
      children: /*#__PURE__*/_jsxDEV(Text, {
        variant: 'paragraph-tiny',
        align: 'center',
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 5
  }, _this);
};
Bar.propTypes = {
  title: PropTypes.string,
  rightBar: PropTypes.number,
  leftBar: PropTypes.number,
  barsInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};