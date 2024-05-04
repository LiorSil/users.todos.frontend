import PropTypes from "prop-types";
import Post from "./Post";
import classes from "./CSS/Card.module.css";

const PostsList = ({ posts }) => {
  const renderedPosts = posts.map(({ id, title, body }) => (
    <Post key={id} id={id} title={title} body={body} />
  ));

  return <div className={classes.content}>{renderedPosts}</div>;
};

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PostsList;
