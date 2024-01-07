import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AdminBlogs from "./Blogs/AdminBlogs";
import AdminBrands from "./Brands/AdminBrands";
import AdminGallery from "./Gallery/AdminGallery";
import AdminJobs from "./Jobs/AdminJobs";
import AdminProducts from "./Products/AdminProducts";
import ProdCategories from "./ProdCategories/ProdCategories";
import AdminThirdBrands from "./ThirdBrands/AdminThirdBrands";
import AdminTestimonials from "./Testimonials/AdminTestimonials";

import { isLoggedInActions } from "../../../store/isLoggedIn-slice";

import Wrapper from "../../UI/Wrapper";

import classes from "./AdminPanel.module.css";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [careers, setCareers] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);
  const [thirdPartyBrands, setThirdPartyBrands] = useState([]);
  const [eventGalleries, setEventGalleries] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const [isUserDropdownExpanded, setIsUserDropdownExpanded] = useState(false);

  const getAllCategories = () => {
    axios.get("http://localhost:5555/api/category/getAll").then((data) => {
      // console.log(data?.data);
      setCategories(data?.data);
    });
  };

  const getAllJobs = () => {
    axios.get("http://localhost:5555/api/career/getAll").then((data) => {
      setCareers(data?.data);
    });
  };

  const getAllTestimonials = () => {
    axios.get("http://localhost:5555/api/testimonial/getAll").then((data) => {
      setTestimonials(data?.data);
    });
  };

  const getAllBrands = () => {
    axios.get("http://localhost:5555/api/brands/getAll").then((data) => {
      // console.log(data?.data);
      setBrands(data?.data);
    });
  };

  const getAllThirdPartyBrands = () => {
    axios.get("http://localhost:5555/api/thirdParty/getAll").then((data) => {
      // console.log(data);
      // console.log(data?.data);
      setThirdPartyBrands(data?.data);
    });
  };

  const getAllEventsGalleries = () => {
    axios.get("http://localhost:5555/api/gallary/getAll").then((data) => {
      // console.log(data);
      setEventGalleries(data?.data);
    });
  };

  const getAllProducts = () => {
    axios.get("http://localhost:5555/api/product/getAll").then((data) => {
      console.log(data?.data);
      setAllProducts(data?.data);
    });
  };

  useEffect(() => {
    getAllCategories();
    getAllJobs();
    getAllTestimonials();
    getAllBrands();
    getAllThirdPartyBrands();
    getAllEventsGalleries();
    getAllProducts();
  }, []);

  // useEffect(() => {
  //   const loginStatus = sessionStorage.getItem("isLoggedIn");
  //   const loginID = sessionStorage.getItem("userID");

  //   if (loginStatus && loginID) {
  //     dispatch(isLoggedInActions.login({ userID: loginID }));
  //   }

  //   if (!loginStatus) {
  //     navigate("/login");
  //   }
  // }, []);

  // console.log(isLoggedIn, userID);

  const logoutHandler = () => {
    const val = window.confirm("Are you sure you want to logout?");

    if (!val) {
      setIsUserDropdownExpanded(false);
      return;
    }

    dispatch(isLoggedInActions.logout());
    setIsUserDropdownExpanded(false);

    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("userID");

    setTimeout(() => navigate("/login"), 1);
  };

  // const isLoggedIn = useSelector((state) => state.loggedIn.isLoggedIn);
  // const userID = useSelector((state) => state.loggedIn.userID);
  // console.log(isLoggedIn, userID);

  return (
    <Wrapper>
      {/* {!isLoggedIn && (
        <div className={classes.spinnerDiv}>
          <img
            src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
            alt="spinner"
            className={classes.spinnerImg}
          />
        </div>
      )} */}
      {/* {isLoggedIn && ( */}
        <Wrapper>
          <div className={classes.userArrowDiv}>
            <button
              className={classes.userArrowBtn}
              onClick={() => setIsUserDropdownExpanded((prev) => !prev)}
            >
              <i className="fa-solid fa-user"></i>
              &nbsp;&nbsp;&nbsp;
              <i
                className={`fa-solid fa-caret-${
                  isUserDropdownExpanded ? "up" : "down"
                }`}
              ></i>
            </button>
            {isUserDropdownExpanded && (
              <div className={classes.dropdownDiv}>
                <span>
                  <i style={{ marginBottom: "10px" }}>
                    {/* <i className="fa-solid fa-user"></i>&nbsp;&nbsp;{userID} */}
                  </i>
                </span>
                <span>
                  <button className={classes.logoutBtn} onClick={logoutHandler}>
                    Logout
                  </button>
                </span>
              </div>
            )}
          </div>
          <div
            className={classes.adminPanelDiv}
            onClick={() => setIsUserDropdownExpanded(false)}
          >
            <AdminBlogs />
            <AdminBrands allBrands={brands} setBrands={setBrands} />
            <AdminGallery
              allEventGalleries={eventGalleries}
              setEventGalleries={setEventGalleries}
            />
            <AdminJobs careers={careers} />
            <AdminProducts categories={categories} allProducts={allProducts} />
            <ProdCategories />
            <AdminThirdBrands
              allThirdBrands={thirdPartyBrands}
              setThirdPartyBrands={setThirdPartyBrands}
            />
            <AdminTestimonials
              allTestimonials={testimonials}
              setTestimonials={setTestimonials}
            />
          </div>
        </Wrapper>
      {/* )} */}
    </Wrapper>
  );
};

export default AdminPanel;