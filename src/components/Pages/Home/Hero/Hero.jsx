import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Banner1 from "./Banners/Banner1";
import Banner2 from "./Banners/Banner2";
import Banner3 from "./Banners/Banner3";

import img1 from "../../../../resources/images/banner_1.jpg";
import img2 from "../../../../resources/images/banner_2.jpg";
import img3 from "../../../../resources/images/banner_3.jpg";

import Wrapper from "../../../UI/Wrapper";

import classes from "./Hero.module.css";

const DUMMY_BGS = [
  { id: "bg1", name: "Ayurvedic Products", img: "img_7.jpg" }, // 7, 8
  { id: "bg2", name: "Herbal Products", img: "img_14.jpg" }, // 9, 10, 11, 12, 13, 14
  { id: "bg3", name: "Third Party Mfg", img: "" } //
];

const DUMMY_BGS_2 = [
  { id: "bg1", name: "Ayurvedic Products", img: "hero-bg-2.jpg" }, // 7, 8
  { id: "bg2", name: "Herbal Products", img: "hero-bg-5.jpg" }, // 9, 10, 11, 12, 13, 14
  { id: "bg3", name: "Third Party Mfg", img: "hero-bg-4.webp" } //
];

const Hero = () => {
  const [bgImgs, setBgImgs] = useState(DUMMY_BGS);
  let [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);
  let intervalId = null;

  useEffect(() => {
    intervalId = setInterval(() => {
      setCounter((prev) => {
        if (prev < bgImgs.length - 1) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [counter]);

  // prettier-ignore
  return (
    <Wrapper>
          {counter === 0 && <Banner1 />}
          {counter === 1 && <Banner2 />}
          {counter === 2 && <Banner3 />}
          {/* <Banner1 /> */}
          {/* <Banner2 /> */}
          {/* <Banner3 /> */}
    </Wrapper>
  );
};

export default Hero;

/*


import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { HOME_HERO } from "../../../../store/constants";
import classes from "./Hero.module.css";

const Hero = () => {
  const [bgImgs, setBgImgs] = useState(HOME_HERO);
  let [counter, setCounter] = useState(3);
  const [isActive, setIsActive] = useState(false);
  let intervalId = null;

  // useEffect(() => {
  //   intervalId = setInterval(() => {
  //     // console.log(counter);
  //     // setIsActive((prev) => !prev);
  //     setCounter((prev) => {
  //       console.log(prev);
  //       if (prev < bgImgs.length - 1) {
  //         return prev + 1;
  //       } else {
  //         return 0;
  //       }
  //     });
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, [counter]);

  return (
    <section className={classes.sectionHero} style={{}}>
      <div
        className={classes.bannerContainer}
        // style={{
        //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
        // url('${bgImgs[counter].img}')`
        //   // url('../../../../resources/images/home-hero-img-${counter}.webp')`
        // }}
      >
        <div className={classes.container}>
          <div className={classes.hero}>
            <div className={classes.heroTextEl}>
              <h1 className={classes.heroTextElHeading}>
                Eximburg International Pvt. Ltd.
              </h1>
              <p className={classes.heroTextElDesc}>
                We manufacture and export innovative R&D based products in FMCG.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

*/

/*

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Banner1 from "./Banners/Banner1";
import Banner2 from "./Banners/Banner2";
import Banner3 from "./Banners/Banner3";

import Wrapper from "../../../UI/Wrapper";

const DUMMY_BGS = [
  { id: "bg1", name: "Ayurvedic Products", img: "img_7.jpg" }, // 7, 8
  { id: "bg2", name: "Herbal Products", img: "img_14.jpg" }, // 9, 10, 11, 12, 13, 14
  { id: "bg3", name: "Third Party Mfg", img: "" } //
];

const Hero = () => {
  const [bgImgs, setBgImgs] = useState(DUMMY_BGS);
  let [counter, setCounter] = useState(2);
  const [isActive, setIsActive] = useState(false);
  let intervalId = null;

  useEffect(() => {
    intervalId = setInterval(() => {
      setCounter((prev) => {
        if (prev < bgImgs.length - 1) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [counter]);

  return (
    <Wrapper>
      {counter === 0 && <Banner1 />}
      {counter === 1 && <Banner2 />}
      {counter === 2 && <Banner3 />}
    </Wrapper>
  );
};

export default Hero;

*/
