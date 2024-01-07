import React from "react";

import classes from "./Brands.module.css";

const Brands = () => {
  return (
    <section>
      <div className={classes.container}>
        <h3 className={classes.title}>Our Brands</h3>
        <div className={classes.brands}>
          <div className={classes.brand}>
            <div className={classes.brandDesc}>
              <h2>Royal Swag</h2>
              <span>
                <h5>What is Royal Swag?</h5>
                <p>
                  Royal Swag is 100 % Tobacco & Nicotine Free Herbal cigarette,
                  with the composition from tulsi, green tea, cloves, etc.
                </p>
              </span>
              <span>
                <h5>Why Royal Swag?</h5>
                <p>
                  Use as best alternative of tobacco based cigarette. Those,
                  would like to quit tobacco smoking also use as health remedies
                  for cold and cough.
                </p>
              </span>
              <span>
                <h5>Royal Swag for whom?</h5>
                <p>
                  Beginner smokers, health conscious peoples, those who would
                  like to quit the tobacco and smoking, women who are health
                  conscious.
                </p>
              </span>
              <span>
                <h5>Available flovors?</h5>
                <p>Frutta, Clove, Mint.</p>
              </span>
            </div>
            <div className={classes.brandImg}>
              <img
                src={require("../../../../resources/images/royal-swag.webp")}
                alt="img"
              />
            </div>
          </div>
          <div className={classes.brand}>
            <div className={classes.brandDesc}>
              <h2>SWOSH</h2>
              <span>
                <p>
                  SWOSH is our Beauty Cosmetic Brand which is made of from
                  various essential oil & natural ingredient.
                </p>
              </span>
              <span>
                <h5>SWOSH LOTION</h5>
                <p>
                  {" "}
                  SWOSH LOTION is made from 100% natural essential oil & extract
                  such as Aelovera, Amla, Avocado, Betel leaf, Coconut, Green
                  Tea, Jojoba, Lavang, Lemon Peel oil, Tulsi. It keeps hair
                  healthy, dandruff free, smooth and strong. It’s natural oil
                  quality provide nourishment of hair and skin
                </p>
              </span>
              <span>
                <h5>SWOSH LIP CREAM</h5>
                <p>
                  SWOSH LIP CREAM is made from natural ingredient extract such
                  as clove oil, Lavender oil, Lemon oil, Geranium oil, etc. It
                  is useful for healthy lips. It is useful to protect lip from
                  toxic and hot smoke of cigarette and rejuvenate smoker’s dark
                  lips.
                </p>
              </span>
            </div>
            <div className={classes.brandImg}>
              <img
                src={require("../../../../resources/images/swosh.webp")}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
