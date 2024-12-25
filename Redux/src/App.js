import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Message from "./Message/Message";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <h2>App Component</h2>
        <Message />
      </Provider>
    </div>
  );
};

export default App;
