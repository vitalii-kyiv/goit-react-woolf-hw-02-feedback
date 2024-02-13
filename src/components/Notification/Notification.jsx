import { Component } from 'react';

class Notification extends Component {
  render() {
    const message = this.props.message;
    return <p>{message}</p>;
  }
}
export default Notification;
