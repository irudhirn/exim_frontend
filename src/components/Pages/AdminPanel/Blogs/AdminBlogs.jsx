import { useState } from "react";

import classes from "./AdminBlogs.module.css";

const AdminBlogs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // prettier-ignore
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.blogsHeader} onClick={() => setIsExpanded((prev) => !prev)}>
          <p className={classes.blogsHeaderText}><span>Blogs</span><span><i className={`fa-solid ${!isExpanded ? "fa-plus" : "fa-minus"}`}></i></span></p>
        </div>
      </div>
    </section>
  );
};

export default AdminBlogs;
