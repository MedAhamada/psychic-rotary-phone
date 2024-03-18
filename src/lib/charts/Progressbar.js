import React from 'react';
import styles from './progressbar.module.css';
var Progressbar = function Progressbar(_ref) {
  var percentage = _ref.percentage;
  var _percentage = percentage > 100 ? 100 : percentage;
  return /*#__PURE__*/React.createElement("div", {
    className: styles["gradient-progressbar-".concat(percentage > 100 ? 'dark' : 'light')]
  }, /*#__PURE__*/React.createElement("div", {
    className: styles['gradient-progressbar-empty'],
    style: {
      width: "".concat(100 - _percentage, "%")
    }
  }));
};
export default Progressbar;