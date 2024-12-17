import React from "react";

const Employee1 = ({ data }) => {
  return (
    <div>
      <pre>JSON.stringify({data})</pre>
      <h1>City:{data.address.city}</h1>
    </div>
  );
};

export default Employee1;
