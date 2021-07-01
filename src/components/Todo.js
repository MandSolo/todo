import React from "react";
import PropTypes from "prop-types";

const Todo = ({ handleToggle, completed, text, handleDelete }) => (
  <li>
    <p
      onClick={handleToggle}
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      {text}
    </p>
    <button onClick={handleDelete}>Delete</button>
  </li>
);

Todo.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Todo;
