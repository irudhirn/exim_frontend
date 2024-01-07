import React from "react";
import { useState } from "react";

import classes from "./Testimonial.module.css";

const Testimonial = ({
  id,
  name,
  company,
  location,
  description,
  isChecked,
  updateTestimonial,
  deleteHandler
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [clientName, setClientName] = useState(name);
  const [companyName, setCompanyName] = useState(company);
  const [clientLocation, setClientLocation] = useState(location);
  const [clientComment, setClientComment] = useState(description);
  const [isSelected, setIsSelected] = useState(isChecked);
  const [maxCommentLength, setMaxCommentLength] = useState(400);

  const submitHandler = (e) => {
    e.preventDefault();

    // prettier-ignore
    updateTestimonial({ id: id, name: clientName, company: companyName, location: clientLocation, description: clientComment, isChecked: isSelected });

    setIsExpanded(false);
  };

  // prettier-ignore
  return (
        <div className={classes.testimonial}>
            <div className={classes.testimonialHeader} onClick={() => setIsExpanded((prev) => !prev)}><span className={classes.testimonialHeaderText}>{name}, {company}, {location}</span><span className={classes.plusIcon}><i className={`fa-solid ${!isExpanded ? 'fa-plus' : 'fa-minus'}`}></i></span></div>
            <form className={`${classes.form} ${!isExpanded ? classes.inactive : ''}`} onSubmit={submitHandler}>
                <label htmlFor="name" className={classes.label}><span className={classes.labelText}>Client Name: *</span><input id="name" type='text' value={clientName} onChange={(e) => setClientName(e.target.value)} className={classes.inputField} required/></label>
                <label htmlFor="company" className={classes.label}><span className={classes.labelText}>Company:</span><input id="company" type='text' value={companyName} onChange={(e) => setCompanyName(e.target.value)} className={classes.inputField}/></label>
                <label htmlFor="location" className={classes.label}><span className={classes.labelText}>Location:</span><input id="location" type='text' value={clientLocation} onChange={(e) => setClientLocation(e.target.value)} className={classes.inputField}/></label>
                <label htmlFor="description" className={classes.label}>
                  <span className={classes.labelText}>Description: *</span>
                  <textarea name="job description" id="description" aria-label="job description" value={clientComment} onChange={(e) => setClientComment(e.target.value)} className={classes.textarea} required></textarea>
                  <span className={classes.commentLength}>
                    {clientComment.toString().length} / {maxCommentLength}
                  </span>
                </label>
                <label htmlFor="checkbox" className={classes.label}><span className={classes.labelText}>Add to Homepage:</span><input id="checkbox" type='checkbox' checked={isSelected} onChange={(e) => setIsSelected(e.target.checked)} className={classes.inputField}/></label>
                <div className={classes.btns}>
                  <button className={classes.btn} type="submit">Submit</button>
                  <button className={classes.btn} onClick={() => deleteHandler(id)} type="button">Delete Testimonial</button>
                </div>
            </form>
        </div>
      )
};

export default Testimonial;
