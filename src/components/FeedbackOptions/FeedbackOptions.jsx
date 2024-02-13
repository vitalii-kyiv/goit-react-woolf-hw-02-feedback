import { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        <ul className="btnList">
          {options.map(option => (
            <li key={option}>
              <button
                className="btn"
                key={option}
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default FeedbackOptions;
