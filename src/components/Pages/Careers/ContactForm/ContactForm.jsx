import React from "react";
import { useState } from "react";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [position, setPosition] = useState("");
  const [file, setFile] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // prettier-ignore
    const tempCustomer = { name: name.toString().trim(), number: number.toString().trim(), email: email.toString().trim(), qualification: qualification.toString().trim(), position: position.toString().trim(), file: file, };

    console.log(tempCustomer);

    setName("");
    setNumber("");
    setEmail("");
    setQualification("");
    setPosition("");
    setFile(null);
  };

  return (
    <section>
      <div className={classes.container}>
        <div className={classes.formContainer}>
          <div className={classes.formHeading}>
            <p className={classes.formHeadingTxt}>Contact Us</p>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="e.g. John Doe"
              />
            </div>
            <div className={classes.formEl}>
              <label htmlFor="number" className={classes.label}>
                Number
              </label>
              <input
                className={classes.input}
                type="tel"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
                placeholder="e.g. +91-9999999999"
              />
            </div>
            <div className={classes.formEl}>
              <label htmlFor="email" className={classes.label}>
                Email
              </label>
              <input
                className={classes.input}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. abc@gmail.com"
              />
            </div>
            <div className={classes.formEl}>
              <label htmlFor="state" className={classes.label}>
                Qualification
              </label>
              <input
                className={classes.input}
                type="text"
                id="state"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                required
                placeholder="e.g. B.E. Mechanical"
              />
            </div>
            <div className={classes.formEl}>
              <label htmlFor="city" className={classes.label}>
                Position Applying For
              </label>
              <input
                className={classes.input}
                type="text"
                id="city"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
                placeholder="e.g. Sales Executive"
              />
            </div>
            <div className={classes.formEl}>
              <label
                htmlFor="pin"
                className={`${classes.label} ${classes.fileLabel}`}
              >
                Upload CV
              </label>
              <input
                className={`${classes.input} ${classes.fileInput}`}
                type="file"
                id="pin"
                value={file}
                onChange={(e) => setFile(e.target.value)}
                required
                placeholder=".pdf"
              />
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

export default ContactForm;
