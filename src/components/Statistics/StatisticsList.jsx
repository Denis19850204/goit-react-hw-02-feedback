import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const StatisticsList = ({ good, neutral, bad, total, percentage }) => {
  return (
    
    <ul className={css.statList}>
      <li className={css.statItem}>
        Good: <span>{good}</span>
      </li>
      <li className={css.statItem}>
        Neutral: <span>{neutral}</span>
      </li>
      <li className={css.statItem}>
        Bad: <span>{bad}</span>
      </li>
      <li className={css.statItem}>
        Total: <span>{total}</span>
      </li>
      <li className={css.statItem}>
        Positive Feedback:
        {percentage > 0 && <span> {percentage}%</span>}
      </li>
    </ul>
  );
};

StatisticsList.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  
}