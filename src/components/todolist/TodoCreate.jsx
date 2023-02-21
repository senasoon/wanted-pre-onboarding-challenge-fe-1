import React, { useState } from 'react';
import styled from 'styled-components';
import useCreateTodo from '../../hooks/todo/useTodoCreate';

const TodoCreate = () => {
  const [todoInputValue, setTodoInputValue] = useState({
    title: '',
    content: '',
  });

  const titleChangeHandler = (e) => {
    setTodoInputValue({ ...todoInputValue, title: e.target.value });
  };

  const contentChangeHandler = (e) => {
    setTodoInputValue({ ...todoInputValue, content: e.target.value });
  };

  const { mutate: createTodo } = useCreateTodo();

  const submitHandler = (e) => {
    e.preventDefault();
    createTodo({
      title: todoInputValue.title,
      content: todoInputValue.content,
    });
    setTodoInputValue({ title: '', content: '' });
  };

  return (
    <form onSubmit={submitHandler}>
      <TodoCreateFieldset>
        <legend className="sr-only">할일목록</legend>
        <TodoInputBox>
          <div>
            <label htmlFor="title">제목</label>
            <TodoCreateInput
              type="text"
              id="title"
              onChange={titleChangeHandler}
              value={todoInputValue.title}
              required
            />
          </div>
          <div>
            <label htmlFor="content">내용</label>
            <TodoCreateInput
              type="text"
              id="content"
              onChange={contentChangeHandler}
              value={todoInputValue.content}
              required
            />
          </div>
        </TodoInputBox>
        <TodoCreateButton>추가하기</TodoCreateButton>
      </TodoCreateFieldset>
    </form>
  );
};

export default TodoCreate;
const TodoCreateFieldset = styled.fieldset`
  display: flex;
  align-items: center;
`;

const TodoInputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const TodoCreateInput = styled.input`
  margin: 5px 10px;
`;

const TodoCreateButton = styled.button`
  width: 6rem;
  height: 5rem;
  padding: 2px 0;
  border-radius: 5px;
  border: 0;
  background-color: #2f5fef;
  color: #fff;
  font-weight: bold;
`;
