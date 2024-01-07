import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h3 className={classes.sectionHeading}>About Eximburg</h3>
        <div className={classes.borderBottom}></div>
        <div className={classes.text}>
          <p className={classes.desc}>
            <span className={classes.highlight}>
              EXIMBURG INTERNATIONAL PVT. LTD.
            </span>
            &nbsp; is one the flourishing organization that is engaged in
            manufacturing and exporting innovative R&D based products in FMCG
            segmented market. We are located at SURAT, the economical capital of
            GUJARAT in INDIA.
          </p>
          <br />
          <p className={classes.desc}>
            <span className={classes.highlight}>Eximburg International</span>{" "}
            originates from the very desire of offering right & quality Herbal
            products to Indian and as well as International market since 2016.
            Since the very beginning, our products are manufactured as per the
            International standards & quality, but at competitive pricing. The
            founders of Eximburg International have had herbal Industry
            experience of more than two decade. Our experience in our field and
            all other vital factors like quality, timely delivery, inspection,
            etc make Eximburg the best choice you can make.
          </p>
          <br />
          <p className={classes.desc}>
            We are committed to provide value related customer-centered product
            & services to our clients. We achieve this, through our highly
            qualified and dedicated staff supported by our global sourcing
            network. Over half of Eximburg’s employees are dedicated to sales
            and marketing and customer service. Our industry specific sales
            teams employ experts with specialist industry training and
            experience to ensure they can offer the highest levels of technical
            & helpful advice and support to our customers.
          </p>
          <br />
          <p className={classes.desc}>
            We are proud of our supply chain, procurement and logistics services
            that give us the needed edge to serve our customers with best of our
            abilities.
          </p>
          <br />
          <br />
        </div>
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.cards}>
          <div className={classes.card}>
            <p className={classes.cardHeading}>Business Concept</p>
            <p className={classes.cardDesc}>
              To Provide Research based Innovative health beneficial products.
            </p>
          </div>
          <div className={classes.card}>
            <p className={classes.cardHeading}>Global Presence</p>
            <p className={classes.cardDesc}>
              India, New Zealand, United Kingdom, Canada & South Africa and
              Eastern Africa.
            </p>
          </div>
          <div className={classes.card}>
            <p className={classes.cardHeading}>Our Mission</p>
            <p className={classes.cardDesc}>
              To contribute in creating Health & De-Addictive nation. To be
              world class by being leaders in our fields of business, We aim to
              deliver superior quality like our leading products.
            </p>
          </div>
          <div className={classes.card}>
            <p className={classes.cardHeading}>Our Vision</p>
            <p className={classes.cardDesc}>
              To become leading trustable supplier of health beneficial products
              across the world by 2030. In our endeavor to achieve our goal, we
              expect a robust support from our consumers.
            </p>
          </div>
          <div className={classes.card}>
            <p className={classes.cardHeading}>Our Core Values</p>
            <p className={classes.cardDesc}>
              Integrity Innovation Delivering on our promises. Always exceeding
              expectations. Treating everyone with respect and dignity. Our
              Organization is strongly believed into build up long term customer
              relation and trust with committed product quality and timely
              deliveries that satisfy costumer need.
            </p>
          </div>
          <div className={classes.card}>
            <p className={classes.cardHeading}>Team Work</p>
            <p className={classes.cardDesc}>
              “Together we can achieve the impossible” is our belief. Our
              success is a result of our team work. We have experts from the
              field of management, marketing, IT, content & various other
              disciplines who work cordially as a team on every project, every
              endeavor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
