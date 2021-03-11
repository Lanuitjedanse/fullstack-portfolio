import React from "react";
import { NavLink, Router } from "react-router-dom";
import resume from "./online-resume.svg";
import home from "./home.svg";
import contact from "./communicate.svg";

export default function HamburgerMenu({ toggleBurgerMenu }) {
    return (
        <nav>
            <ul className="menu">
                <NavLink
                    onClick={toggleBurgerMenu}
                    exact
                    to="/"
                    activeClassName="burger-active"
                >
                    <img className="menu-icon" src={home} alt="home icon" />

                    <li>Home</li>
                </NavLink>
                <NavLink
                    exact
                    to="/resume"
                    activeClassName="burger-active"
                    onClick={toggleBurgerMenu}
                >
                    <img className="menu-icon" src={resume} alt="resume icon" />
                    <li>Resume</li>
                </NavLink>
                <NavLink
                    onClick={toggleBurgerMenu}
                    to="/contact-me"
                    activeClassName="burger-active"
                >
                    <img
                        className="menu-icon"
                        src={contact}
                        alt="contact icon"
                    />
                    <li>Contact me</li>
                </NavLink>
            </ul>
        </nav>
    );
}
