var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/card/FinanceOverview.jsx",
  _this = this;
import React from 'react';
import Text from '../text/text';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var FinanceOverview = function FinanceOverview(_ref) {
  var title = _ref.title,
    invoicesRecap = _ref.invoicesRecap,
    expired = _ref.expired,
    notDue = _ref.notDue;
  var PERCENTAGE = invoicesRecap.overdue / invoicesRecap.total * 100;
  var currencyFormat = function currencyFormat(num) {
    return num.toLocaleString('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2
    });
  };
  return /*#__PURE__*/_jsxDEV("div", {
    className: 'w-full  rounded-md in-progress-client',
    children: [title && /*#__PURE__*/_jsxDEV(Text, {
      variant: 'heading-4',
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      className: "",
      style: {
        margin: '16px 97px 0'
      },
      children: [/*#__PURE__*/_jsxDEV(Text, {
        variant: 'heading-1',
        align: 'center',
        className: 'large-text',
        children: currencyFormat(invoicesRecap.total)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV("div", {
        className: 'progress',
        children: /*#__PURE__*/_jsxDEV("div", {
          className: 'bar',
          style: {
            width: PERCENTAGE + "%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV("div", {
        className: "flex-around-center",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: 'flex-y-center gap-sm',
          children: [/*#__PURE__*/_jsxDEV("span", {
            className: 'expired-circle'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this), /*#__PURE__*/_jsxDEV(Text, {
            variant: 'paragraph-small',
            children: expired
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, _this), /*#__PURE__*/_jsxDEV(Text, {
            variant: 'paragraph-small',
            className: 'font-600',
            children: currencyFormat(invoicesRecap.overdue)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this), /*#__PURE__*/_jsxDEV("div", {
          className: 'flex-y-center gap-sm',
          children: [/*#__PURE__*/_jsxDEV("span", {
            className: 'not-expired-circle'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this), /*#__PURE__*/_jsxDEV(Text, {
            variant: 'paragraph-small',
            children: notDue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this), /*#__PURE__*/_jsxDEV(Text, {
            variant: 'paragraph-small',
            className: 'font-600',
            children: currencyFormat(invoicesRecap.upcomingPayment)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};
export default FinanceOverview;