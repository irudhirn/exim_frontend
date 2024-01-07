import { useState } from "react";

import classes from "./OurBrand.module.css";

const OurBrand = ({ id, name, img, desc, updateBrands, deleteHandler }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState(name);
  const [description, setDescription] = useState(desc);
  const [file1, setFile1] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(title, file1, description);

    // prettier-ignore
    updateBrands({ id: id, name: title, img: file1, desc: description });

    setIsExpanded(false);
  };

  //   prettier-ignore
  return (
    <div className={classes.brand}>
        <div className={classes.brandHeader} onClick={() => setIsExpanded((prev) => !prev)}><span className={classes.brandHeaderText}>{name}</span><span className={classes.plusIcon}><i className={`fa-solid ${!isExpanded ? 'fa-plus' : 'fa-minus'}`}></i></span></div>
        <form className={`${classes.form} ${!isExpanded ? classes.inactive : ''}`} onSubmit={submitHandler}>
            <label htmlFor="role" className={classes.label}><span className={classes.labelText}>Brand name: *</span><input id="role" type='text' value={title} onChange={(e) => setTitle(e.target.value)} className={classes.inputField} required/></label>
            <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description: *</span><textarea name="job description" id="description" aria-label="job description" value={description} onChange={(e) => setDescription(e.target.value)} className={classes.textarea} required></textarea></label>
            <label htmlFor="img1" className={classes.label}><span className={classes.labelText}>Upload Image: *</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img1" onChange={(e) => setFile1(e.target.files[0])} placeholder=".jpg,.png,.webp " /></label>
            <div className={classes.btns}>
              <button className={classes.btn} type="submit">Submit</button>
              <button className={classes.btn} onClick={() => deleteHandler(id)}>Delete Brand</button>
            </div>
        </form>
    </div>
  )
};

export default OurBrand;
