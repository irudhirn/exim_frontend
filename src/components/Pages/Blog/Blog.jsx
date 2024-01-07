import React from "react";
import { useParams } from "react-router";
import RecentPostsSmall from "./RecentPostsSmall";
import classes from "./Blog.module.css";
import Blog1 from "./Blog1/Blog1";
import Blog2 from "./Blog2/Blog2";
import Blog3 from "./Blog3/Blog3";

const Blog = () => {
  const params = useParams();

  // prettier-ignore
  return (
    <div className={classes.container}>
      <div className={classes.leftContent}>

        {params.someblog === "embrace-your-natural-glow" && ( <Blog1 />)}
        {params.someblog === "beauty-apple-facewash" && ( <Blog2 />)}
        {params.someblog === "vitamin-c-face-serum" && ( <Blog3 />)}

      </div>
      <div className={classes.sideBar}>
        <RecentPostsSmall />
      </div>
    </div>
  );
};

export default Blog;
