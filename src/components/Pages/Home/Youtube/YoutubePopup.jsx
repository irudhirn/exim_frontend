import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./YoutubePopup.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  const [curUrl, setCurUrl] = useState(props.youtubeURL);

  // const [curIndex, setCurIndex] = useState(
  //   ayurthirdpartymfg.findIndex((el, i) => el.id === props.youtubeURL)
  // );

  // const prevSlideHandler = () => {
  //   if (curIndex === 0) {
  //     setCurIndex(ayurthirdpartymfg.length - 1);
  //     return;
  //   }
  //   setCurIndex((prev) => prev - 1);
  // };
  // const nextSlideHandler = () => {
  //   if (curIndex === ayurthirdpartymfg.length - 1) {
  //     setCurIndex(0);
  //     return;
  //   }
  //   setCurIndex((prev) => prev + 1);
  // };
  return (
    <>
      <div className={classes.productsContainer}>
        <div className={classes.products}>
          <div className={classes.product}>
            <iframe
              className={classes.video}
              src={`${curUrl}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

const portalElement = document.getElementById("overlay");

const YoutubePopup = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.closeYoutubePopup} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onClose={props.closeYoutubePopup}
          youtubeURL={props.youtubeURL}
        >
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default YoutubePopup;
