import React from 'react'
import classes from './CSS/Card.module.css'
import PropTypes from 'prop-types'

const Post = ({ id, title, body }) => {
  return (
    <div id={id} className={classes.item_card}>
      <u>
        <label className={classes.card_label} />
        Title:
      </u>
      <br />
      <span className={classes.item_value}> {title}</span>
      <br />
      <br />
      <u>
        <label className={classes.card_label}>Body:</label>
      </u>
      <br />
      {body}
    </div>
  );
};
Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};


export default Post
