import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

import classes from "./ImagesPopup.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  const [curImg, setCurImg] = useState(props.galleryImages[0]);
  console.log(props.galleryImages);

  return (
    <>
      <div className={classes.productsContainer}>
        <div className={classes.imgBox}>
          <img
            src={require(`../../../../resources/pictures/${curImg}`)}
            alt={"img"}
            className={classes.mainImg}
          />
        </div>
        <ul className={classes.products}>
          {props.galleryImages.map((image, i) => {
            return (
              <li
                className={classes.product}
                key={i}
                onClick={() => setCurImg(image)}
              >
                <div className={classes.relatedImgBox}>
                  <img
                    src={require(`../../../../resources/pictures/${image}`)}
                    alt="img"
                    className={classes.relatedImg}
                    style={{
                      outline: `${
                        image === curImg ? "5px solid var(--color35)" : "none"
                      }`,
                      outlineOffset: "5px"
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
        <button className={classes.closeBtn} onClick={props.onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </>
  );
};

const portalElement = document.getElementById("overlay");

const ImagesPopup = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.closeGalleryPopup} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onClose={props.closeGalleryPopup}
          galleryImages={props.galleryImages}
        >
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default ImagesPopup;
