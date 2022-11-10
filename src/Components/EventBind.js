import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello"
    };
  }

  // clickhandler() {
  //   this.setState({
  //     message: "hello event clicked1"
  //   });
  // };

  clickhandler = () => {
    this.setState({
      message: "hello event clicked1"
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickhandler.bind(this)}>Event Click</button> */}
        {/* <button onClick={() => this.clickhandler()}>Event Click</button> */}
        <button onClick={this.clickhandler}>Event Click</button>
      </div>
    );
  }
}

export default EventBind;
