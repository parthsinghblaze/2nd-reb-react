import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

function Navbar() {
  const { carts } = useSelector((state) => state.product);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
            className="collapse navbar-collapse d-flex justify-content-between px-5"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/counter" className="nav-link">
                  Counter
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/product" className="nav-link">
                  Product
                </NavLink>
              </li>
            </ul>
            <NavLink className="nav-link position-relative" to="/cart">
              <AiOutlineShoppingCart />
              <span
                class="position-absolute top-0 start-100 translate-middle bg-danger border border-light rounded-circle"
                style={{
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: 800,
                  color: "white",
                  fontSize: "10px",
                }}
              >
                <span>{carts.length}</span>
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
      ;
    </div>
  );
}

export default Navbar;
