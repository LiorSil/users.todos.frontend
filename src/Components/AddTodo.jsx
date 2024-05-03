import React from "react";
import PropTypes from "prop-types";
import classes from "./CSS/Card.module.css";
import { useState } from "react";

const AddTodo = ({ onAddTodo, onClickCancel }) => {
  const [title, setTitle] = useState("");

  return (
    <div className={classes.item_card}>
      <h1 className={classes.card_label}>Add Todo</h1>
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
      <button
        className={classes.card_btn}
        onClick={() => {
          if (!title) return alert("Please fill out all fields");
          onAddTodo(title)
        }}
      >
        Add Todo
      </button>
      <button className={classes.card_btn} onClick={onClickCancel}>
        Cancel
      </button>
    </div>
  );
};

AddTodo.propTypes = {
   
  onAddTodo: PropTypes.func.isRequired,
  onClickCancel: PropTypes.func.isRequired,
};

export default AddTodo;
