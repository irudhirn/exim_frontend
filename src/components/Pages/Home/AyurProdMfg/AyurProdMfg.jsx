import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { productActions } from "../../../../store/product-slice";
import { Link } from "react-router-dom";
import { AYURVEDIC_PROD_MFG as products } from "../../../../store/constants";
// import { AYURVEDIC_PROD_MFG_2 as products } from "../../../../store/constants";

import classes from "./AyurProdMfg.module.css";

const DUMMY_CATEGORIES = [
  { id: "c1", name: "top", text: "Top Manufactured", isActive: true },
  // { id: "c2", name: "herbal", text: "Herbal Medicines", isActive: false },
  { id: "c3", name: "best", text: "Best Manufacturer", isActive: false }
];

// prettier-ignore
const AyurProdMfg = ({openAyurvedicPopup, ayurvedicProdPopupId, setAyurvedicProdPopupId}) => {
    const [categories, setCategories] = useState(DUMMY_CATEGORIES);
    const [curCategory, setCurCategory] = useState("top");

    const dispatch = useDispatch();

    // dispatch(productActions.changeProduct({ id: 1, name: "Cream", img: "image", page: "", desc: "Description", }));

    const categoryHandler = (category) => {
        setCurCategory(category);
        // console.log(category);        
        const tempArr = categories.map((el, i) => {return {...el, isActive: el.name === category ? true : false}})
        // console.log(tempArr);
        setCategories(tempArr);
    }

    const [isTitleLoading, setIsTitleLoading] = useState(true);
    const [isContentLoading, setIsContentLoading] = useState(true);
    const containerRef = useRef();
    const contentRef = useRef();
    useEffect(() => {
      const section = containerRef.current;
  
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

// prettier-ignore
  return (
    <section className={classes.section}>
      <div className={`${classes.container}`} ref={containerRef}>
      <h3 className={`${classes.sectionHeading} ${isTitleLoading ? classes.hidden : ''}`}>Ayurvedic Products manufacturing company in india</h3>
      <div className={classes.sectionHeadingBorder} />
        <div className={classes.categoryButtonsContainer}>
            <ul className={classes.categoryBtns}>
                {categories.map((category, i) => {
                    const {id, name, text, isActive} = category;

                    return(
                        <li key={id} className={`${classes.categoryBtn} ${isActive ? classes.active : ''}`} onClick={() => categoryHandler(name)}>
                            {text}
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className={classes.contentContainer}>
            <ul className={classes.products} ref={contentRef}>
                {products.filter((el) => el.category === curCategory).map((prod, i) => {
                    const {id, name, img, desc, category, details} = prod;
                    
                    return(
                        <li key={id}  className={`${classes.product} ${isContentLoading ? classes.inActive : ''}`}>
                            <Link to={`/product/${name.toLowerCase().split(" ").join("-")}`} onClick={() => dispatch(productActions.changeProduct({ id: 1, name: name, img: img, desc: desc, details: details }))}>
                                <div className={classes.productEl}>
                                    <div className={classes.productElImg}>
                                        <img src={require(`../../../../resources/images/${img}`)} alt={name} className={classes.prodImg}/>
                                    </div>
                                      <p className={classes.productElName}>{name}</p>
                                </div>
                            </Link>
                            <button className={classes.readBtn} onClick={() => {openAyurvedicPopup(); setAyurvedicProdPopupId(id);}}><span className={classes.readText}>Read More</span><span className={classes.arrow}><i className="fa-solid fa-angles-right"></i></span></button>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className={classes.allProducts}>
            <p className={classes.allProductsText}>Get hands on with our receipe ideas.&nbsp;&nbsp;&nbsp;<Link to="/all-products">See all products</Link></p>
            {/* <p className={classes.allProductsText}>Get hands on with our receipe ideas.&nbsp;&nbsp;&nbsp;<Link to="/products-category/skin-care-products">See all products</Link></p> */}
        </div>
      </div>
    </section>
  );
};

export default AyurProdMfg;
