import React from "react";
import TodoList from "../components/todolist/TodoList";
import TodoDetail from "../components/todolist/TodoDetail";

const MainPage = () => {
  return (
    <>
      <TodoList />
      <TodoDetail />
    </>
  );
};

export default MainPage;
