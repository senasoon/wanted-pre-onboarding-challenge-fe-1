import React from "react";
import styled from "styled-components";

const TodoCreate = () => {
  return (
    <>
      <TodoCreateInput />
      <TodoCreateButton>추가하기</TodoCreateButton>
    </>
  );
};

export default TodoCreate;

const TodoCreateInput = styled.input`
  margin-right: 10px;
`;

const TodoCreateButton = styled.button`
  width: 6rem;
  height: 2rem;
  padding: 2px 0;
  border-radius: 50px;
  border: 0;
  background-color: #2f5fef;
  color: #fff;
  font-weight: bold;
`;
