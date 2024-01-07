import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./Blog3.module.css";

const Blog3 = () => {
  const params = useParams();

  // prettier-ignore
  return (
      <section className={classes.section}>
        <div className={classes.container}>
          <div className={classes.blogContainer}> 
            {params.someblog !== "vitamin-c-face-serum" && <Link to="/blog/vitamin-c-face-serum" style={{textDecoration: 'none'}}><h3 className={classes.blogHeading}>Vitamin C Face Serum: The Radiance Booster Your Skin Needs</h3></Link>}
            {params.someblog === "vitamin-c-face-serum" && <h3 className={classes.blogHeading}>Vitamin C Face Serum: The Radiance Booster Your Skin Needs</h3>}
            <div className={classes.bigImg}>
              <img
                src={require("../../../../resources/images/blog-3-img-compressed.jpg")}
                alt="vitamin-c-face-serum"
              />
            </div>
            <p className={classes.text}>Welcome to our cosmetic company's blog, where we explore the wonders of skincare ingredients. In this post, we will focus on the incredible benefits of vitamin C face serum, a powerful formulation designed to brighten and rejuvenate your skin. Discover how this skincare superhero can enhance your complexion and leave you with a radiant, youthful glow.</p>
            <h4 className={classes.paraTitle}>The Power of Vitamin C</h4>
            <p className={classes.text}>Introduce the importance of vitamin C in skincare and its role as a potent antioxidant.<br/><br/>Explain how vitamin C helps protect the skin from free radicals, environmental damage, and UV-induced oxidative stress.<br/><br/>Highlight its ability to promote collagen synthesis, leading to improved skin elasticity and a more youthful appearance.</p>
            <h4 className={classes.paraTitle}>Brightening and Even Skin Tone</h4>
            <p className={classes.text}>Discuss the ability of vitamin C to inhibit melanin production, reducing the appearance of dark spots, hyperpigmentation, and uneven skin tone.<br/><br/>Highlight its brightening effects, revealing a more radiant and luminous complexion.<br/><br/>Explain how vitamin C can help fade acne scars and sun damage, leading to a more even and uniform skin texture.</p>
            <h4 className={classes.paraTitle}>Antioxidant Protection</h4>
            <p className={classes.text}>Detail how vitamin C acts as a powerful antioxidant, neutralizing free radicals that can damage the skin.<br/><br/>Discuss its role in preventing premature aging, such as fine lines, wrinkles, and sagging skin.<br/><br/>Emphasize the importance of incorporating vitamin C into your skincare routine to maintain a youthful and healthy complexion.</p>
            <h4 className={classes.paraTitle}>Boosting Collagen Production</h4>
            <p className={classes.text}>Explain how vitamin C stimulates collagen synthesis, a vital protein responsible for skin firmness and elasticity.<br/><br/>Discuss the role of collagen in maintaining a plump, youthful appearance and how vitamin C helps support its production.<br/><br/>Highlight the long-term benefits of using vitamin C face serum for promoting a more youthful and resilient complexion.</p>
            <h4 className={classes.paraTitle}>Hydration and Skin Nourishment</h4>
            <p className={classes.text}>Discuss the hydrating properties of vitamin C, which helps to retain moisture and improve skin texture.<br/><br/>Explain how vitamin C face serum can provide a burst of hydration, leaving the skin supple, smooth, and glowing.<br/><br/>Highlight its ability to enhance the efficacy of other skincare products by improving their absorption into the skin.</p>
            <h4 className={classes.paraTitle}>Incorporating Vitamin C Face Serum into Your Routine</h4>
            <p className={classes.text}>Provide guidance on how to incorporate vitamin C face serum into your daily skincare regimen.<br/><br/>Discuss the ideal application methods, such as gentle massage or patting onto clean, dry skin.<br/><br/>Offer tips on layering vitamin C serum with other skincare products for maximum effectiveness.</p>
            <h4 className={classes.paraTitle}>Conclusion:</h4>
            <p className={classes.text}>Vitamin C face serum is a game-changer in skincare, delivering a multitude of benefits to your complexion. From brightening and evening out skin tone to protecting against free radicals and boosting collagen production, this potent antioxidant is a must-have in your skincare routine. Embrace the radiance-boosting power of vitamin C and unlock a more youthful, vibrant, and glowing complexion.</p>
            {/* <h4 className={classes.paraTitle}></h4> */}
            {/* <p className={classes.text}><br/><br/><br/><br/></p> */}
          </div>
        </div>
      </section>
    )
};

export default Blog3;
