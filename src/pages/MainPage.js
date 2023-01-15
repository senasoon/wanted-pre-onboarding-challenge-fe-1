import React, { useState } from "react";
import TodoList from "../components/todolist/TodoList";
import TodoDetail from "../components/todolist/TodoDetail";
import styled from "styled-components";
import { getLocalStorage, removeLocalStorage } from "../utils/LocalStorage";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [isToken, setIsToken] = useState(!!getLocalStorage("token"));
  const navigate = useNavigate();
  const logoutHandler = () => {
    removeLocalStorage("token");
    setIsToken(false);
  };

  return (
    <MainLayout>
      <LoginLogoutButton
        isToken={isToken}
        onClick={isToken ? logoutHandler : () => navigate("/login")}
      >
        {isToken ? "로그아웃" : "로그인"}
      </LoginLogoutButton>
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

const LoginLogoutButton = styled.button`
  margin: 10px;
  padding: 5px 10px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => (props.isToken ? "transparent" : "#2f5fef")};
  border: 1px solid #2f5fef;
  border-radius: 50px;
  color: ${(props) => (props.isToken ? "#2f5fef" : "#fff")};
`;
