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
