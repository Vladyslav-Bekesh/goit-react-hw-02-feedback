import PropTypes from 'prop-types';

export default function Stats({ good, neutral, bad, total, countPositiveFeedback }) {
  return (
    <>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      
      <p>total: {total}</p>
      <p>positive feedback: {countPositiveFeedback}%</p>
    </>
  );
}

Stats.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
