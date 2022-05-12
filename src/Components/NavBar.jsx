import React from "react";
import { useEffect, useState } from "react";
import Menu from "./Menu";

function NavBar() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(`resize`, () => setWindowWidth(window.innerWidth));

    setWindowWidth(window.innerWidth);

    return () =>
      window.removeEventListener(`resize`, () =>
        setWindowWidth(window.innerWidth)
      );
  }, []);

  const openSubNav = () => setOpenNav(true);
  const closeSubNav = () => setOpenNav(false);

  return (
    <header>
      <span>Sei Gahn</span>
      {windowWidth > 768 ? (
        <Menu />
      ) : openNav ? (
        <i className="fa-solid fa-xmark subnav-icon" onClick={closeSubNav}></i>
      ) : (
        <i className="fa-solid fa-bars subnav-icon" onClick={openSubNav}></i>
      )}
      {openNav && windowWidth <= 768 && (
        <div className="sub-nav">
          <Menu />
        </div>
      )}
    </header>
  );
}

export default NavBar;
