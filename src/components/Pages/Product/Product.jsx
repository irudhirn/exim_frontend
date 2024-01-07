import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";

import { ALL_PRODUCTS_2 as products } from "../../../store/constants";

import classes from "./Product.module.css";

const Product = () => {
  const params = useParams();

  const [curProduct, setCurProduct] = useState(
    products.filter(
      (product, i) =>
        product.name.toLowerCase().split(" ").join("-") === params.someProduct
    )[0]
  );

  const gotToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    gotToTop();
  });

  const {
    name,
    desc,
    img,
    price,
    moq,
    brand,
    packagingSize,
    weight,
    typeOfPackaging,
    packagingType,
    facewashType,
    fragrance,
    color,
    flavourBase,
    ingredient,
    isItAyurvedic,
    sulphateFree,
    sunProtection,
    oilFree,
    features,
    gender,
    ageGroup,
    skinType,
    form,
    usageApplication,
    shelfLife,
    countryOfOrigin,
    manufacturedBy,
    certificate
  } = curProduct;

  // prettier-ignore
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.imgText}>
          <div className={classes.imgBox}>
            <img src={require(`../../../resources/images/${img}`)} alt={curProduct.name} className={classes.img} />
          </div>
          <div className={classes.textBox}>
            <h4 className={classes.productTitle}>{name}</h4>
            <p className={classes.text}><span className={classes.priceText}>Rs.{price}/</span><span className={classes.keyText}>piece</span></p>
            {moq && (<p className={classes.text}><span className={classes.keyText}>Minimum Order Quantity:</span> <span className={classes.valText}>{moq} Pieces</span></p>)}
            {brand && (<p className={classes.text}><span className={classes.keyText}>Brand:</span> <span className={classes.valText}>{brand}</span></p>)}
            {packagingSize && (<p className={classes.text}><span className={classes.keyText}>Packaging Size:</span> <span className={classes.valText}>{packagingSize}</span></p>)}
            {weight && (<p className={classes.text}><span className={classes.keyText}>Weight:</span> <span className={classes.valText}>{weight}</span></p>)}
            {typeOfPackaging && (<p className={classes.text}><span className={classes.keyText}>Type of Packaging:</span> <span className={classes.valText}>{typeOfPackaging}</span></p>)}
            {packagingType && (<p className={classes.text}><span className={classes.keyText}>Packaging Type:</span> <span className={classes.valText}>{packagingType}</span></p>)}
            {facewashType && (<p className={classes.text}><span className={classes.keyText}>Facewash Type:</span> <span className={classes.valText}>{facewashType}</span></p>)}
            {fragrance && (<p className={classes.text}><span className={classes.keyText}>Fragrance:</span> <span className={classes.valText}>{fragrance}</span></p>)}
            {color && (<p className={classes.text}><span className={classes.keyText}>Color:</span> <span className={classes.valText}>{color}</span></p>)}
            {flavourBase && (<p className={classes.text}><span className={classes.keyText}>Flavour Base:</span> <span className={classes.valText}>{flavourBase}</span></p>)}
            {ingredient && (<p className={classes.text}><span className={classes.keyText}>Ingredient:</span> <span className={classes.valText}>{ingredient}</span></p>)}
            {isItAyurvedic && (<p className={classes.text}><span className={classes.keyText}>Is It Ayurvedic:</span> <span className={classes.valText}>{isItAyurvedic}</span></p>)}
            {sulphateFree && (<p className={classes.text}><span className={classes.keyText}>Sulphate Free:</span> <span className={classes.valText}>{sulphateFree}</span></p>)}
            {sunProtection && (<p className={classes.text}><span className={classes.keyText}>Sun Protection:</span> <span className={classes.valText}>{sunProtection}</span></p>)}
            {oilFree && (<p className={classes.text}><span className={classes.keyText}>Oil Free:</span> <span className={classes.valText}>{oilFree}</span></p>)}
            {features && (<p className={classes.text}><span className={classes.keyText}>Features:</span> <span className={classes.valText}>{features}</span></p>)}
            {gender && (<p className={classes.text}><span className={classes.keyText}>Gender:</span> <span className={classes.valText}>{gender}</span></p>)}
            {ageGroup && (<p className={classes.text}><span className={classes.keyText}>Age Group:</span> <span className={classes.valText}>{ageGroup}</span></p>)}
            {skinType && (<p className={classes.text}><span className={classes.keyText}>Skin Type:</span> <span className={classes.valText}>{skinType}</span></p>)}
            {form && (<p className={classes.text}><span className={classes.keyText}>Form:</span> <span className={classes.valText}>{form}</span></p>)}
            {usageApplication && (<p className={classes.text}><span className={classes.keyText}>Usage/Application:</span> <span className={classes.valText}>{usageApplication}</span></p>)}
            {shelfLife && (<p className={classes.text}><span className={classes.keyText}>Shelf Life:</span> <span className={classes.valText}>{shelfLife}</span></p>)}
            {countryOfOrigin && (<p className={classes.text}><span className={classes.keyText}>Country of Origin:</span> <span className={classes.valText}>{countryOfOrigin}</span></p>)}
            {manufacturedBy && (<p className={classes.text}><span className={classes.keyText}>Manufactured By:</span> <span className={classes.valText}>{manufacturedBy}</span></p>)}
            {certificate && (<p className={classes.text}><span className={classes.keyText}>Certificate:</span> <span className={classes.valText}>{certificate}</span></p>)}
          </div>
        </div>
        <div className={classes.productDetails}>
          <p className={classes.productDetailsTitle}>
            Description
          </p>
          <div className={classes.horizontalRule} />
          <p className={classes.productDesc}>{desc}</p>
        </div>
      </div>
    </section>
  );
};

export default Product;
