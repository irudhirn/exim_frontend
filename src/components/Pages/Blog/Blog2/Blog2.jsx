import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import classes from "./Blog2.module.css";

const Blog2 = () => {
  const params = useParams();

  // prettier-ignore
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.blogContainer}> 
          {params.someblog !== "beauty-apple-facewash" && <Link to="/blog/beauty-apple-facewash" style={{textDecoration: 'none'}}><h3 className={classes.blogHeading}>Beauty Apple Facewash: Unveiling the Freshness of Nature</h3></Link>}
          {params.someblog === "beauty-apple-facewash" && <h3 className={classes.blogHeading}>Beauty Apple Facewash: Unveiling the Freshness of Nature</h3>}
          <div className={classes.bigImg}>
            <img
              src={require("../../../../resources/images/blog-2-img-compressed.jpg")}
              alt="beauty-apple-facewash"
            />
          </div>
          <p className={classes.text}>Welcome to our cosmetic company's blog, where we celebrate the power of natural ingredients in skincare. In this post, we will explore the benefits of a beauty apple facewash, a refreshing and rejuvenating product that harnesses the goodness of apples for your skin. Discover how this unique formulation can enhance your skincare routine and leave your skin feeling revitalized.</p>
          <h4 className={classes.paraTitle}>The Beauty of Apples</h4>
          <p className={classes.text}>Highlight the rich nutritional profile of apples, including vitamins, minerals, and antioxidants.<br/><br/>Discuss the role of antioxidants in apples, such as vitamin C and polyphenols, in promoting skin health and protecting against environmental stressors.<br/><br/>Emphasize the hydrating and toning properties of apples, which contribute to a healthy and youthful complexion.</p>
          <h4 className={classes.paraTitle}>Cleansing with Apple Extracts</h4>
          <p className={classes.text}>Explain how apple extracts are incorporated into facewash formulations to cleanse and purify the skin.<br/><br/>Discuss the natural enzymes present in apples that help exfoliate and remove impurities, revealing a fresh and clear complexion.<br/><br/>Highlight the gentle yet effective nature of apple-based cleansers, suitable for all skin types, including sensitive skin.</p>
          <h4 className={classes.paraTitle}>Nourishing and Brightening Effects</h4>
          <p className={classes.text}>Explore the nourishing benefits of apple facewash, which can help improve skin texture and suppleness.<br/><br/>Discuss how apple extracts provide essential hydration to the skin, promoting a healthy moisture balance.<br/><br/>Highlight the brightening properties of apple-based cleansers, which can help reduce the appearance of dullness and uneven skin tone.</p>
          <h4 className={classes.paraTitle}>Antioxidant Protection</h4>
          <p className={classes.text}>Explain how the antioxidants found in apples can shield the skin from harmful free radicals and environmental aggressors.<br/><br/>Discuss the role of antioxidants in reducing oxidative stress, which contributes to premature aging and dull-looking skin.<br/><br/>Emphasize how apple facewash can help maintain a youthful and radiant complexion over time.</p>
          <h4 className={classes.paraTitle}>Refreshing Aromatherapy Experience</h4>
          <p className={classes.text}>Describe the refreshing scent of apple facewash, which provides an invigorating sensory experience during your skincare routine.<br/><br/>Discuss the mood-lifting and stress-relieving effects of apple aromatherapy, promoting a sense of well-being.</p>
          <h4 className={classes.paraTitle}>How to Incorporate Apple Facewash into Your Routine</h4>
          <p className={classes.text}>Provide step-by-step instructions on how to use apple facewash effectively for optimal results.<br/><br/>Discuss the recommended frequency of use and its compatibility with other skincare products.<br/><br/>Offer tips on customizing your skincare routine by incorporating other apple-infused products for a comprehensive apple skincare experience.</p>
          {/* <h4 className={classes.paraTitle}></h4> */}
          {/* <p className={classes.text}><br/><br/><br/><br/></p> */}
        </div>
      </div>
    </section>
  )
};

export default Blog2;
