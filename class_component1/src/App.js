import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Service from "./components/Service";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <Header />
        <Product />
        <Service />
        <Footer />
      </div>
    );
  }
}
export default App;
