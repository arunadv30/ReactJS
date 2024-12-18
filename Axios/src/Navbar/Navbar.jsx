import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/index" className="navbar-brand">
          Logo
        </Link>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li>
              <Link to="/index" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
