import React, { Component } from "react";

class HandlerWithoutBinding extends Component {
  state = {
    msg: "Hello",
  };
  gmHandler = () => {
    this.setState({ msg: "GM" });
  };
  gaHandler = () => {
    this.setState({ msg: "GA" });
  };
  geHandler = () => {
    this.setState({ msg: "GE" });
  };
  gnHandler = () => {
    this.setState({ msg: "GN" });
  };
  render() {
    return (
      <div>
        <h3>Un Binding Component</h3>
        <h2>Message Value:{this.state.msg}</h2>
        <button onClick={this.gmHandler}>gm</button>
        <button onClick={this.gaHandler}>ga</button>
        <button onClick={this.geHandler}>ge</button>
        <button onClick={this.gnHandler}>gn</button>
      </div>
    );
  }
}

export default HandlerWithoutBinding;
