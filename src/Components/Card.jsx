import classes from "./CSS/Card.module.css";
import PropTypes from "prop-types";

const Card = ({ children, selected }) => {
  return (
    <div
      className={`${classes.card}`}
      style={{ backgroundColor: selected ? "#f8cbad" : "white" }}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Card;
