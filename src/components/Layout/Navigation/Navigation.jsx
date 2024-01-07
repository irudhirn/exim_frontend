import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../../store/constants";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import classes from "./Navigation.module.css";

const Navigation = () => {
  // const [navigationLinks, setNavigationLinks] = useState(NAV_LINKS);

  return (
    <header className={classes.header}>
      <div className={`${classes.container} container`}>
        <Link to="/" className={classes.logo__link}>
          <div className={classes.logo}>
            <img
              src={require("../../../resources/images/nav-logo.webp")}
              alt="logo"
              className={classes.logoImg}
            />
          </div>
        </Link>
        <MobileNav navigationLinks={NAV_LINKS} />
        <DesktopNav navigationLinks={NAV_LINKS} />
      </div>
    </header>
  );
};

export default Navigation;
