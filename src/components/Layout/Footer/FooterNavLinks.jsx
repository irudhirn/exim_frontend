import React from "react";
import { useNavigate } from "react-router";
import classes from "./FooterNavLinks.module.css";

// prettier-ignore
const NavLinks = ({ name, menu, page }) => {
  const navigate = useNavigate();

  return (
    <li className={classes["navLinks__list--item"]} onClick={() => navigate(page)}>
      <button type="button" className={classes.linkBtn}>
        <span className={classes.linkTxtSpan}>
          <p className={classes.linkTxt}>{name}</p>
        </span>
      </button>
    </li>
  );
};

const FooterNavLinks = ({ navigationLinks }) => {
  return (
    <nav className={classes.navLinks}>
      <ul className={classes.navLinks__list}>
        {navigationLinks.map((link, i) => {
          const { id, name, menu, page } = link;
          return <NavLinks key={id} name={name} menu={menu} page={page} />;
        })}
      </ul>
    </nav>
  );
};

export default FooterNavLinks;
