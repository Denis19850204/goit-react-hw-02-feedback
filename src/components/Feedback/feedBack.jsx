import PropTypes from 'prop-types';
import css from './Feedback.module.css'

export default function Feedback({ options, onLeaveFeedback }) {
  return (


    <div className="btnList">
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={css.btn}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}


Feedback.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
