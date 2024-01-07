import React from "react";

import classes from "./Banner3.module.css";

const Banner3 = () => {
  // prettier-ignore
  return (
    <section className={classes.section}>
        <div className={classes.container}>
          <div className={classes.textBox}>
            <h1 className={classes.title}>Eximburg is well known name<br/>in industry for <span className={classes.highlighted}>premium</span><br/><span className={classes.highlighted}>quality ayurvedic</span> products</h1>
            <p className={classes.desc}>We provide pre and post sales service<br/>to boost your business</p>
          </div>
          {/* <div className={classes.imgBox}> */}
            {/* <img src={require('../../../../../resources/pictures/img_17.png')} alt="bowlImage" className={`${classes.img} ${classes.bowlImg}`}/> */}
            {/* <img src={require('../../../../../resources/images/bottles_1-1.png')} alt="bottles" className={`${classes.img} ${classes.bottlesImg}`}/> */}
          {/* </div> */}
        </div>
      </section>
  );
};

export default Banner3;
