import React from "react";

import classes from "./Hero.module.css";

const Hero = () => {
  // prettier-ignore
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <p className={classes.pageTitle}>Explore our wide</p>
        <h2 className={classes.pageHeading}>
          range of&nbsp;<span style={{ color: "#FFF" }} className={classes.gradientText}>Products</span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
