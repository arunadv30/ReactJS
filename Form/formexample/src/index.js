// import ReactDom from "react-dom";
// import App from "./App";

// ReactDom.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom/client"; // Note the '/client' suffix
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
