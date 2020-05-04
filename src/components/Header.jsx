import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import portrait from "../img/portrait.png";

class Header extends Component {
  render() {
    return (
      <header className="">
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top "
          style={{ height: "70px" }}
        >
          <a className="navbar-brand" href="#">
            Blog
          </a>
          <img
            src={portrait}
            style={{ width: "30px", height: "auto" }}
            className="rounded-circle"
          />
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/Home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            {/* <NavLink to="/Contact"> */}
            <a
              href="mailto:someone@example.com"
              className="btn btn-primary my-2 my-sm-0"
            >
              Send Email
            </a>
            {/* <button className="btn btn-primary my-2 my-sm-0" type="submit">
              Contact
            </button> */}
            {/* </NavLink> */}
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
