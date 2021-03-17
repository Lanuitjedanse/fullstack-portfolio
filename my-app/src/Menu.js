import React from "react";
import Menu from "./Menu.css";
import { NavLink, Router } from "react-router-dom";
import { ReactComponent as Resume } from "./online-resume.svg";

import { ReactComponent as Home } from "./home.svg";
import { ReactComponent as Contact } from "./communicate.svg";

// import contact from "./communicate.svg";

export default function HamburgerMenu({ toggleMenu }) {
    return (
        <nav>
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
        </nav>
    );
}
