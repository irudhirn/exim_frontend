import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <p className={classes.pageTitle}>Explore opportunities to</p>
        <h2 className={classes.pageHeading}>work with us</h2>
      </div>
    </section>
  );
};

export default Hero;
