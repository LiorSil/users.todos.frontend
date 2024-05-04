import { useState } from "react";
import PropTypes from "prop-types";
import classes from "./CSS/Card.module.css";

const AddPost = ({ onClickCancel, onAddPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAddPost = () => {
    if (!title || !body) {
      // Display a more user-friendly validation message
      alert("Please fill out all fields");
      return;
    }
    onAddPost(title, body);
  };

  return (
    <div className={classes.item_card}>
      <h1 className={classes.card_label}>Add Post</h1>
      <label className={classes.card_label}>Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        className={classes.card_input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label className={classes.card_label}>Body:</label>
      <textarea
        id="body"
        name="body"
        className={classes.card_textarea}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <br />
      <button className={classes.card_btn} onClick={handleAddPost}>
        Add Post
      </button>
      <button className={classes.card_btn} onClick={onClickCancel}>
        Cancel
      </button>
    </div>
  );
};

AddPost.propTypes = {
  onClickCancel: PropTypes.func.isRequired,
  onAddPost: PropTypes.func.isRequired,
};

export default AddPost;
