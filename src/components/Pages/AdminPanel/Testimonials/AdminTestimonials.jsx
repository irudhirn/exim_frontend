import React, { useEffect } from "react";
import { useState } from "react";

import Testimonial from "./Testimonial";
// import { TESTIMONIALS as DUMMY_TESTIMONIALS } from "../../../../store/constants";
import classes from "./AdminTestimonials.module.css";
import axios from "axios";

const AdminTestimonials = ({ allTestimonials, setTestimonials }) => {
  // const AdminTestimonials = ({ allTestimonials }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  // const [testimonials, setTestimonials] = useState([]);
  // const [testimonials, setTestimonials] = useState(allTestimonials);
  const [clientName, setClientName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [clientLocation, setClientLocation] = useState("");
  const [clientComment, setClientComment] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [maxCommentLength, setMaxCommentLength] = useState(400);
  // console.log(allTestimonials);

  const [createTestimonial, setCreateTestimonial] = useState([]);

  const updateTestimonial = (testimonial) => {
    console.log(
      testimonial.id,
      testimonial.name,
      testimonial.company,
      testimonial.location,
      testimonial.description
    );

    axios
      .put(`http://localhost:5555/api/testimonial/${testimonial.id}`, {
        name: testimonial.name,
        companyName: testimonial.company,
        location: testimonial.location,
        comment: testimonial.description,
        isChecked: testimonial.isChecked
      })
      .then((response) => console.log(response));

    setTimeout(() => getAllTestimonials(), 200);
  };

  const addTestimonial = (e) => {
    e.preventDefault();

    if (!clientName || !clientComment) {
      alert("Please fill all the mandatory fields correctly!");
      return;
    }

    addMyTestimonial(clientName, companyName, clientLocation, clientComment);

    setTimeout(() => getAllTestimonials(), 200);

    setClientName("");
    setCompanyName("");
    setClientLocation("");
    setClientComment("");
    setIsAdding(false);
  };

  const addMyTestimonial = (name, company = "", location = "", description) => {
    axios
      .post("http://localhost:5555/api/testimonial/addTestimonial", {
        name: name,
        companyName: company,
        location: location,
        comment: description
      })
      .then((response) => {
        console.log("Testimonial Adding");
        setCreateTestimonial((prev) => [response.data, ...prev]);
      });
  };

  const getAllTestimonials = () => {
    axios.get("http://localhost:5555/api/testimonial/getAll").then((data) => {
      console.log(data?.data);
      setTestimonials(data?.data);
    });
  };

  useEffect(() => {
    // getAllTestimonials();
    setTestimonials(allTestimonials);
  }, []);

  const deleteHandler = (id) => {
    // prettier-ignore
    const res = window.confirm( "Are you sure you want to delete this Testimonial?" );
    if (!res) return;

    // setTestimonials((prev) => prev.filter((el) => el.id !== id));

    axios
      .delete(`http://localhost:5555/api/testimonial/${id}`)
      .then((response) => console.log("deleted successfully"));

    setTimeout(() => getAllTestimonials(), 200);
  };

  const cancelHandler = () => {
    // prettier-ignore
    const res = window.confirm( "Are you sure you want to cancel adding new testimonial?" );
    if (!res) return;

    setClientName("");
    setCompanyName("");
    setClientLocation("");
    setClientComment("");
    setIsAdding(false);
  };

  // prettier-ignore
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.testimonialsHeader} onClick={() => setIsExpanded((prev) => !prev)}>
          <p className={classes.testimonialsHeaderText}><span>Testimonials</span><span><i className={`fa-solid ${!isExpanded ? 'fa-plus' : 'fa-minus'}`}></i></span></p>
        </div>
        <div className={`${classes.testimonialsContent} ${!isExpanded ? classes.inactive : ''}`}>
          <ul className={classes.testimonials}>
            {/* {!testimonials.length && (
              <div className={classes.spinnerDiv}>
                <img
                  src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
                  alt="spinner"
                  className={classes.spinnerImg}
                  style={{width: "50px", height: "50px"}}
                />
              </div>
            )} */}
            {allTestimonials.map((testimonial) => {
              const { id, name, companyName, location, comment, isChecked } = testimonial;
              // console.log(testimonial);

              return (
                <li key={id} className={classes.testimonial}>
                  <Testimonial
                    id={id}
                    name={name}
                    company={companyName}
                    location={location}
                    description={comment}
                    isChecked={isChecked}
                    updateTestimonial={updateTestimonial}
                    deleteHandler={deleteHandler}
                  />
                </li>
              );
            })}
            {/* <li>Testimonial 1</li> */}
          </ul>
        
          {isAdding && (
            <div className={classes.testimonialsContent}>
                <form onSubmit={addTestimonial} className={classes.form}>
                    <label htmlFor="name" className={classes.label}><span className={classes.labelText}>Client Name: *</span><input id="name" type='text' value={clientName} onChange={(e) => setClientName(e.target.value)} className={classes.inputField} required/></label>
                    <label htmlFor="company" className={classes.label}><span className={classes.labelText}>Company:</span><input id="company" type='text' value={companyName} onChange={(e) => setCompanyName(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="location" className={classes.label}><span className={classes.labelText}>Location:</span><input id="location" type='text' value={clientLocation} onChange={(e) => setClientLocation(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="description" className={classes.label}>
                      <span className={classes.labelText}>Description: *</span>
                      <textarea name="job description" id="description" aria-label="job description" maxLength={maxCommentLength} value={clientComment} onChange={(e) => setClientComment(e.target.value)} className={classes.textarea} required></textarea>
                      <span className={classes.commentLength}>
                        {clientComment.toString().length} / {maxCommentLength}
                      </span>
                    </label>
                    <label htmlFor="checkbox" className={classes.label}><span className={classes.labelText}>Add to Homepage:</span><input id="checkbox" type='checkbox' value={isSelected} onChange={(e) => setIsSelected(e.target.checked)} className={classes.inputField}/></label>
                    <div className={classes.btns}>
                      <button className={classes.btn} type="submit">Add</button>
                      <button className={classes.btn} onClick={cancelHandler} type="button">Cancel</button>
                    </div>
                </form>
            </div>)
          }
          {/* <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description:</span>&nbsp;<input id="description" type='text' value={description} onChange={(e) => setDescription(e.target.value)} className={classes.inputField} required/></label> */}
          {!isAdding && <div className={classes.addTestimonial}><button className={classes.addTestimonialBtn} onClick={() => setIsAdding(true)}>Add Testimonial</button></div>}
        </div>
      </div>
    </section>
  );
};

export default AdminTestimonials;

/*

http://localhost:5555/api/testimonial/addTestimonial

http://localhost:5555/api/testimonial/getAll

http://localhost:5555/api/testimonial/:id

*/
