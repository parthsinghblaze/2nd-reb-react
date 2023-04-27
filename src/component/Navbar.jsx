import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { WrapperContext } from "../App";

function Navbar() {
  const { searchFormValue, setSearchFormValue } = useContext(WrapperContext);

  const data = useLocation();

  if (data.pathname === "/login") {
    return false;
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/cocktails">
                Cocktails
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          <div>
            <input
              value={searchFormValue}
              placeholder="Search your drinks..."
              className="form-control"
              style={{ border: "1px solid red" }}
              onChange={(e) => setSearchFormValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
