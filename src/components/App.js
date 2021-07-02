import React from "react";
import Footer from "../components/Footer/Footer.js";
import Header from "../components/Header/Header.js";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div>
    <Header />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
