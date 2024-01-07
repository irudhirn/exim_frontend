import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HERBAL_PRODUCTS_MFG as products } from "../../../../store/constants";
import classes from "./HerbalProdMfg.module.css";

// prettier-ignore
const HerbalProdMfg = () => {
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
        rootMargin: "-180px"
      });
  
      sectionObserver.observe(section);
    }, []);
  return (
  <section className={classes.section} ref={sectionRef}>
        {/* <h3 className={`${classes.sectionHeading} ${isTitleLoading ? classes.hidden : ''}`}>Herbal products manufaturers in india</h3> */}
        <h3 className={`${classes.sectionHeading} ${isTitleLoading ? classes.hidden : ''}`}>Ayurvedic & Cosmetic Products Manufaturers in India</h3>
        <div className={classes.sectionHeadingBorder} />
        <div className={classes.container}>
            <div className={classes.contentContainer}>
                <ul className={classes.products} ref={contentRef}>
                    {products.map((prod, i) => {
                        const {id, name, img, page} = prod;

                        return(
                            <li key={id} className={`${classes.product} ${isContentLoading ? classes.inActive : ''}`}>
                                <Link to={page}>
                                    <div className={classes.productEl}>
                                        <div className={classes.productElImg}>
                                            <img src={require(`../../../../resources/images/${img}`)} alt={name} className={classes.prodImg}/>
                                        </div>
                                        {/* <div className={classes.productElName}></div> */}
                                        <p className={classes.productElName}>{name}</p>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
    </div>
  </section>);
};

export default HerbalProdMfg;
