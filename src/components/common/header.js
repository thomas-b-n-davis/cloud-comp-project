import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/js/bootstrap.min.js";
import "../../css/header.css";
/**
 * header component handles navigation, logout,
 * and emittes search event, assignes header context search
 * term and type.
 */
const Header = props => {
 
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">
            <img src="doge.png" />
          </Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 col">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/search">
                Search Demo
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/privacyPolicy">
                Privacy Policy
              </Link>
            </li>
          </ul>
          <div className="col px-0">
            <ul className="navbar-nav float-lg-right">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={
                    true
                      ? "/login"
                      : "/user"
                  }
                >
                  <i className="fa fa-user fa-2x mr-2" aria-hidden="true"></i>
                  { // window.sessionStorage.getItem("userid") === null
                    true ? "Login"
                    : "User Profile"} 
                </Link>
              </li>

              <li
                // className={
                //   window.sessionStorage.getItem("userid") === null
                //     ? "d-none"
                //     : "nav-item"
                // }
              >
                <Link className="nav-link" to="#">
                  <i
                    className="fa fa-sign-out fa-2x mr-2"
                    aria-hidden="true"
                  ></i>
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
