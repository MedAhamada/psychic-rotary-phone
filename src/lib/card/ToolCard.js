import _objectWithoutPropertiesLoose from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js";
var _excluded = ["status", "title", "statusText", "description", "date", "analyses", "image"];
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/card/ToolCard.jsx",
  _this = this;
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.object.assign.js";
import React from 'react';
import PropTypes from 'prop-types';
import Text from '../text/text';
import styles from './card.module.css';
import Badge from '../badge/badge';
import { Link } from 'react-router-dom';
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
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import { Fragment as _Fragment } from "react/jsx-dev-runtime";
var ToolCard = function ToolCard(_ref) {
  var status = _ref.status,
    title = _ref.title,
    statusText = _ref.statusText,
    description = _ref.description,
    date = _ref.date,
    analyses = _ref.analyses,
    image = _ref.image,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var renderFooter = function renderFooter() {
    if (status === 'unavailable') return null;
    return /*#__PURE__*/_jsxDEV("div", {
      className: 'flex gap-md w-full',
      children: [/*#__PURE__*/_jsxDEV("p", {
        className: styles['tool-card-footer-text'],
        children: [/*#__PURE__*/_jsxDEV(IconCalendar, {
          size: 16
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this), status === 'active' && /*#__PURE__*/_jsxDEV(Text, {
          variant: 'paragraph-small',
          children: date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV("p", {
        className: styles['tool-card-footer-text'],
        children: [/*#__PURE__*/_jsxDEV(IconChartSimple, {
          size: 16
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this), status === 'active' && /*#__PURE__*/_jsxDEV(Text, {
          variant: 'paragraph-small',
          children: analyses
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this);
  };
  var content = /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: styles['tool-card-image'],
      children: [/*#__PURE__*/_jsxDEV("img", {
        src: image,
        width: "100%",
        height: "100%",
        alt: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), status !== 'active' && /*#__PURE__*/_jsxDEV("div", {
        className: "image-overlay"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 33
      }, _this), /*#__PURE__*/_jsxDEV(Badge, {
        variant: status === 'active' && 'green' || status === 'unavailable' && 'grey' || status === 'inactive' && 'blue-light',
        size: "large",
        text: statusText,
        className: styles['tool-card-badge']
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      className: styles['tool-card-header'],
      children: /*#__PURE__*/_jsxDEV("img", {
        src: title,
        alt: "title card",
        width: "100%",
        height: "100%"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this), /*#__PURE__*/_jsxDEV(Text, {
      variant: 'paragraph-small',
      align: 'left',
      className: styles['tool-card-description'],
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this), renderFooter()]
  }, void 0, true);
  var renderButton = function renderButton() {
    return /*#__PURE__*/_jsxDEV("button", Object.assign({}, Object.assign({}, props, {
      className: styles['tool-card-container-disabled'] + " cursor-default"
    }), {
      children: content
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }, _this);
  };
  var renderLink = function renderLink() {
    return /*#__PURE__*/_jsxDEV(Link, Object.assign({}, Object.assign({}, props, {
      className: styles['tool-card-container']
    }), {
      children: content
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }, _this);
  };
  return status === 'active' ? renderLink() : renderButton();
};
ToolCard.propTypes = {
  status: PropTypes.oneOf(['active', 'inactive', 'unavailable']),
  title: PropTypes.string
};
export default ToolCard;