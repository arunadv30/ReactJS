import React from "react";
import CompB from "./CompB";

const CompA = () => {
  let ename = "Rahul";
  return (
    <div>
      <h1>Component A</h1>
      <hr />
      <CompB name={ename} />
    </div>
  );
};

export default CompA;
