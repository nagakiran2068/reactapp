import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "parent"
    };
  }

  greetParent = (childName) => {
    alert(`hello ${this.state.parentName} from ${childName}`);
  };

  render() {
    return (
      <div>
        <ChildComponent greethandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
