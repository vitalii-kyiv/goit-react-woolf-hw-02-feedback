import { Component } from 'react';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className="css.feedbackForm">
        <h2 className="css.feedbackTitle">Please leave feedback</h2>
        <h3 className="css.feedbackSecondTitle">Statistics</h3>
        <ul className="css.feedbackList">
          <li className="css.feedbackListItem">
            <p className="css.feedbackItemText">
              Good:
              <span className="css.feedbackItemNumber">{good}</span>
            </p>
          </li>
          <li className="css.feedbackListItem">
            <p className="css.feedbackItemText">
              Neutral:
              <span className="css.feedbackItemNumber">{neutral}</span>
            </p>
          </li>
          <li className="css.feedbackListItem">
            <p className="css.feedbackItemText">
              Bad:
              <span className="css.feedbackItemNumber">{bad}</span>
            </p>
            <p className="css.feedbackItemText">
              Tatal:
              <span className="css.feedbackItemNumber">{total()}</span>
            </p>
            <p className="css.feedbackItemText">
              Positive feedback:
              <span className="css.feedbackItemNumber">
                {positivePercentage()}%
              </span>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
export default Statistics;
