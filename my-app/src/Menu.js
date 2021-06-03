// import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Resume } from "./address-card-solid.svg";

import { ReactComponent as Home } from "./home-solid.svg";

export default function Menu({ toggleMenu, menuOpen }) {
  console.log("menuOpen: ", menuOpen);
  return (
    <div
      className={menuOpen ? "hamburger-menu-opened" : "hamburger-menu-closed"}
    >
      <ul className="menu">
        <NavLink
          onClick={toggleMenu}
          exact
          to="/"
          activeClassName="burger-active"
        >
          <Home className="nav-icon" alt="home icon" />

          <li>Home</li>
        </NavLink>
        <NavLink
          exact
          to="/about"
          activeClassName="burger-active"
          onClick={toggleMenu}
        >
          <Resume className="nav-icon" alt="resume icon" />
          <li>About Me</li>
        </NavLink>
      </ul>
    </div>
  );
}
