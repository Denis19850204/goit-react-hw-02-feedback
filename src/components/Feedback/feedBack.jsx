import PropTypes from 'prop-types';
import css from './Feedback.module.css'

export default function FeedBack({ options, onLeaveFeedback }) {
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


FeedBack.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
