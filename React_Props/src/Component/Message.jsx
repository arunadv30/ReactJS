import React, { useState } from "react";

//usestate hook returns destructured array, 1.variable, 2.function
//we can use any names for setMessage instead of setState
const Message = () => {
  let [msg, setMessage] = useState("Hello");

  let gmHandler = () => {
    setMessage("GM");
  };
  let gnHandler = () => {
    setMessage("GN");
  };

  return (
    <div>
      <h1>Message Vale:{msg}</h1>
      <button onClick={gmHandler}>GM</button>
      <button onClick={gnHandler}>GN</button>
    </div>
  );
};

export default Message;
