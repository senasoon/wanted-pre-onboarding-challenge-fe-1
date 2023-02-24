import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Todo } from 'types/todo';

const TodoItem = ({ title, id }: Todo) => {
  const navigate = useNavigate();
  return (
    <TodoTitle onClick={() => navigate(`/detail/${id}`)}>{title}</TodoTitle>
  );
};

export default TodoItem;

const TodoTitle = styled.p`
  cursor: pointer;
`;
