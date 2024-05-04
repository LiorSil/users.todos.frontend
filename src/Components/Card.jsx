import React from "react";
import classes from "./CSS/Card.module.css";
import PropTypes from "prop-types";

const Card = ({ children, selected, ...props }) => {
  return (
    <div
      className={`${classes.card} ${classes[props.className]}`}
      style={{ backgroundColor: selected ? "#f8cbad" : "white" }}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  selected: PropTypes.bool,
};


export default Card;
