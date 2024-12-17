import React from "react";

class Product extends React.Component {
  //qty = 1; instead
  state = { qty: 1 };

  incrHandler = () => {
    this.setState({ qty: this.state.qty + 1 });
    console.log("incr");
  };
  decrHandler = () => {
    this.setState({ qty: this.state.qty - 1 });
    console.log("decr");
  };
  render() {
    console.log("First Render");
    return (
      <div>
        <h3>Product Comp</h3>
        {/*<h3>Product Qty:{this.qty}</h3>*/}
        <h3>Product Qty:{this.state.qty}</h3>
        <button onClick={this.incrHandler}>Increment</button>
        <button onClick={this.decrHandler}>Decreament</button>
      </div>
    );
  }
}
export default Product;
