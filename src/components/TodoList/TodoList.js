import React from "react";
import PropTypes from "prop-types";
import Todo from "../Todo/Todo";
import "./todoList.css";
import { AlertOctagon } from "react-feather";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="todoListWrap">
      <h2>Current tasks:</h2>
      {todos.length ? (
        <ul className="todoList">
          {todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                {...todo}
                handleToggle={() => toggleTodo(todo.id)}
                handleDelete={() => deleteTodo(todo.id)}
              />
            );
          })}
        </ul>
      ) : (
        <div className="alertWrap">
          <AlertOctagon />
          <span className="alertMsg">Nothing todo here!</span>
        </div>
      )}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
