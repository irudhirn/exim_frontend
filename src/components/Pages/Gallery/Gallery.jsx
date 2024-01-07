import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Hero from "./Hero/Hero";
import Images from "./Images/Images";
import ImagesPopup from "./Images/ImagesPopup";
import EventPopup from "./Event/EventPopup";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryPopup, setGaleryPopup] = useState(false);

  const [eventImages, setEventImages] = useState([]);
  const [eventPopup, setEventPopup] = useState(false);
  const [eventPopupId, setEventPopupId] = useState("");

  const openGalleryPopup = () => setGaleryPopup(true);
  const closeGalleryPopup = () => setGaleryPopup(false);

  const openEventPopup = () => setEventPopup(true);
  const closeEventPopup = () => setEventImages(false);

  const gotToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    gotToTop();
  });

  return (
    <>
      {galleryPopup && (
        <ImagesPopup
          closeGalleryPopup={closeGalleryPopup}
          openGalleryPopup={openGalleryPopup}
          galleryImages={galleryImages}
        />
      )}
      {eventPopup && (
        <EventPopup
          closeEventPopup={closeEventPopup}
          openEventPopup={openEventPopup}
          eventImages={eventImages}
          eventPopupId={eventPopupId}
        />
      )}
      <Hero />
      <Images
        openGalleryPopup={openGalleryPopup}
        galleryImages={galleryImages}
        setGalleryImages={setGalleryImages}
        setEventPopupId={setEventPopupId}
      />
    </>
  );
};

export default Gallery;
