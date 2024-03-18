import PropTypes from 'prop-types';
import styles from './welcome.module.css';
export var Welcome = function Welcome(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles['container']
  }, /*#__PURE__*/React.createElement("h1", null, "Welcome ", props.title, "!"));
};
Welcome.propTypes = {
  title: PropTypes.string.isRequired
};
export default Welcome;