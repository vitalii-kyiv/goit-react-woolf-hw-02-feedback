import { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className="css.feedbackForm">
        <h2 className="css.feedbackTitle">Please leave feedback</h2>
        <ul>
          <li>
            <button
              className="css.feedbackButton"
              type="button"
              name="good"
              onClick={() => onLeaveFeedback('good')}
            >
              Good
            </button>
          </li>
          <li>
            <button
              className="css.feedbackButton"
              type="button"
              name="neutral"
              onClick={() => onLeaveFeedback('neutral')}
            >
              Neutral
            </button>
          </li>
          <li>
            <button
              className="css.feedbackButton"
              type="button"
              name="bad"
              onClick={() => onLeaveFeedback('bad')}
            >
              Bad
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
export default FeedbackOptions;
