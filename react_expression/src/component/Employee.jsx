import React, { Component } from "react";

class Employee extends Component {
  emp = {
    eid: 103,
    ename: "Priyanka",
    loc: ["Wayanad", "New Delhi", "Bangalore"],
    address: {
      city: "Noida",
      pin: undefined,
    },
  };
  render() {
    return (
      <div>
        <h2>Employee Component</h2>
        <pre>{JSON.stringify(this.emp)}</pre>
        <hr />
        <h4>Employee Data</h4>
        <h5>Name:{this.emp.ename}</h5>
        <h5>Location:{this.emp.loc[1]}</h5>
        <h5>Preffered Address:{this.emp.address.city}</h5>
        <h5>Pincode:{this.emp.address.pin}</h5>
      </div>
    );
  }
}

export default Employee;
