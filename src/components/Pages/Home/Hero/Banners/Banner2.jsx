import React from "react";

import classes from "./Banner2.module.css";

const Banner2 = () => {
  // prettier-ignore
  return (
    <section className={classes.section}>
        <div className={classes.container}>
          <div className={classes.textBox}>
            <h1 className={classes.title}>Eximburg Manufactures<br/>a wide range of herbal<br/>products in different format</h1>
            <p className={classes.desc}>We have a great team with expertise<br/>to develop the best product as per<br/>market requirements.</p>
          </div>
        </div>
      </section>
  );
};

export default Banner2;
