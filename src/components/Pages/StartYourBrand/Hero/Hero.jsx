import React from "react";

import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.pageTitle}>Start your own brand.</h2>
      </div>
    </section>
  );
};

export default Hero;
