import React from "react";
import { useState } from "react";

import classes from "./Job.module.css";

const Job = ({
  id,
  role,
  contact,
  salary,
  workLocation,
  officeLocation,
  officeTimings,
  description,
  requirement,
  updateJobs,
  deleteHandler
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState(role);
  const [jobContact, setJobContact] = useState(contact);
  const [salaryOffered, setSalaryOffered] = useState(salary);
  const [jobWorkLocation, setJobWorkLocation] = useState(workLocation);
  const [jobOfficeLocation, setJobOfficeLocation] = useState(officeLocation);
  const [jobOfficeTimings, setJobOfficeTimings] = useState(officeTimings);
  const [jobDescription, setJobDescription] = useState(description);
  const [jobRequirement, setJobRequirement] = useState(requirement);

  // console.log(
  //   role,
  //   contact,
  //   salary,
  //   workLocation,
  //   officeLocation,
  //   officeTimings,
  //   description,
  //   requirement
  // );

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(
      title,
      contact,
      salaryOffered,
      jobWorkLocation,
      jobDescription,
      jobRequirement
    );

    // prettier-ignore
    updateJobs({ id: id, role: title, contact: jobContact, salary: salaryOffered, workLocation: jobWorkLocation, officeLocation: jobOfficeLocation, officeTimings: jobOfficeTimings, description: jobDescription, requirement: jobRequirement, });

    // setTitle("");
    // setExperience("");
    // setSalaryOffered("");
    // setDescription("");
    setIsExpanded(false);
  };

  // prettier-ignore
  return (
    <div className={classes.job}>
        <div className={classes.formHeader} onClick={() => setIsExpanded((prev) => !prev)}><span className={classes.formHeaderText}>{role}</span><span className={classes.plusIcon}><i className={`fa-solid ${!isExpanded ? 'fa-plus' : 'fa-minus'}`}></i></span></div>
        <form className={`${classes.form} ${!isExpanded ? classes.inactive : ''}`} onSubmit={submitHandler}>
          <label htmlFor="role" className={classes.label}><span className={classes.labelText}>Job Profile: *</span><input id="role" type='text' value={title} onChange={(e) => setTitle(e.target.value)} className={classes.inputField} required/></label>
          <label htmlFor="contact" className={classes.label}><span className={classes.labelText}>Contact: *</span><input id="contact" type='text' value={jobContact} onChange={(e) => setJobContact(e.target.value)} className={classes.inputField} required/></label>
          <label htmlFor="salary" className={classes.label}><span className={classes.labelText}>Salary: *</span><input id="salary" type='text' value={salaryOffered} onChange={(e) => setSalaryOffered(e.target.value)} className={classes.inputField} required/></label>
          <label htmlFor="worklocation" className={classes.label}><span className={classes.labelText}>Work Location: *</span><textarea name="work-location" id="worklocation" aria-label="work-location" value={jobWorkLocation} onChange={(e) => setJobWorkLocation(e.target.value)} className={classes.textarea} required/></label>
          <label htmlFor="officelocation" className={classes.label}><span className={classes.labelText}>Office Location:</span><textarea name="office-location" id="officelocation" aria-label="office-location" value={jobOfficeLocation} onChange={(e) => setJobOfficeLocation(e.target.value)} className={classes.textarea} /></label>
          <label htmlFor="officetimings" className={classes.label}><span className={classes.labelText}>Office Timings:</span><input id="officetimings" type='text' value={jobOfficeTimings} onChange={(e) => setJobOfficeTimings(e.target.value)} className={classes.inputField} /></label>
          <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description: *</span><textarea name="job-description" id="description" aria-label="job-description" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} className={classes.textarea} required></textarea></label>
          <label htmlFor="requirements" className={classes.label}><span className={classes.labelText}>Requirements:</span><textarea name="job-requirements" id="requirements" aria-label="job-requirements" value={jobRequirement} onChange={(e) => setJobRequirement(e.target.value)} className={classes.textarea} ></textarea></label>
          <div className={classes.btns}>
            <button className={classes.btn} type="submit">Submit</button>
            <button className={classes.btn} onClick={() => deleteHandler(id)}>Delete Job</button>
          </div>
        </form>
    </div>
  )
};

export default Job;
