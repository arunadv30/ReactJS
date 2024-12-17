import React from "react";
import Employee1 from "./Employee1";

const User1 = () => {
  const user_Data = {
    name: "Rahul",
    loc: ["Wayanad", "Bangalore"],
    address: {
      city: "Bangalore",
      pin: 560035,
    },
  };
  return (
    <div>
      <h1>User Component</h1>
      <hr />
      {/* <Employee name={this.userName} avail={this.avail} salary={this.sal} /> */}
      <Employee1 data={user_Data} />
    </div>
  );
};

export default User1;
