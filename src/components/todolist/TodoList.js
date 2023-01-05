import React from "react";
import Todo from "./Todo";
import TodoCreate from "./TodoCreate";
import styled from "styled-components";

const TodoList = () => {
  return (
    <TodoListLayout>
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
    </TodoListLayout>
  );
};

export default TodoList;

const TodoListLayout = styled.form`
  flex-grow: 1;
`;
