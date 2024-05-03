/** TodoComp page*/
import React from "react";
import PropTypes from "prop-types";
import classes from "./CSS/Card.module.css";

const Todo = ({ id, title, completed, onMarkTodoAsCompleted }) => {
  const borderColor = completed
    ? { border: "2px solid green", backgroundColor: "MediumSeaGreen" }
    : { border: "2px solid red" };
  return (
    <div className={classes.item_card} style={borderColor}>
      <h1 className={classes.card_label}>
        Title:<span className={classes.item_value}> {title}</span>
      </h1>
      <label className={classes.card_label}>
        Completed: {completed ? "Yes" : "No"}
      </label>
      {!completed && (
        <button
          onClick={() => onMarkTodoAsCompleted(id)}
          className={classes.card_btn}
        >
          Mark as Complete
        </button>
      )}
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onMarkTodoAsCompleted: PropTypes.func.isRequired,
};

export default Todo;
