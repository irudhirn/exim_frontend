import React from "react";
import { useState } from "react";

import classes from "./Category.module.css";

const Category = ({ id, name, updateJobs, deleteHandler }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState(name);
  const [image, setImage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // prettier-ignore
    updateJobs({ id: id, name: title,img : image });
    // updateJobs({ id: id, category: title, });

    setIsExpanded(false);
  };

  return (
    <div className={classes.job}>
      <div
        className={classes.formHeader}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <span className={classes.formHeaderText}>{name}</span>
        <span className={classes.plusIcon}>
          <i className={`fa-solid ${!isExpanded ? "fa-plus" : "fa-minus"}`}></i>
        </span>
      </div>
      <form
        className={`${classes.form} ${!isExpanded ? classes.inactive : ""}`}
        onSubmit={submitHandler}
      >
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
            Submit
          </button>
          <button
            className={classes.btn}
            type="button"
            onClick={() => deleteHandler(id)}
          >
            Delete Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default Category;
