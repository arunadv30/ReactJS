import React from "react";
import Employee from "../components/Employee";

class User extends React.Component {
  // userName = "Rahul";
  // avail = true;
  // sal = 45000.45;
  user_Data = {
    name: "Rahul",
    loc: ["Wayanad", "New Delhi"],
    address: {
      city: "Bangalore",
      pincode: 560035,
    },
  };
  render() {
    return (
      <>
        <h1>User Component</h1>
        <hr />
        {/* <Employee name={this.userName} avail={this.avail} salary={this.sal} /> */}
        <Employee data={this.user_Data} />
      </>
    );
  }
}

export default User;
