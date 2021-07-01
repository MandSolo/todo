import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo, deleteTodo }) =>
  todos.length ? (
    <ul>
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
    <div>You have nothing todo!</div>
  );

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
