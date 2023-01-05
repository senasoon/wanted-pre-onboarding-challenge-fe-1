import React from "react";
import Todo from "./Todo";
import TodoCreate from "./TodoCreate";

const TodoList = () => {
  return (
    <form>
      <fieldset>
        <legend>할일목록</legend>
        <h1>TodoList</h1>
        <TodoCreate />
        <ul>
          <li>
            <Todo />
          </li>
        </ul>
      </fieldset>
    </form>
  );
};

export default TodoList;
