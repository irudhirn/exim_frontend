import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <p className={classes.pageTitle}>Events at</p>
        <h2 className={classes.pageHeading}>Eximburg</h2>
      </div>
    </section>
  );
};

export default Hero;
