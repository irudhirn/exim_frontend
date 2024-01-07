import React from "react";

import classes from "./Connect.module.css";

const Connect = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h3 className={classes.sectionHeading}>Connect with us</h3>
        <div className={classes.sectionHeadingBorder}></div>
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
        <div className={classes.connections}>
          <div className={classes.connection}>
            <div>
              <span className={`${classes.icon} ${classes.addressIcon}`}>
                <i className="fa-solid fa-location-dot"></i>
              </span>
            </div>
            <p className={classes.heading}>Address</p>
            <p className={classes.desc}>
              150, 3rd Floor,
              <br />
              Amrut Udhyog Nagar, Kamrej, Surat
              <br /> Gujarat - 394185 INDIA
            </p>
          </div>
          <div className={classes.connection}>
            <div>
              <span className={`${classes.icon} ${classes.phoneIcon}`}>
                <i className="fa-solid fa-mobile-screen-button"></i>
              </span>
            </div>
            <p className={classes.heading}>Phone</p>
            <p className={classes.desc}>+91 7096 553300</p>
          </div>
          <div className={classes.connection}>
            <div>
              <span className={`${classes.icon} ${classes.emailIcon}`}>
                <i className="fa-solid fa-envelope"></i>
              </span>
            </div>
            <p className={classes.heading}>Email</p>
            <p className={classes.desc}>eximburg@gmail.com</p>
          </div>
          <div className={classes.connection}>
            <div>
              <span className={`${classes.icon} ${classes.calenderIcon}`}>
                <i className="fa-solid fa-business-time"></i>
              </span>
            </div>
            <p className={classes.heading}>Business Hours</p>
            <p className={classes.desc}>
              Monday To Saturday: 10 AM To 6 PM Closed on Sunday & Bank Holiday
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
