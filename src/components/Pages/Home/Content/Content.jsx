import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { THIRD_PARTY_MFG as mfg } from "../../../../store/constants";

import classes from "./Content.module.css";

// prettier-ignore
const Content = () => {
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

  return (
    <section className={classes.section}>
        <div className={`${classes.container} ${isTitleLoading ? classes.hidden : ""}`} ref={containerRef}>
            <h3 className={`${classes.title}`}>Services provided by Eximburg</h3>
            <div className={classes.titleBorder}/>
            <div className={`${classes.content} ${isContentLoading ? classes.inActive : ""}`} ref={contentRef}>
                <div className={`${classes.textContent}`}>
                    <p className={classes.textHead}>THIRD PARTY MANUFACTURING</p>
                    <p className={classes.textEquation}>Our value products are the result of the combination of your requirements with our dedication to quality production.</p>
                    <p className={classes.textDesc}>Our valuable products are the result of combining your requirements with our committment to quality production. We manufacture a wide product range in different formats. Eximburg delivers well developed products according to our customer requirements.</p>
                    <ul className={classes.points}>
                        {mfg.map((el, i) => {
                            const {id, text} = el;
                            return(
                                <li key={id} className={classes.point}><span className={classes.pointArrow}><i className="fa-solid fa-caret-right"></i></span><span className={classes.pointText}>{text}</span></li>
                            )
                        })}
                    </ul>
                </div>
                <div className={`${classes.imgContent}`}>
                    <img src={require("../../../../resources/images/third-party-mfg-image.jpg")} alt="mfg" className={classes.img}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Content;

/*

  // const IMG_URL = "http://localhost:3000/file_png.png"; // this file is located in public folder
  // const IMG_URL = "https://images.unsplash.com/photo-1611255942860-3cb71f28e61d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80"; // this file is located in public folder
  // const IMG_URL = "https://online.stanford.edu/sites/default/files/inline-images/1600X900-How-does-blockchain-work.jpg"; // this file is located in public folder
  const IMG_URL = "https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fonline.stanford.edu%2Fhow-does-blockchain-work&psig=AOvVaw1PbMwDkFAr1wHvrqJS_H7F&ust=1679398197355000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIiM1vqz6v0CFQAAAAAdAAAAABAD"; // this file is located in public folder

  <span onClick={() => downloadFile("https://online.stanford.edu/sites/default/files/inline-images/1600X900-How-does-blockchain-work.jpg")}></span>

  
const downloadFile = (url) => {
  fetch(url).then((res) => res.blob()).then((blob) => {
    const blobUrl = window.URL.createObjectURL(new Blob([blob]));
    const fileName = url.split('/').pop();
    const aTag = document.createElement("a");
    aTag.href = blobUrl;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  })
}

*/
