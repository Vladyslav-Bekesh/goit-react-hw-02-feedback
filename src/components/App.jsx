import { Component } from 'react';

import Stats from './stats';
import FeedbackOptions from './FeedbackOptions';
import SectionTitle from './SectionTitle';
import Notification from './Notification';

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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <SectionTitle title="Please leave feeback">
          <form>
            <FeedbackOptions
              options={Object.keys(this.state)}
              increaseFeedback={this.increaseFeedback}
            ></FeedbackOptions>
          </form>
        </SectionTitle>

        {good !== 0 || neutral !== 0 || bad !== 0 ? (
          <SectionTitle title="Statistic">
            <Stats
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              countPositiveFeedback={this.countPositiveFeedback()}
            ></Stats>
          </SectionTitle>
          
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </>
    );
  }
}
