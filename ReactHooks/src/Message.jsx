import React from "react";

//updating state without handlers - using arrow function
const Message = () => {
  let [msg, setMessage] = React.useState("Hello");
  return (
    <div>
      <h3>Message Component</h3>
      <h4>Message Value:{msg}</h4>
      <button
        onClick={() => {
          setMessage("Good Morning");
        }}
      >
        GM
      </button>
      <button
        onClick={() => {
          setMessage("Good Night");
        }}
      >
        GN
      </button>
    </div>
  );
};

export default Message;
