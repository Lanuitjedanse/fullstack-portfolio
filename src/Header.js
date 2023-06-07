import "./Header.css";
// import portfolio from "./portfolio.svg";
import Menu from "./Menu";
import { ReactComponent as MenuIcon } from "./bars-solid.svg";
import { ReactComponent as Cancel } from "./times-solid.svg";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // let src;
  // if (menuOpen) {
  //   src = cancel;
  // } else {
  //   src = menu;
  // }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <div className="title-portfolio">
          <h1>Lucie Bellenger</h1>

          <h3>Full Stack Web Developer</h3>
        </div>

        {!menuOpen && (
          <MenuIcon
            className="hamburger"
            alt="hamburger menu"
            onClick={toggleMenu}
          />
        )}
        {menuOpen && (
          <Cancel className="hamburger" alt="close icon" onClick={toggleMenu} />
        )}
      </header>

      <Menu toggleMenu={toggleMenu} menuOpen={menuOpen} />
    </>
  );
}
