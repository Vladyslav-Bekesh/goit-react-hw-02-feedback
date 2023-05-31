import React from 'react';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, increaseFeedback }) {
  return (
    <div>
      {options.map(val => {
        return (
          <button
            key={val}
            type="button"
            data-button-type={val}
            onClick={increaseFeedback}
          >
            {val}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
