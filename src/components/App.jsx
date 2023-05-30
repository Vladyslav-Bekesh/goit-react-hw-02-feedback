import { Component } from 'react';

import { Stats } from './stats';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseFeedback = ({ target }) => {
    const { buttonType } = target.dataset;
    this.setState(prevState => ({
      [buttonType]: prevState[buttonType] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <form>
          <h2>Please leave feedback</h2>

          <button
            type="button"
            data-button-type="good"
            onClick={event => this.increaseFeedback(event)}
          >
            good
          </button>

          <button
            type="button"
            data-button-type="neutral"
            onClick={event => this.increaseFeedback(event)}
          >
            neutral
          </button>

          <button
            type="button"
            data-button-type="bad"
            onClick={event => this.increaseFeedback(event)}
          >
            bad
          </button>
        </form>

        <Stats good={good} neutral={neutral} bad={bad}></Stats>
      </>
    );
  }
}
