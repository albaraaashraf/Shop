/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { NavbarContext } from "../layout/RootLayout";
import { useUser } from "../../Context/userContext";

import "./navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";

function Navbar() {
  const { showNavBar } = useContext(NavbarContext);

  const { user, setUser, signed } = useUser();

  function showData() {
    const data = document.querySelector(".user-info");
    if (data.classList.contains("hide")) data.classList.remove("hide");
    else data.classList.add("hide");
  }

  async function logOut() {
    await signOut(auth).then(() => {
      setUser({});
      window.location.reload();
    });
  }

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
              <ul className="navbar-nav mx-5 mx-md-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    Cart
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
                <li>
                  {signed ? (
                    <div className="container d-flex justify-content-center d-md-none">
                      <div className="user-container-smallScreen d-flex flex-column">
                        <div className="user-name-smallScreen">
                          <span> {user && user.userName}</span>
                        </div>
                        <div className="user-info-smallScreen">
                          <span>{user && user.email}</span>
                          <span>{user && user.nationality}</span>
                          <span>{user && user.gender}</span>
                          <span>
                            <button onClick={logOut}>Sign Out</button>
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <ul className="navbar-nav mb-2 mb-lg-0 d-md-none">
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            aria-current="page"
                            to="/SignUp"
                          >
                            Sign Up
                          </Link>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <Link
                            className="nav-link"
                            aria-current="page"
                            to="/logIn"
                          >
                            Log In
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>

              {signed ? (
                <div className="user-container d-none d-md-flex">
                  <div className="user-name" onClick={showData}>
                    <span> {user && user.userName}</span>
                  </div>
                  <div className="user-info hide">
                    <span>{user && user.email}</span>
                    <span>{user && user.nationality}</span>
                    <span>{user && user.gender}</span>
                    <span>
                      <button onClick={logOut}>Sign Out</button>
                    </span>
                  </div>
                </div>
              ) : (
                <div>
                  <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        aria-current="page"
                        to="/SignUp"
                      >
                        Sign Up
                      </Link>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link
                        className="nav-link"
                        aria-current="page"
                        to="/logIn"
                      >
                        Log In
                      </Link>
                    </li>
                  </ul>
                </div>
              )}

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
