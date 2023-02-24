import React from 'react';
import TodoItem from 'components/todolist/TodoItem';
import TodoCreate from 'components/todolist/TodoCreate';
import styled from 'styled-components';
import useTodos from 'hooks/todo/useGetTodos';
import { Todo } from 'types/todo';

const TodoList = () => {
  const { data: todos } = useTodos();
  return (
    <TodoListLayout>
      <h1>TodoList</h1>
      <TodoCreate />
      <ul>
        {todos?.data.data.map((todo: Todo) => (
          <li key={todo.id}>
            <TodoItem {...todo} />
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
