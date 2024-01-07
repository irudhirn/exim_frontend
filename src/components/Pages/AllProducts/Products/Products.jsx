import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import ProdCategories from "../ProdCategories/ProdCategories";
import { ALL_PRODUCTS_2 } from "../../../../store/constants";

import classes from "./Products.module.css";

const Products = ({ setProdPopupId, openProdPopup, setCurrentPage }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [products, setProducts] = useState(ALL_PRODUCTS_2);
  const [curPage, setCurPage] = useState(1);
  const [pages, setPages] = useState([]);

  // console.log(Math.ceil(ALL_PRODUCTS_2.length / 9));

  useEffect(() => {
    setCurrentPage(curPage);
  }, [curPage]);

  useEffect(() => {
    let tempArr = [];
    for (let i = 1; i <= Math.ceil(ALL_PRODUCTS_2.length / 9); i++) {
      tempArr.push(i);
    }
    console.log(tempArr);
    setPages(tempArr);
  }, []);

  const params = useParams();

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div
          className={`${classes.sideBar} ${isExpanded ? classes.active : ""}`}
        >
          <div className={classes.toggleBox}>
            <button
              className={classes.toggleBtn}
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              <i className={`fa-solid fa-${isExpanded ? "times" : "bars"}`}></i>
            </button>
          </div>
          <ProdCategories />
        </div>
        <div className={classes.productsContainer}>
          <ul className={classes.products}>
            {/* .filter((el, i) => +el.page === curPage) */}
            {products.slice((+curPage - 1) * 9, +curPage * 9).map((product) => {
              const { id, name, img, page, desc, details, pageNo } = product;
              // console.log(page);

              return (
                <li key={id} className={classes.product}>
                  <Link
                    to={`/product/${name.toLowerCase().split(" ").join("-")}`}
                    onClick={() => {}}
                  >
                    <div className={classes.productEl}>
                      <div className={classes.productElImg}>
                        <img
                          src={require(`../../../../resources/images/${img}`)}
                          alt={name}
                          className={classes.prodImg}
                        />
                      </div>
                      <Link
                        to={`/product/${name
                          .toLowerCase()
                          .split(" ")
                          .join("-")}`}
                      >
                        <p className={classes.productElName}>{name}</p>
                      </Link>
                    </div>
                  </Link>
                  <button
                    className={classes.readBtn}
                    onClick={() => {
                      openProdPopup();
                      setProdPopupId(id);
                    }}
                  >
                    <span className={classes.readText}>Read More</span>
                    <span className={classes.arrow}>
                      <i className="fa-solid fa-angles-right"></i>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={classes.pages}>
        <button
          style={{ display: curPage === 1 ? "none" : "" }}
          onClick={() => setCurPage((prev) => prev - 1)}
          className={`${classes.btn} ${classes.opBtn}`}
        >
          Prev
        </button>
        {pages.map((el, i) => {
          return (
            <button
              key={i}
              onClick={() => setCurPage(el)}
              className={`${classes.btn} ${classes.numBtn} ${
                curPage === el ? classes.active : ""
              }`}
            >
              {el}
            </button>
          );
        })}
        {/* <button
          onClick={() => setCurPage(1)}
          className={`${classes.btn} ${classes.numBtn} ${
            curPage === 1 ? classes.active : ""
          }`}
        >
          1
        </button> */}
        <button
          style={{ display: curPage === pages.length ? "none" : "" }}
          onClick={() => setCurPage((prev) => prev + 1)}
          className={`${classes.btn} ${classes.opBtn}`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Products;
