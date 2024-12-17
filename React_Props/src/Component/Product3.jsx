import React from "react";

class Product3 extends React.Component {
  state = {
    product: {
      pName: "Kross Hexa 29T",
      price: 20688,
      qty: 1,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.2hRD7joCJ0fSQ_h2hNkK0wHaEK&pid=Api&P=0&h=180",
    },
    user: {},
  };
  incrHandler = () => {
    this.setState({
      product: { ...this.state.product, qty: this.state.product.qty + 1 },
    });
  };
  decrHandler = () => {
    this.setState({
      product: { ...this.state.product, qty: this.state.product.qty - 1 },
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.product.pName}</td>
                  <td>
                    <img width="80px" src={this.state.product.image} alt="" />
                  </td>
                  <td>{this.state.product.price}</td>
                  <td>
                    <i
                      onClick={this.incrHandler}
                      className="fa fa-plus-circle"
                    ></i>
                    {this.state.qty}
                    <i
                      onClick={this.decrHandler}
                      className="fa fa-minus-circle"
                    ></i>
                  </td>
                  <td>{this.state.product.qty * this.state.product.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Product3;
