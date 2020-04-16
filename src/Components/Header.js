import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container ">
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 ">
        <Link to="/" className="navbar-brand text-success text-uppercase  ">
          <span className="h2">
            Cocktails{" "}
            <em>
              <small>Party</small>
            </em>
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto text-success text-uppercase h6 ">
            <li className="nav-item ">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
