import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
// import { productCategoryActions } from "../../../../store/product-category-slice";

import Category from "./Category";
// import { DUMMY_PRODUCT_CATEGORIES } from "../../../../store/constants";

import classes from "./ProdCategories.module.css";

const ProdCategories = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  // const [categories, setCategories] = useState(DUMMY_PRODUCT_CATEGORIES);
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [createCategory, setCreateCategory] = useState([]);
  const [image, setImage] = useState("");

  // const dispatch = useDispatch();

  const updateJobs = (category) => {
    // const tempArr = categories.map((el) =>
    //   el.id === category.id ? category : el
    // );
    console.log(category);
    axios
      .put(`http://localhost:5555/api/category/${category.id}`, {
        category: category.name,
        category_image: category.img
       })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        // setCategories(response.data);
      });

    setTimeout(() => {
      getAllCategories();
    }, 200);

    // console.log(tempArr);
    // setCategories(tempArr);
    // setIsAdding(false);
  };

  const addJob = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please fill all mandatory fields!");
      return;
    }

    addMyCategory(title, image);

    const tempId = `p${categories.length + 1}`;
    // prettier-ignore
    const tempCategories = [{ id: tempId, name: title, }];

    // const tempArr = categories.concat(tempCategories);

    // setCategories(tempArr);
    // axios.get("http://localhost:5555/api/category/getAll").then((data) => {
    //   console.log(data);
    //   setCategories(data?.data);
    // });

    setTimeout(() => {
      getAllCategories();
    }, 200);
    setTitle("");
    setIsAdding(false);
  };

  // Post Api to create new jobs

  // const addMyCategory = (title) => {
  //   axios
  //     .post("http://localhost:5555/api/category/addCategory", {
  //       category: title
  //     })
  //     .then((response) => {
  //       console.log("fcgvhb");
  //       setCreateCategory([response.data, ...createCategory]);
  //     });
  //   setTitle("");
  // };

  const addMyCategory = (title, image) => {
    const formData = new FormData();

    formData.append("category", title);
    formData.append("category_image", image);

    axios
      .post("http://localhost:5555/api/category/addCategory", formData)
      .then((response) => {
        console.log("fcgvhb");
        setCreateCategory([response.data, ...createCategory]);
      });
    setTitle("");
  };
  const getAllCategories = () => {
    axios.get("http://localhost:5555/api/category/getAll").then((data) => {
      setCategories(data?.data);
    });
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const deleteHandler = (id) => {
    // prettier-ignore
    const res = window.confirm( "Are you sure you want to delete this Product Category?" );
    if (!res) return;

    axios
      .delete(`http://localhost:5555/api/category/${id}`)
      .then((response) => {
        console.log("deleted successfully!");
      });

    // setCategories((prev) => prev.filter((el) => el.id !== id));
    console.log(categories);
    setTimeout(() => {
      getAllCategories();
    }, 200);
  };

  const cancelHandler = () => {
    // prettier-ignore
    const res = window.confirm( "Are you sure you want to cancel adding new Category?" );
    if (!res) return;

    setTitle("");
    setIsAdding(false);
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div
          className={classes.categoryHeader}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <p className={classes.categoryHeaderText}>
            <span>Product Categories</span>
            <span>
              <i
                className={`fa-solid ${!isExpanded ? "fa-plus" : "fa-minus"}`}
              ></i>
            </span>
          </p>
        </div>
        <div
          className={`${classes.categoryContent} ${
            !isExpanded ? classes.inactive : ""
          }`}
        >
          <ul className={classes.categories}>
            {categories.map((job) => {
              // const { id, name } = job;
              const { id, category } = job;

              return (
                <li key={id} className={classes.category}>
                  <Category
                    id={id}
                    name={category}
                    updateJobs={updateJobs}
                    deleteHandler={deleteHandler}
                  />
                </li>
              );
            })}
          </ul>

          {isAdding && (
            <div className={classes.categoryFormContent}>
              <form onSubmit={addJob} className={classes.form}>
                <label htmlFor="role" className={classes.label}>
                  <span className={classes.labelText}>Category Name: *</span>
                  <input
                    id="role"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={classes.inputField}
                    required
                  />
                </label>
                <label htmlFor="img" className={classes.label}>
                  <span className={classes.labelText}>Add Image: *</span>
                  <input
                    id="img"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    className={`${classes.inputField} ${classes.fileInput}`}
                    required
                  />
                </label>
                <div className={classes.btns}>
                  <button className={classes.btn} type="submit">
                    Add
                  </button>
                  <button
                    className={classes.btn}
                    onClick={cancelHandler}
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
          {/* <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description:</span><input id="description" type='text' value={description} onChange={(e) => setDescription(e.target.value)} className={classes.inputField} required/></label> */}
          {!isAdding && (
            <div className={classes.addCategory}>
              <button
                className={classes.addCategoryBtn}
                onClick={() => setIsAdding(true)}
              >
                Add Category
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProdCategories;
