// import PropTypes from 'prop-types';
import css from './FeedBack.module.css';

// export const Button = ({ btn1, btn2, btn3, good, neutral, bad }) => {
//   return (
//     <div className="btnList">
//       <button type="button" onClick={good} className={css.btn}>
//         {btn1}
//       </button>
//       <button type="button" onClick={neutral} className={css.btn}>
//         {btn2}
//       </button>
//       <button type="button" onClick={bad} className={css.btn}>
//         {btn3}
//       </button>
//     </div>
//   );
// };

function Button({ options, onLeaveFeedback }) {
  return (
    <div className="btnList">
      {options.map(option => 
        <button
          key={option}
          type="button"
          className={css.btn}
          onClick={() => {
            onLeaveFeedback(option)
          }}
        >
          {option}
        </button>
      )}
    </div>
  )
}
export default Button;

// Button.propTypes = {
//   btn1: PropTypes.string.isRequired,
//   btn2: PropTypes.string.isRequired,
//   btn3: PropTypes.string.isRequired,
//   good: PropTypes.func,
//   neutral: PropTypes.func,
//   bad: PropTypes.func,
// };
