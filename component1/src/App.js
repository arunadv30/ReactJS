import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Service from "./components/Service";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <hr />
      <Header />
      <hr />
      <Product />
      <hr />
      <Service />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
