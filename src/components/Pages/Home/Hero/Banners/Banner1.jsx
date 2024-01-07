import React from "react";

import classes from "./Banner1.module.css";

const Banner1 = () => {
  // prettier-ignore
  return (
    <section className={classes.section}>
        <div className={classes.container}>
          <div className={classes.textBox}>
            <h1 className={classes.title}>Eximburg Offer well developed<br/>products as per client's<br/> requirement</h1>
            <p className={classes.desc}><span className={classes.descText}>We provide pre and post sales service<br/>to boost your business</span></p>
          </div>
          {/* <div className={classes.imgBox}> */}
            {/* <img src={require('../../../../../resources/images/herbal_bowl-1.png')} alt="bowlImage" className={`${classes.img} ${classes.bowlImg}`}/> */}
            <img src={require('../../../../../resources/images/bottles_1-1.png')} alt="bottles" className={`${classes.img} ${classes.bottlesImg}`}/>
          {/* </div> */}
        </div>
      </section>
  );
};

export default Banner1;
