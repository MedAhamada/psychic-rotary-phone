import React from 'react';
import Text from '../text/text';
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
  return /*#__PURE__*/React.createElement("div", {
    className: 'w-full  rounded-md in-progress-client'
  }, title && /*#__PURE__*/React.createElement(Text, {
    variant: 'heading-4'
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "",
    style: {
      margin: '16px 97px 0'
    }
  }, /*#__PURE__*/React.createElement(Text, {
    variant: 'heading-1',
    align: 'center',
    className: 'large-text'
  }, currencyFormat(invoicesRecap.total)), /*#__PURE__*/React.createElement("div", {
    className: 'progress'
  }, /*#__PURE__*/React.createElement("div", {
    className: 'bar',
    style: {
      width: "".concat(PERCENTAGE, "%")
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-around-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: 'flex-y-center gap-sm'
  }, /*#__PURE__*/React.createElement("span", {
    className: 'expired-circle'
  }), /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-small'
  }, expired), /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-small',
    className: 'font-600'
  }, currencyFormat(invoicesRecap.overdue))), /*#__PURE__*/React.createElement("div", {
    className: 'flex-y-center gap-sm'
  }, /*#__PURE__*/React.createElement("span", {
    className: 'not-expired-circle'
  }), /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-small'
  }, notDue), /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-small',
    className: 'font-600'
  }, currencyFormat(invoicesRecap.upcomingPayment))))));
};
export default FinanceOverview;