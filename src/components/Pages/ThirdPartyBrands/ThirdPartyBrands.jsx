import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { curThrdBrandActions } from "../../../store/curThirdBrand-slice";

import ThirdPartyBrandsPopup from "./ThirdPartyBrandsPopup";

import Wrapper from "../../UI/Wrapper";

import classes from "./ThirdPartyBrands.module.css";
import Hero from "./Hero/Hero";

// prettier-ignore
export const DUMMY_THIRD_PARTY_BRANDS = [
    {id: 'e1', name: 'Brand 1', img: 'event2.webp',  relatedImgs: ['event2.webp', 'event1.webp', 'event3.webp', 'event4.webp',], desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, facere quos saepe dolore odio tempora repellat iure.', url: ''},
    {id: 'e2', name: 'Brand 2', img: 'event5.webp',  relatedImgs: ['event5.webp', 'event6.webp', 'event7.webp', 'event8.webp',], desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem nobis quos harum nulla odit pariatur perferendis consequatur iusto.', url: ''},
    {id: 'e3', name: 'Brand 3', img: 'event9.webp',  relatedImgs: ['event9.webp', 'event10.webp', 'event11.webp', 'event12.webp',], desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum aliquid, voluptate libero a assumenda excepturi minus accusamus.', url: ''},
    {id: 'e4', name: 'Brand 4', img: 'event13.webp',  relatedImgs: ['event13.webp', 'event14.webp', 'event15.webp', 'event16.webp',], desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem nobis quos harum nulla odit pariatur perferendis consequatur iusto.', url: ''},
    {id: 'e5', name: 'Brand 5', img: 'event17.webp',  relatedImgs: ['event17.webp', 'event18.webp', 'event19.webp', 'event20.webp',], desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum aliquid, voluptate libero a assumenda excepturi.', url: ''},
    {id: 'e6', name: 'Brand 6', img: 'event21.webp',  relatedImgs: ['event21.webp', 'event22.webp', 'event23.webp', 'event24.webp',], desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem nobis quos harum nulla odit pariatur perferendis.', url: ''},
    {id: 'e7', name: 'Brand 7', img: 'event25.webp',  relatedImgs: ['event25.webp', 'event26.webp', 'event27.webp', 'event28.webp',], desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, facere quos saepe dolore odio tempora repellat iure.', url: ''},
    {id: 'e8', name: 'Brand 8', img: 'event29.webp',  relatedImgs: ['event29.webp', 'event30.webp', 'event31.webp', 'event32.webp',], desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum aliquid, voluptate libero a assumenda excepturi minus.', url: ''},
  ];

const ThirdPartyBrands = () => {
  const dispatch = useDispatch();

  // prettier-ignore
  // const [thirdPartyBrands, setThirdPartyBrands] = useState(DUMMY_THIRD_PARTY_BRANDS);

  const [galleryImages, setGalleryImages] = useState([]);

  const [galleryPopup, setGaleryPopup] = useState(false);

  const openGalleryPopup = () => setGaleryPopup(true);
  const closeGalleryPopup = () => setGaleryPopup(false);

  const setCurThirdBrandHandler = (id, name, img, relatedImgs, desc, url) => {
    dispatch(
      curThrdBrandActions.setThirdBrand({
        id: id,
        name: name,
        img: img,
        relatedImgs: relatedImgs,
        desc: desc,
        url: url
      })
    );
  };

  // prettier-ignore
  return (
    <Wrapper>
        {galleryPopup && (
            <ThirdPartyBrandsPopup
              closeGalleryPopup={closeGalleryPopup}
              openGalleryPopup={openGalleryPopup}
              galleryImages={galleryImages}
            />
        )}
        <section className={classes.section}>
            <Hero />
            <div className={classes.container}>
                <h3 className={classes.sectionTitle}>Third Party Brands</h3>
                <div className={classes.sectionTitleBorder} />
                <div className={classes.content}>

                    <ul className={classes.brands}>
                      {DUMMY_THIRD_PARTY_BRANDS.map((el, i) => {
                        const { id, name, desc, img, relatedImgs, url } = el;

                        return (
                            <li
                            key={id}
                            className={classes.brand}
                            // onClick={() => {
                            //   openGalleryPopup();
                            //   setGalleryImages(relatedImgs);
                            // }}
                            // onClick={() => navigate(`${name.split(" ").join("-").toLowerCase()}`)}
                          >
                            <Link to={`${name.split(" ").join("-").toLowerCase()}`} className={classes.imgBox}>
                              <img
                                src={require(`../../../resources/pictures/${img}`)}
                                alt={name}
                                className={classes.img}
                                onClick={() => setCurThirdBrandHandler(id, name, img, relatedImgs, desc, url)}
                              />
                            </Link>
                            <div className={classes.textBox}>
                              <h4 className={classes.brandName} onClick={() => setCurThirdBrandHandler(id, name, img, relatedImgs, desc, url)}>
                                <Link to={`${name.split(" ").join("-").toLowerCase()}`}>{name}</Link>
                              </h4>
                              <p className={classes.text}>{desc}</p>
                            </div>
                          </li>
                        );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    </Wrapper>
  );
};

export default ThirdPartyBrands;
