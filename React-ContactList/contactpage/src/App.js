import React from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ContactApp from "./Contacts/ContactApp";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/index" element={<Home />} />
          <Route path="/contact" element={<ContactApp />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
