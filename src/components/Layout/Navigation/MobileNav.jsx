import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NAV_LINKS } from "../../../store/constants";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

import pdf from "../../../resources/pictures/Swosh.pdf";

import classes from "./MobileNav.module.css";

// prettier-ignore
const NavigationLink = ({ id, name, page, isSelected, navigationLinks, setNavigationLinks, setIsNavOpen }) => {
  const navigate = useNavigate();

  return (
    // prettier-ignore
    <li className={classes.menuListItem} onClick={() => {
      navigate(page);
      setIsNavOpen(false)
    }}>
      <div>
        <span>{name}</span>
      </div>
    </li>
  );
};

const MobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [navLinks, setNavLinks] = useState(NAV_LINKS);
  const [navigationLinks, setNavigationLinks] = useState([]);

  useEffect(() => {
    const tempArr = NAV_LINKS.map((el, i) => ({ ...el, isSelected: false }));
    setNavigationLinks(tempArr);
  }, []);

  const toggleHandler = () => {
    const tempArr = navigationLinks.map((el) => ({ ...el, isSelected: false }));
    setNavigationLinks(tempArr);
    setIsNavOpen((prev) => !prev);
  };

  return (
    <>
      {ReactDOM.createPortal(
        // prettier-ignore
        isNavOpen && ( 
          <Overlay setIsNavOpen={setIsNavOpen} navigationLinks={navigationLinks} setNavigationLinks={setNavigationLinks} />
        ),
        document.getElementById("overlay")
      )}
      <nav className={classes.mobileNav}>
        <div
          className={`${
            isNavOpen
              ? `${classes.hamburger} ${classes.active}`
              : `${classes.hamburger}`
          }`}
          onClick={() => toggleHandler()}
        >
          <div className={classes["hamburger__line"]}>
            <div className={classes["hamburger__line--top"]}></div>
            <div className={classes["hamburger__line--middle"]}></div>
            <div className={classes["hamburger__line--bottom"]}></div>
          </div>
        </div>
        <div
          className={`${
            isNavOpen
              ? `${classes.navMenu} ${classes.active}`
              : `${classes.navMenu}`
          }`}
        >
          <div className={classes.menu}>
            <ul className={classes.menuList}>
              {navigationLinks.map((link, i) => {
                const { id, name, page, isSelected } = link;
                return (
                  // prettier-ignore
                  <NavigationLink key={id} id={id} name={name} page={page} isSelected={isSelected} navigationLinks={navigationLinks} setNavigationLinks={setNavigationLinks} setIsNavOpen={setIsNavOpen} />
                );
              })}
              <li
                className={classes.menuListItem}
                onClick={() => {
                  setIsNavOpen(false);
                }}
              >
                <a
                  href={pdf}
                  download="Swosh"
                  style={{
                    display: "inline-block",
                    marginLeft: "0px",
                    textDecoration: "none",
                    color: "var(--color1)",
                    fontSize: "16px",
                    fontWeight: 500,
                    fontFamily: "Poppins"
                  }}
                >
                  Catalogue
                  {/* <i className="fa-regular fa-file"></i> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;

const Overlay = ({ setIsNavOpen, navigationLinks, setNavigationLinks }) => {
  const toggleHandler = () => {
    const tempArr = navigationLinks.map((el) => ({ ...el, isSelected: false }));
    setNavigationLinks(tempArr);
    console.log(tempArr);
    setIsNavOpen(false);
  };

  return (
    <div onClick={() => toggleHandler()} className={classes.backdrop}></div>
  );
};
