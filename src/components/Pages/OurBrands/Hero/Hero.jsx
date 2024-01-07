import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  // prettier-ignore
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <p className={classes.pageTitle}>Checkout our</p>
        <h2 className={classes.pageHeading}>Brands</h2>
      </div>
    </section>
  );
};

export default Hero;
