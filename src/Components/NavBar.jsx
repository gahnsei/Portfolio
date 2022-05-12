import React from "react";

function NavBar() {
  return (
    <header>
      <span>Sei Gahn</span>
      <ul class="menu">
        <li>
          <a href="/#s1">About</a>
        </li>
        <li>
          <a href="#s2">Projects</a>
        </li>
        <li>
          <a href="#s3">Skills</a>
        </li>
        <li>
          <a href="#s4">Contact</a>
        </li>
        <li>|</li>
        <li>
          <a
            href="https://docs.google.com/document/d/1D84RN_u6Bb_Cd1G8ZE2wWAr6EfotdDUl7O4zbZx62K0/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
        <li>|</li>
        <li>
          <a href="https://github.com/gahnsei" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sei-gahn/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
