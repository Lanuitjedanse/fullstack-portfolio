import "./Header.css";
// import portfolio from "./portfolio.svg";
import Menu from "./Menu";
import menu from "./menu.svg";
import cancel from "./cancel.svg";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  let src;
  if (menuOpen) {
    src = cancel;
  } else {
    src = menu;
  }

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

        <img src={src} className="hamburger" alt="logo" onClick={toggleMenu} />
      </header>

      <Menu toggleMenu={toggleMenu} menuOpen={menuOpen} />
    </>
  );
}
