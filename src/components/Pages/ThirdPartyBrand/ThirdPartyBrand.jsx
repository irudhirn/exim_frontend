import React from "react";
import { useState } from "react";

import { useParams } from "react-router-dom";

import classes from "./ThirdPartyBrand.module.css";
import Wrapper from "../../UI/Wrapper";

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

const ThirdPartyBrand = () => {
  const params = useParams();

  // prettier-ignore
  const [curBrand, setCurBrand] = useState(DUMMY_THIRD_PARTY_BRANDS.filter((el, i) => el.name.split(" ").join("-").toLowerCase() === params.someBrand)[0]);
  const [curImg, setCurImg] = useState(
    DUMMY_THIRD_PARTY_BRANDS.filter(
      (el, i) => el.name.split(" ").join("-").toLowerCase() === params.someBrand
    )[0].img
  );
  const [relatedImages, setRelatedImages] = useState(
    DUMMY_THIRD_PARTY_BRANDS.filter(
      (el, i) => el.name.split(" ").join("-").toLowerCase() === params.someBrand
    )[0].relatedImgs
  );

  return (
    <Wrapper>
      {relatedImages.length > 0 && (
        <section className={classes.section}>
          <div className={classes.container}>
            <div className={classes.imgContent}>
              <div className={classes.imgBox}>
                <img
                  src={require(`../../../resources/pictures/${curImg}`)}
                  alt={"img"}
                  className={classes.mainImg}
                />
              </div>
              <ul className={classes.products}>
                {relatedImages.map((image, i) => {
                  return (
                    <li
                      className={classes.product}
                      key={i}
                      onClick={() => setCurImg(image)}
                    >
                      <div className={classes.relatedImgBox}>
                        <img
                          src={require(`../../../resources/pictures/${image}`)}
                          alt="img"
                          className={classes.relatedImg}
                          style={{
                            outline: `${
                              image === curImg
                                ? "5px solid var(--color35)"
                                : "none"
                            }`,
                            outlineOffset: "5px"
                          }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={classes.textContent}>
              <div className={classes.textBox}>
                <h4 className={classes.brandName}>{curBrand.name}</h4>
                <p className={classes.brandDesc}>{curBrand.desc}</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </Wrapper>
  );
};

export default ThirdPartyBrand;
