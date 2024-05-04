import PropTypes from "prop-types";
import Todo from "./Todo";
import classes from "./CSS/Card.module.css";

const TodosList = ({ todos, onMarkTodoAsCompleted }) => {
  const Todos = todos.map(({ id, title, completed }) => (
    <Todo
      key={id}
      id={id}
      title={title}
      completed={completed}
      onMarkTodoAsCompleted={onMarkTodoAsCompleted}
    />
  ));

  return <div className={classes.content}>{Todos}</div>;
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onMarkTodoAsCompleted: PropTypes.func.isRequired,
};

export default TodosList;
