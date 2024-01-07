import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { ALL_PRODUCTS_2 as allProducts } from "../../../store/constants";

import classes from "./ProductsCategoriesPopup.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  // const [curId, setCurId] = useState(props.prodPopupId);

  const [curIndex, setCurIndex] = useState(
    allProducts
      .filter((el, i) => el.category === props.prodCurCategory)
      .findIndex((el, i) => el.id === props.prodPopupId)
  );

  const prevSlideHandler = () => {
    if (curIndex === 0) {
      setCurIndex(
        allProducts.filter((el, i) => el.category === props.prodCurCategory)
          .length - 1
      );
      return;
    }
    setCurIndex((prev) => prev - 1);
  };
  const nextSlideHandler = () => {
    if (
      curIndex ===
      allProducts.filter((el, i) => el.category === props.prodCurCategory)
        .length -
        1
    ) {
      setCurIndex(0);
      return;
    }
    setCurIndex((prev) => prev + 1);
  };

  // prettier-ignore
  return (
      <>
        <div className={classes.productsContainer}>
          <button className={classes.closeBtn} onClick={props.onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <ul className={classes.products}>
            {[allProducts.filter((el, i) => el.category === props.prodCurCategory)[
                curIndex
              ]].map((test, i) => {
              const { id, name, img, page, desc, } = test;
              return (
                <li className={classes.product} key={id}>
                  <div className={classes.imgBox}>
                    <img
                      src={require(`../../../resources/images/${img}`)}
                      alt="img"
                      className={classes.img}
                    />
                  </div>
                  <div className={classes.descBox}>
                    {/* <button className={classes.closeBtn} onClick={props.onClose}>
                      <i className="fa-solid fa-xmark"></i>
                    </button> */}
                    <h3 className={classes.descTitle}>{name}</h3>
                    <p className={classes.descText}>{desc}</p>
                    <Link
                    to={`/product/${name.toLowerCase().split(" ").join("-")}`}
                    style={{ textDecoration: "none" }}
                  >
                    <p
                      className={classes.descText}
                      style={{
                        borderBottom: "none",
                        color: "var(--color27)",
                        marginTop: "10px",
                        textAlign: "center"
                      }}
                    >
                      See Product Details
                    </p>
                  </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div onClick={prevSlideHandler} style={{ position: "fixed", zIndex: 40, top: "50%", left: 0, transform: "translateY(-50%)", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "var(--color27)", height: "40px", width: "40px"}} >
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div onClick={nextSlideHandler} style={{ position: "fixed", zIndex: 40, top: "50%", right: 0, transform: "translateY(-50%)", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "var(--color27)", height: "40px", width: "40px" }}>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </>
    );
};

const portalElement = document.getElementById("overlay");

const ProductsCategoriesPopup = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.closeProdPopup} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onClose={props.closeProdPopup}
          prodPopupId={props.prodPopupId}
          prodCurCategory={props.curCategory}
        >
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default ProductsCategoriesPopup;
