/*******************NAVBAR*******************/

import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      id="accueil"
      className="navbar navbar-expand-lg navbar-transparent bg-dark fixed-top"
    >
      <div className="container">
        <NavLink exact to="/" className="navbar-brand">
          <img className="logo" src={logo} alt="logo..." />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            icon={faEllipsisV}
            style={{ color: "#61dbfb", fontSize: "2rem" }}
          />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                accueil <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#presentation" className="nav-link">
                presentation
              </a>
            </li>
            <li className="nav-item">
              <a href="#competences" className="nav-link">
                competences
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
