import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productActions } from "../../../../store/product-slice";
import { AURVEDIC_THIRD_PARTY_MFG as ayurthirdpartymfg } from "../../../../store/constants";

import classes from "./AyurThirdMfg.module.css";

const AyurThirdMfg = ({ openThirdPopup, setThirdPartyPopupId }) => {
  const dispatch = useDispatch();

  const [isTitleLoading, setIsTitleLoading] = useState(true);
  const [isContentLoading, setIsContentLoading] = useState(true);
  const sectionRef = useRef();
  const contentRef = useRef();
  useEffect(() => {
    const section = sectionRef.current;

    const revealSection = (entries, observer) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      setIsTitleLoading(false);
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0,
      rootMargin: "-180px"
    });

    sectionObserver.observe(section);
  }, []);

  useEffect(() => {
    const section = contentRef.current;

    const revealSection = (entries, observer) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      setIsContentLoading(false);
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0,
      rootMargin: "-150px"
    });

    sectionObserver.observe(section);
  }, []);

  // prettier-ignore
  const slides = ayurthirdpartymfg.map((test, i) => {
    const { id, name, img, page, desc, category, details } = test;

    return (
      <li className={`${classes.product} ${isContentLoading ? classes.inActive : ''}`} key={id}>
        <Link to="/products-category/third-party-cosmetic-beauty-products" onClick={() => dispatch(productActions.changeProduct({ id: 1, name: name, img: img, page: page, desc: desc, details: details }))}>
          <div className={classes.imgBox}>
            <img src={require(`../../../../resources/images/${img}`)} alt="img" className={classes.img} />
          </div>
          <p className={classes.name}>{name}</p>
        </Link>
        <div className={classes.readBtnBox}>
          <button className={classes.readBtn} onClick={openThirdPopup}>Read More</button>
        </div>
      </li>
    );
  });

  // prettier-ignore
  return (
    <section className={classes.section} ref={sectionRef}>
      <img src={require(`../../../../resources/images/ayur-third-party-mfg.jpg`)} alt="ayur-third-party-mfg" style={{width: '100%'}}/>
      {/* <h3 className={`${classes.sectionHeading} ${isTitleLoading ? classes.hidden : ''}`}>Ayurvedic third party manufacturing</h3>
      <div className={classes.sectionHeadingBorder} /> */}
      <div className={classes.container}>
        <div className={classes.testimonialContainer} ref={contentRef}>
          <ul className={classes.products}>
            {slides[ayurthirdpartymfg.length - 3]}
            {slides[ayurthirdpartymfg.length - 2]}
            {slides[ayurthirdpartymfg.length - 1]}
            {ayurthirdpartymfg.map((test, i) => {
              const { id, name, img, page, desc, category, details } = test;
              return (
                <li className={`${classes.product} ${isContentLoading ? classes.inActive : ''}`} key={id}>
                  <Link to="/products-category/third-party-cosmetic-beauty-products" onClick={() => dispatch(productActions.changeProduct({ id: 1, name: name, img: img, page: page, desc: desc, details: details }))}>
                    <div className={classes.imgBox}>
                      <img
                        src={require(`../../../../resources/images/${img}`)}
                        alt="img"
                        className={classes.img}
                      />
                    </div>
                    <p className={classes.name}>{name}</p>
                  </Link>
                  <button className={classes.readBtn} onClick={() => {openThirdPopup(); setThirdPartyPopupId(id)}}>Read More</button>
                </li>
              );
            })}
            {slides[0]}
            {slides[1]}
            {slides[2]}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AyurThirdMfg;

/*



*/

/*
          
<button
  className={`${classes.prev} ${classes.btn}`}
  onClick={() => prev()}>
  <i className="fa-solid fa-chevron-left"></i>
</button>
<button
  className={`${classes.next} ${classes.btn}`}
  onClick={() => next()}>
  <i className="fa-solid fa-chevron-right"></i>
</button>
          
*/

/*

const [isFirstLoading, setIsFirstLoading] = useState(true);
const [isStopping, setIsStopping] = useState(false);

const [counter, setCounter] = useState(2);
const [transition, setTransition] = useState("all 1s ease");


// style={{
//   // transform: `translateX(-${counter * 0.25 * 100}%)`,
//   transition: `${transition}`
// }}

const next = () => {
  if (counter === ayurthirdpartymfg.length) {
    setCounter((prev) => prev + 1);
    setTranslateDistance((prev) => prev + 300);
    setTransition("all 0.6s ease");

    setTimeout(() => {
      setCounter(1);
      setTranslateDistance(600);
      setTransition("none");
    }, 600);
    //   console.log(counter);

    return;
  }
  if (counter < ayurthirdpartymfg.length) {
    setCounter((prev) => prev + 1);
    setTranslateDistance((prev) => prev + 300);

    setTransition("all 0.6s ease");
    //   console.log(counter);
    return;
  }
};

let intervalId;

// useEffect(() => {
//   if(!isStopping){
//     intervalId = setInterval(() => {
//       next();
//     }, 4000);
//   }
//   if(isStopping) return;

//   return () => clearInterval(intervalId);
// }, [counter, transition, isStopping]);

*/
