import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";

import Job from "./Job";

import classes from "./AdminJobs.module.css";

const DUMMY_JOBS = [
  {
    id: "j1",
    role: "Sales Executive",
    contact: "7600834842",
    salary: "Not disclosed",
    workLocation: "Surat, Gujarat",
    officeLocation: "Surat, Gujarat",
    officeTimings: "09:30am to 07:00pm (Negotiable)",
    description:
      "We are in need of a smart & dynamic persona as Purchase Manager responsible for keeping records of vendors, comparative analysis, process PR, negotiating, pricing, taxation, warehousing, distribution & etc.",
    requirements:
      "Strong communication skills and Ability to manage complex projects and multi-task."
  }
  // {id: 'j2', name: 'Senior Sales Manager', exp: '7+ years', salary: 'Not disclosed', location: 'Surat, Gujarat', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta adipisci hic nesciunt quod fugiat, suscipit expedita quis voluptas inventore ratione laborum, sit tempore voluptate voluptatibus eos quaerat? Aut ex laboriosam magni natus quia obcaecati, ab sunt sit perferendis dolore officiis delectus, assumenda consequatur cupiditate! Explicabo adipisci quo eveniet repudiandae?'},
  // {id: 'j3', name: 'Telecaller', exp: '0 - 1 years - Freshers can apply', salary: 'Not disclosed', location: 'Surat, Gujarat', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta adipisci hic nesciunt quod fugiat, suscipit expedita quis voluptas inventore ratione laborum, sit tempore voluptate voluptatibus eos quaerat? Aut ex laboriosam magni natus quia obcaecati, ab sunt sit perferendis dolore officiis delectus, assumenda consequatur cupiditate! Explicabo adipisci quo eveniet repudiandae?'},
];

const AdminJobs = ({ careers }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  // const [jobs, setJobs] = useState(DUMMY_JOBS);
  const [jobs, setJobs] = useState(careers);
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [officeLocation, setOfficeLocation] = useState("");
  const [officeTimings, setOfficeTimings] = useState("");
  const [salaryOffered, setSalaryOffered] = useState("");
  const [description, setDescription] = useState("");
  const [requirement, setRequirement] = useState("");
  const [createJobs, setCreateJobs] = useState([]);

  const updateJobs = (job) => {
    // const tempArr = jobs.map((el) => (el.id === job.id ? job : el));

    axios
      .put(`http://localhost:5555/api/career/${job.id}`, {
        role: job.role,
        contact: job.contact,
        salary: job.salary,
        workLocation: job.workLocation,
        officeLocation: job.officeLocation,
        officeTimings: job.officeTimings,
        description: job.description,
        requirement: job.requirement
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
      });

    setTimeout(() => getAllJobs(), 200);

    // console.log(tempArr);
    // setJobs(tempArr);
    setIsAdding(false);
    setTitle("");
    // setExperience("");
    setSalaryOffered("");
    // setLocation("");
    setDescription("");
  };

  const addJob = (e) => {
    e.preventDefault();

    if (
      !title ||
      !contact ||
      !salaryOffered ||
      !description ||
      !workLocation ||
      !requirement
    ) {
      alert("Please fill all mandatory fields!");
      return;
    }

    addMyJob(
      title,
      contact,
      salaryOffered,
      workLocation,
      officeLocation,
      officeTimings,
      description,
      requirement
    );

    setTimeout(() => getAllJobs(), 200);

    // const tempId = `j${jobs.length + 1}`;
    // // prettier-ignore
    // const tempJob = [{ id: tempId, name: title, exp: experience, salary: salaryOffered, location: location, desc: description}];

    // const tempArr = jobs.concat(tempJob);

    // setJobs(tempArr);
    setTitle("");
    setContact("");
    setWorkLocation("");
    setOfficeLocation("");
    setOfficeTimings("");
    setSalaryOffered("");
    setDescription("");
    setRequirement("");
    setIsAdding(false);
  };

  const addMyJob = (
    role,
    contact,
    salary,
    workLocation,
    officeLocation = "",
    officeTimings = "",
    description,
    requirement
  ) => {
    axios
      .post("http://localhost:5555/api/career/addCareer", {
        role: role,
        contact: contact,
        salary: salary,
        workLocation: workLocation,
        officeLocation: officeLocation,
        officeTimings: officeTimings,
        description: description,
        requirement: requirement
      })
      .then((response) => {
        console.log(response.data);
        setCreateJobs((prev) => [response.data, ...prev]);
      });
  };

  const getAllJobs = () => {
    axios
      .get("http://localhost:5555/api/career/getAll")
      .then((data) => setJobs(data?.data));
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  const deleteHandler = (id) => {
    // prettier-ignore
    const res = window.confirm( "Are you sure you want to delete this Job Post?" );
    if (!res) return;

    axios
      .delete(`http://localhost:5555/api/career/${id}`)
      .then((response) => console.log("deleted successfully!"));

    // setJobs((prev) => prev.filter((el) => el.id !== id));
    setTimeout(() => getAllJobs(), 200);
  };

  const cancelHandler = () => {
    // prettier-ignore
    const res = window.confirm( "Are you sure you want to cancel adding new job?" );
    if (!res) return;

    setTitle("");
    setContact("");
    setWorkLocation("");
    setOfficeLocation("");
    setOfficeTimings("");
    setSalaryOffered("");
    setDescription("");
    setRequirement("");
    setIsAdding(false);
  };

  // prettier-ignore
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.jobHeader} onClick={() => setIsExpanded((prev) => !prev)}>
            <p className={classes.jobHeaderText}><span>Careers</span><span><i className={`fa-solid ${!isExpanded ? 'fa-plus' : 'fa-minus'}`}></i></span></p>
        </div>
        <div className={`${classes.jobsContent} ${!isExpanded ? classes.inactive : ''}`}>
          <ul className={classes.jobs}>
            {jobs.map((job) => {
              const { id, role, contact, salary, workLocation, officeLocation, officeTimings, description, requirement } = job;
              // console.log(job);

              return (
                <li key={id} className={classes.job}>
                  <Job id={id} role={role} contact={contact} salary={salary} workLocation={workLocation} officeLocation={officeLocation} officeTimings={officeTimings} description={description} requirement={requirement} updateJobs={updateJobs} deleteHandler={deleteHandler}/>
                </li>
              );
            })}
          </ul>
        
        {isAdding && <div className={classes.jobFormContent}>
            <form onSubmit={addJob} className={classes.form}>
                <label htmlFor="role" className={classes.label}><span className={classes.labelText}>Job Profile: *</span><input id="role" type='text' value={title} onChange={(e) => setTitle(e.target.value)} className={classes.inputField} required/></label>
                <label htmlFor="contact" className={classes.label}><span className={classes.labelText}>Contact: *</span><input id="contact" type='text' value={contact} onChange={(e) => setContact(e.target.value)} className={classes.inputField} required/></label>
                <label htmlFor="salary" className={classes.label}><span className={classes.labelText}>Salary: *</span><input id="salary" type='text' value={salaryOffered} onChange={(e) => setSalaryOffered(e.target.value)} className={classes.inputField} required/></label>
                <label htmlFor="worklocation" className={classes.label}><span className={classes.labelText}>Work Location: *</span><textarea name="work-location" id="worklocation" aria-label='work-location' value={workLocation} onChange={(e) => setWorkLocation(e.target.value)} className={classes.textarea} required/></label>
                <label htmlFor="officelocation" className={classes.label}><span className={classes.labelText}>Office Location:</span><textarea name="office-location" id="officelocation" aria-label='office-location' value={officeLocation} onChange={(e) => setOfficeLocation(e.target.value)} className={classes.textarea} /></label>
                <label htmlFor="officetimings" className={classes.label}><span className={classes.labelText}>Office Timings:</span><input id="officetimings" type='text' value={officeTimings} onChange={(e) => setOfficeTimings(e.target.value)} className={classes.inputField} /></label>
                <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description: *</span><textarea name="job-description" id="description" aria-label="job-description" value={description} onChange={(e) => setDescription(e.target.value)} className={classes.textarea} required></textarea></label>
                <label htmlFor="requirements" className={classes.label}><span className={classes.labelText}>Requirements:</span><textarea name="job-requirements" id="requirements" aria-label="job-requirements" value={requirement} onChange={(e) => setRequirement(e.target.value)} className={classes.textarea} ></textarea></label>
                <div className={classes.btns}>
                  <button className={classes.btn} type="submit">Add</button>
                  <button className={classes.btn} onClick={cancelHandler} type="button">Cancel</button>
                </div>
            </form>
        </div>}
                {/* <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description:</span><input id="description" type='text' value={description} onChange={(e) => setDescription(e.target.value)} className={classes.inputField} required/></label> */}
        {!isAdding && <div className={classes.addJob}><button className={classes.addJobBtn} onClick={() => setIsAdding(true)}>Add Job</button></div>}
        </div>
      </div>
    </section>
  );
};

export default AdminJobs;

/*

http://localhost:5555/api/career/addCareer

http://localhost:5555/api/career/getAll

http://localhost:5555/api/career/:id


    id,
    role,
    contact,
    salary,
    workLocation,
    officeLocation,
    officeTimings,
    description,
    requirement

*/
