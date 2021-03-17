import "./Footer.css";

import { ReactComponent as Email } from "./email.svg";
import { ReactComponent as Github } from "./github.svg";
import { ReactComponent as LinkedIn } from "./linkedin.svg";
// import { useState } from "react";

export default function Footer() {
    return (
        <footer>
            <div className="box-footer">
                <div className="row">
                    <Email className="menu-icon" />
                    <a
                        className="email"
                        href="mailto:bellenger.lucie@gmail.com"
                    >
                        bellenger.lucie@gmail.com
                    </a>
                </div>
                <div className="row">
                    <Github className="menu-icon" />
                    <a
                        className="email"
                        href="https://github.com/Lanuitjedanse"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Lanuitjedanse
                    </a>
                </div>
                <div className="row">
                    <LinkedIn className="menu-icon" />
                    <a
                        className="email"
                        href="https://www.linkedin.com/in/lucie-bellenger-890b9860/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
