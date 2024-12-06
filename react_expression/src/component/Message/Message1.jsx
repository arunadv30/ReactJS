import React from "react";

class Message1 extends React.Component {
  msg = "Good Morning";
  price = 700;
  colors = ["Red", "Blue", "Black"];
  emp = {
    eid: 101,
    ename: "Rahul",
  };
  render() {
    return (
      <div>
        <h2>Message Component-Class</h2>
        <h3>Message Value:{this.msg}</h3>
        <h4>Price:{this.price}</h4>
        <h4>Colors:{this.colors[1]}</h4>
        <h4>Employee Details:{JSON.stringify(this.emp)}</h4>
      </div>
    );
  }
}

export default Message1;
