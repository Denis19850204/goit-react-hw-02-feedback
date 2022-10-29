import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ btn1, btn2, btn3, good, neutral, bad }) => {
  return (
    <div className="btnList">
      <button type="button" onClick={good} className={css.btn}>
        {btn1}
      </button>
      <button type="button" onClick={neutral} className={css.btn}>
        {btn2}
      </button>
      <button type="button" onClick={bad} className={css.btn}>
        {btn3}
      </button>
    </div>
  );
};

Button.propTypes = {
  btn1: PropTypes.string.isRequired,
  btn2: PropTypes.string.isRequired,
  btn3: PropTypes.string.isRequired,
  good: PropTypes.func,
  neutral: PropTypes.func,
  bad: PropTypes.func,
};
