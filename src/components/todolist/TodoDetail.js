import React from "react";
import styled from "styled-components";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

const TodoDetail = () => {
  return (
    <TodoDetailLayout>
      <fieldset>
        <legend className="sr-only">할일상세</legend>
        <TodoDetailTitle>TodoDetail</TodoDetailTitle>
        <TodoUpdateButton>
          <BsFillPencilFill />
        </TodoUpdateButton>
        <TodoDeleteButton>
          <BsFillTrashFill />
        </TodoDeleteButton>
        <p>음악 듣기</p>
      </fieldset>
    </TodoDetailLayout>
  );
};

export default TodoDetail;

const TodoDetailLayout = styled.section`
  flex-grow: 1;
`;

const TodoDetailTitle = styled.h1`
  font-size: 2em;
`;

const TodoUpdateButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 10px;
  border: 0;
  background: none;
  font-size: 20px;
  margin-right: 10px;
`;

const TodoDeleteButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 4px;
  border: 0;
  background: none;
  font-size: 20px;
`;
