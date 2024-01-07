import React from "react";
import { useState } from "react";

import Hero from "./Hero/Hero";
import EximburgLinks from "./EximburgLinks/EximburgLinks";
import Content from "./Content/Content";
import Youtube from "./Youtube/Youtube";
import YoutubePopup from "./Youtube/YoutubePopup";
import Partners from "./Partners/Partners";
import HerbalProdMfg from "./HerbalProdMfg/HerbalProdMfg";
import AyurProdMfg from "./AyurProdMfg/AyurProdMfg";
import AyurThirdMfg from "./AyurThirdMfg/AyurThirdMfg";
import Testimonial from "./Testimonials/Testimonial";
import Blogs from "./Blogs/Blogs";
import Connect from "./Connect/Connect";

import AyurThirdPopup from "./AyurThirdMfg/AyurThirdPopup";
import AyurProdPopup from "./AyurProdMfg/AyurProdPopup";

const Home = () => {
  const [thirdPartyPopupId, setThirdPartyPopupId] = useState("");
  const [ayurvedicProdPopupId, setAyurvedicProdPopupId] = useState("");
  const [youtubeURL, setYoutubeURL] = useState("");

  const [thirdPartyPopup, setThirdPartyPopup] = useState(false);
  const [ayurvedicProdPopup, setAyurvedicProdPopup] = useState(false);
  const [youtubePopup, setYoutubePopup] = useState(false);

  const openThirdPopup = () => setThirdPartyPopup(true);
  const closeThirdPopup = () => setThirdPartyPopup(false);
  const openAyurvedicPopup = () => setAyurvedicProdPopup(true);
  const closeAyurvedicPopup = () => setAyurvedicProdPopup(false);
  const openYoutubePopup = () => setYoutubePopup(true);
  const closeYoutubePopup = () => setYoutubePopup(false);

  return (
    <>
      {thirdPartyPopup && (
        <AyurThirdPopup
          closeThirdPopup={closeThirdPopup}
          openThirdPopup={openThirdPopup}
          thirdPartyPopupId={thirdPartyPopupId}
        />
      )}
      {ayurvedicProdPopup && (
        <AyurProdPopup
          openAyurvedicPopup={openAyurvedicPopup}
          closeAyurvedicPopup={closeAyurvedicPopup}
          ayurvedicProdPopupId={ayurvedicProdPopupId}
        />
      )}
      {youtubePopup && (
        <YoutubePopup
          openYoutubePopup={openYoutubePopup}
          closeYoutubePopup={closeYoutubePopup}
          youtubeURL={youtubeURL}
        />
      )}
      <Hero />
      {/* <EximburgLinks /> */}
      <Content />
      <Youtube
        openYoutubePopup={openYoutubePopup}
        youtubeURL={youtubeURL}
        setYoutubeURL={setYoutubeURL}
      />
      {/* <Partners /> */}
      <HerbalProdMfg />
      <AyurProdMfg
        openAyurvedicPopup={openAyurvedicPopup}
        ayurvedicProdPopupId={ayurvedicProdPopupId}
        setAyurvedicProdPopupId={setAyurvedicProdPopupId}
      />
      <AyurThirdMfg
        openThirdPopup={openThirdPopup}
        setThirdPartyPopupId={setThirdPartyPopupId}
      />
      <Testimonial />
      <Blogs />
      {/* <Connect /> */}
    </>
  );
};

export default Home;
