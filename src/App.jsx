import React from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import AboutUs from "./components/Pages/About/AboutUs";
import Events from "./components/Pages/Events/Events";
import Gallery from "./components/Pages/Gallery/Gallery";
import Event from "./components/Pages/Gallery/Event/Event";
import Careers from "./components/Pages/Careers/Careers";
import OurBrands from "./components/Pages/OurBrands/OurBrands";
import ThirdPartyBrands from "./components/Pages/ThirdPartyBrands/ThirdPartyBrands";
import ThirdPartyBrand from "./components/Pages/ThirdPartyBrand/ThirdPartyBrand";
import StartYourBrand from "./components/Pages/StartYourBrand/StartYourBrand";
import ContactUs from "./components/Pages/ContactUS/ContactUs";
import Navigation from "./components/Layout/Navigation/Navigation";
import AllProducts from "./components/Pages/AllProducts/AllProducts";
import ProductsCategories from "./components/Pages/ProductsCategories/ProductsCategories";
import Product from "./components/Pages/Product/Product";
import Blogs from "./components/Pages/Blog/Blogs";
import Blog from "./components/Pages/Blog/Blog";
import Testimonials from "./components/Pages/Testimonials/Testimonials";
import TestimonialForm from "./components/Pages/TestimonialForm/TestimonialForm";
import Login from "./components/Pages/LoginRegister/Login";
// import Register from "./components/Pages/LoginRegister/Register";
import AdminPanel from "./components/Pages/AdminPanel/AdminPanel";
import Footer from "./components/Layout/Footer/Footer";


function App() {
  const gotToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    gotToTop();
  });
  // prettier-ignore
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/gallery/:someEvent" element={<Event />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/our-brands" element={<OurBrands />}></Route>
        <Route path="/third-party-brands" element={<ThirdPartyBrands />}></Route>
        <Route path="/third-party-brands/:someBrand" element={<ThirdPartyBrand />}></Route>
        <Route path="/start-your-brand" element={<StartYourBrand />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/all-products" element={<AllProducts />}></Route>
        <Route path="/products-category/:someProductCategory" element={<ProductsCategories />}></Route>
        <Route path="/product/:someProduct" element={<Product />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blog/:someblog" element={<Blog />}></Route>
        <Route path="/testimonials" element={<Testimonials />}></Route>
        <Route path="/testimonials-form" element={<TestimonialForm />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/register" element={<Register />}></Route> */}
        <Route path="/admin-panel" element={<AdminPanel />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
