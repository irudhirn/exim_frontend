import React from "react";
import { useState } from "react";

import RecentPostsSmall from "./RecentPostsSmall";
import classes from "./Blogs.module.css";
import Blog1 from "./Blog1/Blog1";
import Blog2 from "./Blog2/Blog2";
import Blog3 from "./Blog3/Blog3";

const Blogs = () => {
  const [page, setPage] = useState(1);

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.blogContainer}>
          <Blog1 />
          <Blog2 />
          <Blog3 />
        </div>
        <div className={classes.sideBar}>
          <RecentPostsSmall />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
