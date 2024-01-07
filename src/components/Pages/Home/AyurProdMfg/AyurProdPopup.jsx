import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
// import classes from "./AyurThirdPopup.module.css";
import classes from "./AyurProdPopup.module.css";

import { AYURVEDIC_PROD_MFG as ayurvedicProdmfg } from "../../../../store/constants";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  const [curIndex, setCurIndex] = useState(
    ayurvedicProdmfg.findIndex((el, i) => el.id === props.ayurvedicProdPopupId)
  );

  const prevSlideHandler = () => {
    if (curIndex === 0) {
      setCurIndex(ayurvedicProdmfg.length - 1);
      return;
    }
    setCurIndex((prev) => prev - 1);
  };
  const nextSlideHandler = () => {
    if (curIndex === ayurvedicProdmfg.length - 1) {
      setCurIndex(0);
      return;
    }
    setCurIndex((prev) => prev + 1);
  };

  return (
    <>
      <div className={classes.productsContainer}>
        <button className={classes.closeBtn} onClick={props.onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <ul className={classes.products}>
          {/* {ayurvedicProdmfg
            .filter((el) => el.id === props.ayurvedicProdPopupId) */}
          {[ayurvedicProdmfg[curIndex]].map((test, i) => {
            const { id, name, img, desc, category } = test;
            return (
              <li className={classes.product} key={id}>
                {/* <Link to={""}> */}
                <div className={classes.imgBox}>
                  <img
                    src={require(`../../../../resources/images/${img}`)}
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
                {/* </Link> */}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        style={{
          position: "fixed",
          zIndex: 40,
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          backgroundColor: "var(--color27)",
          height: "40px",
          width: "40px"
        }}
        onClick={prevSlideHandler}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div
        style={{
          position: "fixed",
          zIndex: 40,
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          backgroundColor: "var(--color27)",
          height: "40px",
          width: "40px"
        }}
        onClick={nextSlideHandler}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </>
  );
};

const portalElement = document.getElementById("overlay");

const AyurProdPopup = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.closeAyurvedicPopup} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onClose={props.closeAyurvedicPopup}
          ayurvedicProdPopupId={props.ayurvedicProdPopupId}
        >
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default AyurProdPopup;
