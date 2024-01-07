import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./RecentPostsSmall.module.css";

const DUMMY_RECENT_POSTS = [
  {
    id: "p1",
    name: "Embrace Your Natural Glow: Tips for Enhancing Your Skin's Radiance",
    img: "blog-1-img-compressed.jpg",
    page: "/blog/embrace-your-natural-glow"
  },
  {
    id: "p2",
    name: "Beauty Apple Facewash: Unveiling the Freshness of Nature",
    img: "blog-2-img-compressed.jpg",
    page: "/blog/beauty-apple-facewash"
  },
  {
    id: "p3",
    name: "Vitamin C Face Serum: The Radiance Booster Your Skin Needs",
    img: "blog-3-img-compressed.jpg",
    page: "/blog/vitamin-c-face-serum"
  }
];

const RecentPostsSmall = () => {
  const [posts, setPosts] = useState(DUMMY_RECENT_POSTS);

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h4 className={classes.title}>Recent Posts</h4>
        <div className={classes.postsContainer}>
          <ul className={classes.posts}>
            {posts.map((post, i) => {
              const { id, name, img, page } = post;

              return (
                <li key={id} className={classes.post}>
                  <div className={classes.imgBox}>
                    <Link to={page}>
                      <img
                        src={require(`../../../resources/images/${img}`)}
                        alt="img"
                        className={classes.img}
                      />
                    </Link>
                  </div>
                  <div className={classes.textBox}>
                    <Link to={page}>{name}</Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RecentPostsSmall;
