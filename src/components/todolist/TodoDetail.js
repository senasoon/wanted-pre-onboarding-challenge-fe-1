import React from "react";
import styled from "styled-components";

const TodoDetail = () => {
  return (
    <section>
      <fieldset>
        <legend>할일상세</legend>
        <h1>TodoDetail</h1>
        <button>상태버튼</button>
        <button>수정버튼</button>
        <button>삭제버튼</button>
        <p>음악 듣기</p>
      </fieldset>
    </section>
  );
};

export default TodoDetail;

const TodoDetailLayout = styled.section`
  flex-grow: 1;
`;
