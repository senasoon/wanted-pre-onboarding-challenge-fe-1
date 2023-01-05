import React from "react";
import styled from "styled-components";

const TodoDetail = () => {
  return (
    <TodoDetailLayout>
      <fieldset>
        <legend className="sr-only">할일상세</legend>
        <TodoDetailTitle>TodoDetail</TodoDetailTitle>
        <button>상태버튼</button>
        <button>수정버튼</button>
        <button>삭제버튼</button>
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
