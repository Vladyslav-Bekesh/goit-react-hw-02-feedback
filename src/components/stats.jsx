import PropTypes from 'prop-types';

export function Stats({ good, neutral, bad }) {
  const total = good + neutral + bad;
  const positiveFeedback = ((good / total) * 100).toFixed(0);

  return (
    <>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>total: {good + neutral + bad}</p>
      <p>positive feedback: {positiveFeedback}%</p>
    </>
  );
}

Stats.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
