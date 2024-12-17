import React from "react";

class Employee extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Employee Component</h2>
        <pre>{JSON.stringify(this.props)}</pre>
        {/* <h4>Employee Name:{this.props.name}</h4>
        <h4>Employee availability:{this.props.avail}</h4>
        <h4>Employee Salary:{this.props.salary}</h4> */}

        <h4>Employee Name:{this.props.data.name}</h4>
        <h4>Employee Name:{this.props.data.loc[0]}</h4>
        <h4>Employee Name:{this.props.data.address.pincode}</h4>
      </React.Fragment>
    );
  }
}
export default Employee;
