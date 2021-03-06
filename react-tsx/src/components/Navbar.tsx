import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo marg">
          Todo
        </a>
        <ul id="nav-mobile" className="right list">
          <li>
            <NavLink to="/">List</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
