import React from "react";

class Message extends React.Component {
  constructor(props) {
    super(props);
    console.log("First Constructor Method");
  }
  componentDidMount() {
    console.log("Third  componentDidMount method");
  }

  render() {
    console.log("Second render method");
    return (
      <div>
        <h2>Message Component</h2>
      </div>
    );
  }
}
export default Message;
