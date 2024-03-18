import PropTypes from 'prop-types';
import styles from './welcome.module.css';

export const Welcome = (props) => {
  return (
    <div className={styles['container']}>
      <h1>Welcome {props.title}!</h1>
    </div>
  );
};

Welcome.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Welcome;
