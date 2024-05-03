import React, { useState } from 'react'
import PropTypes from "prop-types";
import Todo from './Todo'
import classes from './CSS/Card.module.css'

const TodosList = ({ todos, onMarkTodoAsCompleted }) => {
 
  const Todos = todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
        onMarkTodoAsCompleted={onMarkTodoAsCompleted}
      />
    );
  });

  return <div className={classes.content}>{Todos}</div>;
};

TodosList.propTypes = {
  todos: PropTypes.array.isRequired,
  onMarkTodoAsCompleted: PropTypes.func.isRequired,
};
export default TodosList
