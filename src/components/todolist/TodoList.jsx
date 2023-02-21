import React from 'react';
import Todo from './Todo';
import TodoCreate from './TodoCreate';
import styled from 'styled-components';
import useTodos from '../../hooks/todo/useGetTodos';

const TodoList = () => {
  const { data: todos } = useTodos();
  return (
    <TodoListLayout>
      <h1>TodoList</h1>
      <TodoCreate />
      <ul>
        {todos?.data.data.map((todo) => (
          <li key={todo.id}>
            <Todo {...todo} />
          </li>
        ))}
      </ul>
    </TodoListLayout>
  );
};

export default TodoList;

const TodoListLayout = styled.div`
  margin: 4rem auto auto auto;
`;
