import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./todo.css";
import { Trash } from "react-feather";

const Todo = ({ handleToggle, completed, text, handleDelete }) => {
  let completedClass = classNames({
    completedTodo: completed,
  });

  return (
    <li className={`todo ${completedClass}`} onClick={handleToggle}>
      <p>{text}</p>
      <button onClick={handleDelete} className="deleteBtn">
        <Trash />
      </button>
    </li>
  );
};

Todo.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Todo;
