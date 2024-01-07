import React from "react";
import { useState } from "react";

import classes from "./TestimonialForm.module.css";

const TestimonialForm = () => {
  const [clientName, setClientName] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [location, setLocation] = useState("");
  const [comment, setComment] = useState("");
  const [maxCommentLength, setMaxCommentLength] = useState(400);

  const submitHandler = (e) => {
    e.preventDefault();

    // prettier-ignore
    const tempCustomer = { name: clientName.toString().trim(), company: clientCompany.toString().trim(), location: location.toString().trim(), comment: comment.toString().trim() };

    console.log(tempCustomer);

    setClientName("");
    setClientCompany("");
    setLocation("");
    setComment("");
  };

  return (
    <section>
      <div className={classes.container}>
        <div className={classes.formContainer}>
          <div className={classes.formHeading}>
            <p className={classes.formHeadingTxt}>Send Your Feedback</p>
          </div>
          <form className={classes.form}>
            <div className={classes.formEl}>
              <label htmlFor="name" className={classes.label}>
                Name
              </label>
              <input
                className={classes.input}
                type="text"
                id="name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                required
                placeholder="e.g. John Doe"
              />
            </div>
            <div className={classes.formEl}>
              <label htmlFor="company" className={classes.label}>
                Company
              </label>
              <input
                className={classes.input}
                type="text"
                id="company"
                value={clientCompany}
                onChange={(e) => setClientCompany(e.target.value)}
                placeholder="e.g. Lex Corp"
              />
            </div>
            <div className={classes.formEl}>
              <label htmlFor="location" className={classes.label}>
                Location
              </label>
              <input
                className={classes.input}
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Mumbai"
              />
            </div>
            <div className={`${classes.formEl} ${classes.comment}`}>
              <label htmlFor="description" className={classes.label}>
                Description
              </label>
              <textarea
                name="product description"
                id="description"
                aria-label="product description"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className={classes.textarea}
                maxLength={maxCommentLength}
                required
              ></textarea>
              <span className={classes.commentLength}>
                {comment.toString().length} / {maxCommentLength}
              </span>
            </div>
          </form>
          <div className={classes.btnContainer}>
            <button
              type="submit"
              className={classes.submitBtn}
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialForm;
