import React, { useState } from "react";

const MessageFunction = () => {
  let [msg, setMessage] = useState("Hello");

  let updateHandler = (msgValue) => {
    setMessage(msgValue);
  };

  return (
    <div>
      <h2>Binding in function</h2>
      <h2>Message Value:{msg}</h2>
      <button onClick={updateHandler.bind(null, "GM")}>gm</button>
      <button onClick={updateHandler.bind(null, "GA")}>ga</button>
      <button onClick={updateHandler.bind(null, "GE")}>ge</button>
      <button onClick={updateHandler.bind(null, "GN")}>gn</button>
    </div>
  );
};

export default MessageFunction;
