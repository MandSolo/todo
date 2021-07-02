import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { Plus } from "react-feather";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = "";
      }}
    >
      <input
        ref={(node) => {
          input = node;
        }}
        placeholder="Input a new task..."
      />
      <button type="submit">
        <Plus />
      </button>
    </form>
  );
};

export default connect()(AddTodo);
