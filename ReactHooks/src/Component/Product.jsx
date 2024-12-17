import React, { useState } from "react";

//no auto merging in useState as in class state, spread operator should be used
//for object, spread operator must be used to retrieve the values

const Product = () => {
  let [prod, setProduct] = useState({
    pName: "cycle",
    qty: 1,
    price: 45000,
  });
  let incrHandler = () => {
    setProduct({ ...prod, qty: prod.qty + 1 });
  };

  return (
    <div>
      <h1>Product Component</h1>
      <h3>Product:{prod.pName}</h3>
      <h3>Product:{prod.price}</h3>
      <button
        onClick={() => {
          setProduct({ ...prod, qty: prod.qty - 1 });
        }}
      >
        Decr
      </button>
      <button onClick={incrHandler}>Incr</button>
    </div>
  );
};

export default Product;
