import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import classes from "./Youtube.module.css";

// prettier-ignore
const DUMMY_YOUTUBE_DATA = [
  {id: 'v1', name: 'Royal Swag Ayurvedic Cigarette', url: 'https://www.youtube.com/embed/qwlEsDg6ro8', img: 'royal-swag-ayur-cig.png'},
  {id: 'v2', name: 'SWOSH VITAMIN C SERUM', url: 'https://www.youtube.com/embed/77IwqPVW66I', img: 'swosh-vitamin-c-serum.png'},
  {id: 'v3', name: 'Swosh Lip Cream', url: 'https://www.youtube.com/embed/vRzFN4gSJqE', img: 'swosh-lip-cream.png'},
  {id: 'v4', name: 'Dark Kesha Ayurvedic oil', url: 'https://www.youtube.com/embed/t_-rtyLR3dk', img: 'dark-kesha-ayur-oil.png'},
  {id: 'v5', name: 'SWOSH FOAMING FACE WASH', url: 'https://www.youtube.com/embed/o-O4_osJ_Mc', img: 'swosh-foaming-facewash.png'},
  {id: 'v6', name: 'SWOSH Vitamin C Serum', url: 'https://www.youtube.com/embed/CzJT0uxoVaA', img: 'swosh-vitamin-c-serum-2.png'},
];
const Youtube = ({ openYoutubePopup, youtubeURL, setYoutubeURL }) => {
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
  const slides = DUMMY_YOUTUBE_DATA.map((test, i) => {
    const { id, name, url, img } = test;
    
    return (
        <li className={`${classes.product} ${isContentLoading ? classes.inActive : ''}`} key={id} onClick={() => {openYoutubePopup(); setYoutubeURL(url);}}>
          <div className={classes.imgBox}>
            <img src={require(`../../../../resources/images/${img}`)} alt={name} className={classes.img}/>
            {/* <iframe
              className={classes.img}
              src={`${url}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              ></iframe> */}
          </div>
          <p className={classes.name}>{name}</p>
          <img src={require('../../../../resources/pictures/youtube_red_play_button.png')} alt="youtube-btn" className={classes.youtubePlayBtn}/>
        </li>
    );
  });

  // prettier-ignore
  return (
    <section className={classes.section} ref={sectionRef}>
      <h3 className={`${classes.sectionHeading} ${isTitleLoading ? classes.hidden : ''}`}>Video Gallery</h3>
      <div className={classes.sectionHeadingBorder} />
      <div className={classes.container}>
        <div className={classes.testimonialContainer} ref={contentRef}>
          <ul className={classes.products}>
            {slides[DUMMY_YOUTUBE_DATA.length - 3]}
            {slides[DUMMY_YOUTUBE_DATA.length - 2]}
            {slides[DUMMY_YOUTUBE_DATA.length - 1]}
            {DUMMY_YOUTUBE_DATA.map((test, i) => {
              const { id, name, url, img } = test;
              return (
                  <li className={`${classes.product} ${isContentLoading ? classes.inActive : ''}`} key={id} onClick={() => {openYoutubePopup(); setYoutubeURL(url);}}>
                    <div className={classes.imgBox}>
                      <img src={require(`../../../../resources/images/${img}`)} alt={name} className={classes.img}/>
                      {/* <iframe
                        className={classes.img}
                        src={`${url}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe> */}
                    </div>
                    <p className={classes.name}>{name}</p>
                    <img src={require('../../../../resources/pictures/youtube_red_play_button.png')} alt="youtube-btn" className={classes.youtubePlayBtn}/>
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

export default Youtube;

/*
https://youtu.be/qwlEsDg6ro8

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import classes from "./Youtube.module.css";

const Youtube = () => {
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const youtubeRef = useRef();
  useEffect(() => {
    const section = youtubeRef.current;

    const revealSection = (entries, observer) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

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
    <section
      ref={youtubeRef}
      className={`${classes.section} ${isFirstLoading ? classes.hidden : ""}`}
    >
      <div className={classes.container}>
        <div className={classes.videoContainer}>
          <iframe
            //   width="560"
            className={classes.video}
            // width="100%"
            // height="315"
            src="https://www.youtube.com/embed/qwlEsDg6ro8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Youtube;

*/
