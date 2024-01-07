import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import classes from "./Partners.module.css";

const Partners = () => {
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const partnersRef = useRef();

  useEffect(() => {
    const section = partnersRef.current;

    const revealSection = (entries, observer) => {
      const [entry] = entries;

      if (!entry.isIntersecting) {
        return;
      }
      console.log("intersecting");

      setIsFirstLoading(false);
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0,
      rootMargin: "-180px"
    });

    sectionObserver.observe(section);
  }, []);
  return (
    <section className={classes.section}>
      <div
        className={`${classes.container} ${
          !isFirstLoading ? classes.oscillate : ""
        }`}
        ref={partnersRef}
      >
        <h3 className={classes.sectionHeading}>Selling Partners</h3>
        <div className={classes.sectionHeadingBorder}></div>
        <div className={classes.partners}>
          {/* <div className={classes.partner}>
            <Link
              to={
                "https://www.amazon.in/s?me=A2TS737950EK0R&language=en_IN&linkCode=sl2&linkId=cdba382d645b139c75e6e981f77f225f&redirect=true&tag=vekariyamaulik2669-21&ref=as_li_ss_tl"
              }
              target="_blank"
            >
              <img
                src={require("../../../../resources/images/amazon-src.webp")}
                alt="amazon"
                srcSet={require("../../../../resources/images/amazon-srcset.webp")}
              />
            </Link>
          </div> */}
          {/* <div className={classes.partner}>
            <Link to={"https://medicalbazzar.com/"} target="_blank">
              <img
                src={require("../../../../resources/images/medical-bazzar-src.webp")}
                alt="amazon"
                srcSet={require("../../../../resources/images/medical-bazzar-srcset.webp")}
              />
            </Link>
          </div> */}
          {/* <div className={classes.partner}>
            <Link to={"https://www.retailpharmaindia.com/"} target="_blank">
              <img
                src={require("../../../../resources/images/retail-pharma-src.webp")}
                alt="amazon"
                srcSet={require("../../../../resources/images/retail-pharma-srcset.webp")}
              />
            </Link>
          </div> */}
          {/* <div className={classes.partner}>
            <Link to={"https://www.flipkart.com/"} target="_blank">
              <img
                src={require("../../../../resources/images/flipkart-logo-src.webp")}
                alt="amazon"
                srcSet={require("../../../../resources/images/flipkart-logo-srcset.webp")}
              />
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Partners;
