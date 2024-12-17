import React from "react";
import MessageFunction from "./componentLifecycle/MessageFunction";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <hr />
        <MessageFunction />
        <hr />
      </div>
    );
  }
}
export default App;
