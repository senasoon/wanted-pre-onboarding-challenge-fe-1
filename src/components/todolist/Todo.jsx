import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Todo = ({ title, content, id }) => {
  const navigate = useNavigate();
  return (
    <TodoTitle onClick={() => navigate(`/detail/${id}`)}>{title}</TodoTitle>
  );
};

export default Todo;

const TodoTitle = styled.p`
  cursor: pointer;
`;
