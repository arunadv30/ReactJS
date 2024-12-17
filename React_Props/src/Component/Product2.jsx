import React from "react";

class Product2 extends React.Component {
  state = {
    pName: "Kross Hexa 29T",
    price: 20688,
    qty: 1,
    image:
      "https://tse3.mm.bing.net/th?id=OIP.2hRD7joCJ0fSQ_h2hNkK0wHaEK&pid=Api&P=0&h=180",
  };
  incrHandler = () => {
    this.setState({ qty: this.state.qty + 1 });
  };
  decrHandler = () => {
    this.setState({ qty: this.state.qty - 1 });
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
                  <td>{this.state.pName}</td>
                  <td>
                    <img width="80px" src={this.state.image} alt="" />
                  </td>
                  <td>{this.state.price}</td>
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
                  <td>{this.state.qty * this.state.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Product2;
