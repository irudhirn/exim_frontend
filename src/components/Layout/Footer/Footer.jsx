import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

// prettier-ignore
export const DUMMY_FOOTER_DATA = [
  {id: 'f1', title: 'Location', links: [
    {id: 'f11', link: "150, 3rd Floor, Amrut Udhyog Nagar, Kamrej, Surat Gujarat - 394185 INDIA", page: '', isLink: false},
    {id: 'f12', link: "+91 7096553300", page: '', isLink: false},
    {id: 'f13', link: "jaideep.eximburg@gmail.com", page: '', isLink: false},
    {id: 'f14', link: "Monday To Saturday: 10 AM To 6 PM - Closed on Sunday & Bank Holiday", page: '', isLink: false},
  ]},
  {id: 'f3', title: 'Categories', links: [
    { id: "f31", link: "Ayurvedic cigrettes", menu: [], page: "", isClickable: 'true' },
    { id: "f32", link: "MLM Health Wellness Product", menu: [], page: "", isClickable: 'true' },
    { id: "f34", link: "E-commerce Food Supplement", menu: [], page: "", isClickable: 'true' },
    { id: "f35", link: "Herbal Health Juice", menu: [], page: "", isClickable: 'true' },
    { id: "f36", link: "Food & Herbal Supplement", menu: [], page: "", isClickable: 'true' },
    { id: "f37", link: "Ayurvedic Syrups & Tonics", menu: [], page: "", isClickable: 'true' },
    { id: "f38", link: "Personal Care Range", menu: [], page: "", isClickable: 'true' },
    { id: "f39", link: "Herbals Capsules & Tablets", menu: [], page: "", isClickable: 'true' }
  ]},
  {id: 'f2', title: 'Quick Links', links: [
    { id: "f21", link: "Home", menu: [], page: "/", isClickable: 'true' },
    { id: "f22", link: "About us", menu: [], page: "/about-us", isClickable: 'true' },
    // { id: "f23", link: "Events", menu: [], page: "/events", isClickable: 'true' },
    { id: "f24", link: "Gallery", menu: [], page: "/gallery", isClickable: 'true' },
    { id: "f25", link: "Careers", menu: [], page: "/careers", isClickable: 'true' },
    { id: "f26", link: "Our brands", menu: [], page: "/our-brands", isClickable: 'true' },
    { id: "f27", link: "Contact us", menu: [], page: "/contact-us", isClickable: 'true' },
    { id: "f29", link: "Admin Panel", menu: [], page: "/testimonials", isClickable: 'true' },
    { id: "f28", link: "Admin Panel", menu: [], page: "/admin-panel", isClickable: 'true' }
  ]},
];

const Footer = () => {
  const gotToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // prettier-ignore
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.detailsLinks}>
          <ul className={classes.detailsLinksList}>
            <li className={classes.detailsLinksListItem}>
              <h5 className={classes.title}>Locate Us</h5>
              <iframe
                className={classes.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29757.630780075826!2d72.84002351612715!3d21.203920529482293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f71831f358b%3A0xbbce284f9f3a2ae4!2sEXIMBURG%20INTERNATIONAL%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1678708580563!5m2!1sen!2sin"
                // width="325px"
                // height="320px"
                title="map"
                style={{ border: "0px", margin: "0px auto" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </li>
            <li className={classes.detailsLinksListItem}>
              <h5 className={classes.title}>Connect with us</h5>
              <ul className={classes.linksList}>
                <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={""} className={classes.link}><span style={{lineHeight: "1.75"}}>Corporate Office -</span><br/>Shubham Complex, 2nd & 3rd floor, Aai Mata Rd, near SMC health center, opp. D R World, Parvat Patiya, Surat, Gujarat-395010</Link></li>
                <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={""} className={classes.link}><span style={{lineHeight: "1.75"}}>Manufacturing Plant -</span><br/>150, 3rd Floor, Amrut Udhyog Nagar, Kamrej, Surat Gujarat - 394185 INDIA</Link></li>
                <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={""} className={classes.link}>+91-7096553300</Link></li>
                <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={""} className={classes.link}>jaideep.eximburg@gmail.com</Link></li>
                <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={""} className={classes.link}>Monday To Saturday: 10 AM To 6 PM - Closed on Sunday & Bank Holiday</Link></li>
                <li className={`${classes.linksListItem} ${classes.socialLinksListItem}`} style={{}}>
                  <span style={{height: '40px', width: '40px', borderRadius: '50px', overflow: 'hidden'}}><Link to={"https://instagram.com/eximburginternational?igshid=MzRIODBiNWFIZA=="}><img src={require("../../../resources/images/instagram.png")} alt="instagram" style={{height: '100%', width: '100%'}}/></Link></span>
                  <span style={{height: '40px', width: '40px', borderRadius: '50px', overflow: 'hidden'}}><Link to={"https://www.facebook.com/eximburg?mibextid=ZbWKwL"}><img src={require("../../../resources/images/facebook.png")} alt="facebook" style={{height: '100%', width: '100%'}}/></Link></span>
                  {/* <span style={{height: '40px', width: '40px', borderRadius: '50px', overflow: 'hidden'}}><Link><img src={require("../../../resources/images/twitter.png")} alt="twitter" style={{height: '100%', width: '100%'}}/></Link></span> */}
                  <span style={{height: '40px', width: '40px', borderRadius: '50px', overflow: 'hidden'}}><Link to={"https://www.youtube.com/@uniquebusinessinindia8756"}><img src={require("../../../resources/images/youtube.png")} alt="twitter" style={{height: '100%', width: '100%'}}/></Link></span>
                </li>
              </ul>
            </li>
            <li className={classes.detailsLinksListItem}>
              <h5 className={classes.title}>Categories</h5>
              <ul className={classes.linksList}>
                <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={"/products-category/third-party-ayurvedic-beauty-products"} className={classes.link}>Third Party Ayurvedic Beauty Products</Link></li>
                <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={"/products-category/third-party-cosmetic-beauty-products"} className={classes.link}>Third Party Cosmetic Beauty Products</Link></li>
                <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={"/products-category/face-care-products"} className={classes.link}>Face Care</Link></li>
                <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={"/products-category/hair-care-products"} className={classes.link}>Hair Care</Link></li>
                <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={"/products-category/mens-care-products"} className={classes.link}>Men's Care</Link></li>
                <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={"/products-category/personal-care-products"} className={classes.link}>Personal Care</Link></li>
                {/* <li className={classes.linksListItem}><Link to={""} className={classes.link}>Personal Care Range</Link></li> */}
                {/* <li className={classes.linksListItem}><Link to={""} className={classes.link}>Herbals Capsules & Tablets</Link></li> */}
              </ul>
            </li>
            <li className={classes.detailsLinksListItem}>
              <h5 className={classes.title}>Quick Links</h5>
              <ul className={classes.linksList}>
                <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={"/"} className={classes.link}>Home</Link></li>
                {/* <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={"/third-party-brands"} className={classes.link}>Third Party Brands</Link></li> */}
                <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={"/our-brands"} className={classes.link}>Our brands</Link></li>
                <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={"/gallery"} className={classes.link}>Gallery</Link></li>
                <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={"/careers"} className={classes.link}>Careers</Link></li>
                <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={"/blogs"} className={classes.link}>Blogs</Link></li>
                <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={"/about-us"} className={classes.link}>About us</Link></li>
                <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={"/contact-us"} className={classes.link}>Contact us</Link></li>
                {/* <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={"/testimonials"} className={classes.link}>Testimonials</Link></li> */}
                <li className={classes.linksListItem} onClick={() => gotToTop()}><Link to={"/admin-panel"} className={classes.link}>Admin Panel</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.footerNav}>
        <div className={`${classes.container} container`}>
          <div className={classes.footerNavCopyright}>
            <p className={classes.footerNavCopyrightTxt}>
              Copyright - Eximburg International Pvt. Ltd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
