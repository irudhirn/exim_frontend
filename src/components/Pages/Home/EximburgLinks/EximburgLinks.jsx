import React from "react";
import { Link } from "react-router-dom";

import classes from "./EximburgLinks.module.css";

// prettier-ignore
const EximburgLinks = () => {
  return (
    <section className={classes.section}>
        <div className={classes.container}>
            <div className={classes.logoImg}>
                <img src={require('../../../../resources/images/nav-logo.webp')} alt="logo" className={classes.logo}/>
            </div>
            <div className={classes.links}>
                <div className={classes.link}>
                    <Link to="https://eximburg.in" target={"_blank"}>
                        <span className={classes.linkIcon}><i className="fa-solid fa-globe"></i></span>
                        <span className={classes.linkText}>eximburg.in</span>
                    </Link>                    
                </div>
                <div className={classes.link}>
                    <Link  to="https://www.facebook.com/eximburg/" target={"_blank"}>
                        <span className={classes.linkIcon}><i className="fa-brands fa-facebook"></i></span>
                        <span className={classes.linkText}>eximburg</span>
                    </Link>                    
                </div>
                <div className={classes.link}>
                    <Link to="https://www.instagram.com/eximburginternational/?hl=en"
          target={"_blank"}>
                        <span className={classes.linkIcon}><i className="fa-brands fa-instagram"></i></span>
                        <span className={classes.linkText}>eximburginternational</span>
                    </Link>                    
                </div>
                <div className={classes.link}>
                    <Link to="https://in.linkedin.com/company/eximburg" target={"_blank"}>
                        <span className={classes.linkIcon}><i className="fa-brands fa-linkedin"></i></span>
                        <span className={classes.linkText}>eximburg</span>
                    </Link>                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default EximburgLinks;
