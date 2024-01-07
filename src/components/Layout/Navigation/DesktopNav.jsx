import React from "react";
import { useNavigate, Link } from "react-router-dom";
import classes from "./DesktopNav.module.css";

import pdf from "../../../resources/pictures/Swosh.pdf";

const NavLinks = ({ name, menu, page }) => {
  // const navigate = useNavigate();

  return (
    <li
      className={classes["navLinks__list--item"]}
      // onClick={() => navigate(page)}
    >
      <Link to={page} className={classes.linkBtn}>
        <span className={classes.linkTxtSpan}>
          <p className={classes.linkTxt}>{name}</p>
        </span>
      </Link>
    </li>
  );
};

const DesktopNav = ({ navigationLinks }) => {
  return (
    <nav className={classes.navLinks}>
      <ul className={classes.navLinks__list}>
        {navigationLinks.map((link, i) => {
          const { id, name, menu, page } = link;
          return <NavLinks key={id} name={name} menu={menu} page={page} />;
        })}
      </ul>
      <a
        href={pdf}
        download="Swosh"
        style={{
          display: "inline-block",
          marginLeft: "20px",
          textDecoration: "none",
          color: "var(--color1)",
          fontSize: "22px",
          fontWeight: 500,
          fontFamily: "Poppins"
        }}
      >
        {/* Catalogue */}
        <i className="fa-regular fa-file"></i>
      </a>
    </nav>
  );
};

export default DesktopNav;
