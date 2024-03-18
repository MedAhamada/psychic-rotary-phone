var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/welcome/welcome.jsx",
  _this = this;
import PropTypes from 'prop-types';
import styles from './welcome.module.css';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export var Welcome = function Welcome(props) {
  return /*#__PURE__*/_jsxDEV("div", {
    className: styles['container'],
    children: /*#__PURE__*/_jsxDEV("h1", {
      children: ["Welcome ", props.title, "!"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};
Welcome.propTypes = {
  title: PropTypes.string.isRequired
};
export default Welcome;