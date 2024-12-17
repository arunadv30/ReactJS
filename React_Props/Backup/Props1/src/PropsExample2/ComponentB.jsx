import React, { Component } from "react";

class ComponentB extends Component {
  render() {
    return (
      <div>
        <h1>Component B</h1>

        <pre>{JSON.stringify(this.props)}</pre>
        <h3>Employee Name:{this.props.first_Name}</h3>
        <h4>Employee Id: {this.props.id}</h4>
        <h4>Location:{this.props.loc}</h4>
        <h4>Location:{this.props.loc[1]}</h4>
        <hr />
      </div>
    );
  }
}

export default ComponentB;
