import PropTypes from "prop-types";
import classes from "./CSS/Card.module.css";

const Post = ({ id, title, body }) => {
  return (
    <div id={id} className={classes.item_card}>
      <div className={classes.title}>
        <u>Title:</u>
        <br />
        <span className={classes.item_value}>{title}</span>
      </div>
      <div className={classes.body}>
        <u>Body:</u>
        <br />
        {body}
      </div>
    </div>
  );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
