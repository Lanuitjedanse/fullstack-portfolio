import "./Header.css";
import portfolio from "./portfolio.svg";

import { useState, useEffect } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <img src={portfolio} className="menu-icon" alt="portfolio icon" />
            <h1>Lucie's Portfolio</h1>
        </header>
    );
}

// {
//     menuOpen ? (
//         <Menu />
//     ) : (
//         <img src={menu} className="menu-icon" alt="logo" onClick={toggleMenu} />
//     );
// }
