import React from "react";
import AddTodo from "../../containers/AddTodo";
import "./header.css";

const Header = () => (
  <div className="header">
    <h1 className="title">Todo List</h1>
    <AddTodo />
  </div>
);

export default Header;
