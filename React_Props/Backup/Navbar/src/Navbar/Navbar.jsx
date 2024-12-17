import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <a className="navbar-brand" href="Logo">
        Logo
      </a>
      <div classNaame="ml-auto">
        <ul className="navbar-nav">
          <li>
            <a className="nav-link" href="Home">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="About">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="Services">
              Services
            </a>
          </li>
          <li>
            <a className="nav-link" href="Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
