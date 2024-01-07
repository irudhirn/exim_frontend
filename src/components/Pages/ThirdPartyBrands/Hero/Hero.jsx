import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  // prettier-ignore
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <p className={classes.pageTitle}>Checkout our third</p>
        <h2 className={classes.pageHeading}>
          party&nbsp;<span style={{ color: "#FFF" }} className={classes.gradientText}>Brands</span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
