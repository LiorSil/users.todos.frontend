import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import classes from "./CSS/Card.module.css";

const PostsList = ({ posts }) => {
console.log(posts);
  const Posts = posts.map((post) => {
    return (
      <Post key={post.id} id={post.id} title={post.title} body={post.body} />
    );
  });

  return <div className={classes.content}>{Posts}</div>;
};

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;
