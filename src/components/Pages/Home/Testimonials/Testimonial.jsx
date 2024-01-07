import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import axios from "axios";

import { TESTIMONIALS as tests } from "../../../../store/constants";

import classes from "./Testimonial.module.css";

// const slides = tests.map((test, i) => {
//   const { id, description, name, company, location } = test;
//   return (
//     <li className={classes.testimonial} key={id}>
//       <p className={classes.comment}>{description}</p>
//       <p className={classes.name}>{name}</p>
//       <p className={classes.location}>
//         {company}({location})
//       </p>
//     </li>
//   );
// });

const Testimonial = () => {
  const [isFirstLoading, setIsFirstLoading] = useState(true);

  const [counter, setCounter] = useState(1);
  const [transition, setTransition] = useState("all 1s ease");
  // const [testimonials, setTestimonials] = useState([]);
  const [testimonials, setTestimonials] = useState(tests);

  // const getAllTestimonials = () => {
  //   axios.get("http://localhost:5555/api/testimonial/getAll").then((data) => {
  //     console.log(data?.data);
  //     console.log(data?.data.filter((el) => el.isChecked === true));
  //     setTestimonials(data?.data.filter((el) => el.isChecked === true));
  //   });
  // };

  // useEffect(() => {
  //   getAllTestimonials();
  // }, []);

  const slides = testimonials.map((test, i) => {
    // const { id, comment, name, companyName, location } = test;
    const { id, description, name, company, location } = test;
    return (
      <li className={classes.testimonial} key={id}>
        {/* <p className={classes.comment}>{comment}</p> */}
        <p className={classes.comment}>{description}</p>
        <p className={classes.name}>{name}</p>
        <p className={classes.location}>
          {/* {companyName}({location}) */}
          {company}({location})
        </p>
      </li>
    );
  });

  const next = () => {
    if (counter === testimonials.length) {
      setCounter((prev) => prev + 1);
      setTransition("all 0.6s ease");

      setTimeout(() => {
        setCounter(1);
        setTransition("none");
      }, 600);
      // console.log(counter);

      return;
    }
    if (counter < testimonials.length) {
      setCounter((prev) => prev + 1);
      setTransition("all 0.6s ease");
      // console.log(counter);
      return;
    }
  };
  const prev = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
      setTransition("all 0.6s ease");
      // console.log(counter);
      return;
    }
    if (counter === 1) {
      setCounter((prev) => prev - 1);
      setTransition("all 0.6s ease");

      setTimeout(() => {
        setCounter(testimonials.length);
        setTransition("none");
      }, 600);
      // console.log(counter);
      return;
    }
  };

  let intervalId;

  useEffect(() => {
    intervalId = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [counter, transition]);

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h3 className={classes.sectionHeading}>Testimonial</h3>
        <div className={classes.sectionHeadingBorder} />
        <div className={classes.testimonialContainer}>
          <button className={`${classes.prev} ${classes.btn}`} onClick={prev}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className={`${classes.next} ${classes.btn}`} onClick={next}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <ul
            className={classes.testimonials}
            style={{
              transform: `translateX(-${counter}00%)`,
              transition: `${transition}`
            }}
          >
            {slides[testimonials.length - 1]}
            {testimonials.map((test, i) => {
              // const { id, comment, name, companyName, location } = test;
              const { id, description, name, company, location } = test;
              return (
                <li className={classes.testimonial} key={id}>
                  {/* <p className={classes.comment}>{comment}</p> */}
                  <p className={classes.comment}>{description}</p>
                  <p className={classes.name}>{name}</p>
                  <p className={classes.location}>
                    {/* {companyName}({location}) */}
                    {company}({location})
                  </p>
                </li>
              );
            })}
            {slides[0]}
          </ul>
        </div>
        <div className={classes.dotsContainer}>
          <ul
            className={classes.dots}
            style={{ width: `${testimonials.length * 30}px` }}
          >
            {testimonials.map((el, i) => {
              const { id } = el;

              return (
                <li
                  className={`${classes.dot} ${
                    counter - 1 === i ? classes.activeDot : ""
                  }`}
                  key={id}
                  onClick={() => setCounter(i + 1)}
                ></li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
