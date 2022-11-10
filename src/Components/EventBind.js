import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello"
    };
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button>Event Click</button>
      </div>
    );
  }
}

export default EventBind;
