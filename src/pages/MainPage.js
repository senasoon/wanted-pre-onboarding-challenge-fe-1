import React from "react";
import TodoList from "../components/todolist/TodoList";
import TodoDetail from "../components/todolist/TodoDetail";
import styled from "styled-components";

const MainPage = () => {
  return (
    <MainLayout>
      <TodoList />
      <TodoDetail />
    </MainLayout>
  );
};

export default MainPage;

const MainLayout = styled.div`
  display: flex;
  padding: 10px 20px;
`;
