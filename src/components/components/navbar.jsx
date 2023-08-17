/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { NavbarContext } from "../layout/RootLayout";

function Navbar() {
  const { showNavBar } = useContext(NavbarContext);

  return (
    <>
      {showNavBar && (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid ">
            <i className="fa-solid fa-shop text-light me-1"></i>
            <Link className="navbar-brand text-light" to="/">
              Shop
            </Link>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Us">
                    Contact Us
                  </Link>
                </li>
              </ul>

              <div>
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/SignUp">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link className="nav-link" aria-current="page" to="/SignIn">
                      Log In
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
