import "./Footer.css";

import { ReactComponent as Email } from "./paper-plane-solid.svg";
import { ReactComponent as Github } from "./github-brands.svg";
import { ReactComponent as GitLab } from "./gitlab-brands.svg";

import { ReactComponent as LinkedIn } from "./linkedin-in-brands.svg";
// import { useState } from "react";

export default function Footer() {
  return (
    <footer>
      <div className="box-footer">
        <div className="row">
          <Email className="menu-icon color-icon" />
          <a className="email" href="mailto:bellenger.lucie@gmail.com">
            bellenger.lucie@gmail.com
          </a>
        </div>
        <div className="row">
          <Github className="menu-icon color-icon" />
          <a
            className="email"
            href="https://github.com/Lanuitjedanse"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <div className="row">
          <GitLab className="menu-icon color-icon" />
          <a
            className="email"
            href="https://gitlab.com/Lucie.bellenger"
            target="_blank"
            rel="noreferrer"
          >
            GitLab
          </a>
        </div>
        <div className="row">
          <LinkedIn className="menu-icon color-icon" />
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
