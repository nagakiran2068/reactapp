import React, { Component } from "react";

class Message extends Component {
  //set state
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome Visitor 1"
    };
  }

  changeMessage = () => {
    this.setState({
      message: "Thank you for subscribing"
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
export default Message;
