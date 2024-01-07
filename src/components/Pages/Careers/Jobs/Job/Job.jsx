import React from "react";
import { useState } from "react";

import Wrapper from "../../../../UI/Wrapper";

import classes from "./Job.module.css";

const Job = ({
  id,
  name,
  officeLocation,
  workLocation,
  timings,
  contact,
  salary,
  desc,
  requirements
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Wrapper>
      <li className={classes.jobContainer}>
        <div
          className={classes.header}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <h5 className={classes.jobName}>{name}</h5>
          <button className={classes.chevron}>
            <i
              className={`fa-solid fa-chevron-${!isExpanded ? "down" : "up"}`}
            ></i>
          </button>
        </div>
        <div
          className={`${classes.jobDetails} ${
            !isExpanded ? classes.inactive : ""
          }`}
        >
          {officeLocation && (
            <p className={classes.text}>
              <span style={{ fontWeight: 400 }}>Office Address:</span>{" "}
              {officeLocation}
            </p>
          )}
          {workLocation && (
            <p className={classes.text}>
              <span style={{ fontWeight: 400 }}>Work Location:</span>{" "}
              {workLocation}
            </p>
          )}
          {timings && (
            <p className={classes.text}>
              <span style={{ fontWeight: 400 }}>Office Timing:</span> {timings}
            </p>
          )}
          {contact && (
            <p className={classes.text}>
              <span style={{ fontWeight: 400 }}>Contact:</span> {contact}
            </p>
          )}
          {salary && (
            <p className={classes.text}>
              <span style={{ fontWeight: 400 }}>Salary:</span> {salary}
            </p>
          )}
          <h6 className={classes.descHeading}>Description:</h6>
          <ul className={classes.descriptions}>
            {desc.map((el, i) => {
              return (
                <li key={i} className={classes.descrptionText}>
                  <span style={{ fontWeight: 400 }}>&#8618;</span> {el}
                </li>
              );
            })}
          </ul>
          {requirements.length > 0 && (
            <Wrapper>
              <h6 className={classes.reqHeading}>Requirements:</h6>
              <ul className={classes.requirements}>
                {requirements.map((el, i) => {
                  return (
                    <li key={id} className={classes.requirementText}>
                      <span style={{ fontWeight: 400 }}>&#8618;</span> {el}
                    </li>
                  );
                })}
              </ul>
            </Wrapper>
          )}
        </div>
      </li>
    </Wrapper>
  );
};

export default Job;
