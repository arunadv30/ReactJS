import React, { Component } from "react";

class EventBinding extends Component {
  state = {
    msg: "Hello",
  };
  updateHandler = (Value) => {
    this.setState({ msg: Value });
  };

  render() {
    return (
      <div>
        <h3>Binding Component</h3>
        <h2>Message Value:{this.state.msg}</h2>
        <button onClick={this.updateHandler.bind(this, "GM")}>gm</button>
        <button onClick={this.updateHandler.bind(this, "GA")}>ga</button>
        <button onClick={this.updateHandler.bind(this, "GE")}>ge</button>
        <button onClick={this.updateHandler.bind(this, "GN")}>gn</button>
      </div>
    );
  }
}

export default EventBinding;
