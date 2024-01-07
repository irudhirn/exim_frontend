import React from "react";
import { Link } from "react-router-dom";
import { DUMMY_BLOGS as blogs } from "../../../../store/constants";

import classes from "./Blogs.module.css";

const Blogs = () => {
  // prettier-ignore
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.customRule} />
        <h3 className={classes.sectionHeading}>Our Blogs</h3>
        <div className={classes.sectionHeadingBorder} />
        <div className={classes.blogsContainer}>
          <ul className={classes.blogs}>
            {blogs.map((blog, i) => {
              const {id, title, img, datePost, author, keyword, page} = blog;
              return (
                <li key={id} className={classes.blog}>
                  <div className={classes.blogImg}>
                    <Link to={page}>
                      <img src={require(`../../../../resources/images/${img}`)} alt="blogImg" className={classes.img}/>
                    </Link>
                    {/* <span className={classes.keyword}><Link to="">{keyword}</Link></span> */}
                  </div>
                  <div className={classes.blogText}>
                    {/* <p className={classes.blogDateAuthor}><span className={classes.dateIcon}><i className="fa-regular fa-calendar"></i></span><Link to={page}>{datePost}</Link>&nbsp;&nbsp;/ <span className={classes.authorIcon}><i className="fa-regular fa-user"></i></span>by <Link>{author}</Link></p> */}
                    <p className={classes.blogTitle}><Link to={page}>{title}</Link></p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
