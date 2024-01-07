import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.mapContainer}>
          <iframe
            className={classes.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29757.630780075826!2d72.84002351612715!3d21.203920529482293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f71831f358b%3A0xbbce284f9f3a2ae4!2sEXIMBURG%20INTERNATIONAL%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1678708580563!5m2!1sen!2sin"
            // width="600px"
            // height="450px"
            style={{ border: "0px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Hero;
