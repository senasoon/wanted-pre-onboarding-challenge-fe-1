import React from 'react';
import styled from 'styled-components';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import useGetTodoById from '../../hooks/todo/useGetTodoById';
import { useParams } from 'react-router-dom';

const TodoDetail = () => {
  const params = useParams().id;
  const { data: getTodo } = useGetTodoById(params);

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
        <TodoTitle>{getTodo?.title}</TodoTitle>
        <p>{getTodo?.content}</p>
      </fieldset>
    </TodoDetailLayout>
  );
};

export default TodoDetail;

const TodoDetailLayout = styled.section`
  text-align: center;
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

const TodoTitle = styled.h2`
  font-size: 1.5rem;
  color: #2f5fef;
`;
