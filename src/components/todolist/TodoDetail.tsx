import React, { useState } from 'react';
import styled from 'styled-components';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import useGetTodoById from 'hooks/todo/useGetTodoById';
import { useParams } from 'react-router-dom';
import useUpdateTodo from 'hooks/todo/useUpdateTodo';
import Modal from 'components/modal/Modal';

const TodoDetail = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoInputValue, setTodoInputValue] = useState({
    title: '',
    content: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const id = useParams().id!;

  const { data: getTodo } = useGetTodoById(id);
  const { mutate: updateTodo } = useUpdateTodo();

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInputValue({ ...todoInputValue, title: e.target.value });
  };

  const contentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInputValue({ ...todoInputValue, content: e.target.value });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTodo({
      id: id,
      title: todoInputValue.title,
      content: todoInputValue.content,
    });
    setIsEditing(!isEditing);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && <Modal toggleModal={toggleModal} id={id} />}
      <TodoDetailLayout onSubmit={submitHandler}>
        <fieldset>
          <legend className="sr-only">할일상세</legend>
          <TodoDetailTitle>TodoDetail</TodoDetailTitle>
          {!isEditing && (
            <>
              <TodoUpdateButton
                onClick={() => {
                  setIsEditing(!isEditing);
                  setTodoInputValue({
                    title: getTodo?.title,
                    content: getTodo?.content,
                  });
                }}
              >
                <BsFillPencilFill />
              </TodoUpdateButton>
              <TodoDeleteButton type="button" onClick={toggleModal}>
                <BsFillTrashFill />
              </TodoDeleteButton>
              <TodoTitle>{getTodo?.title}</TodoTitle>
              <p>{getTodo?.content}</p>
            </>
          )}
          {isEditing && (
            <>
              <TodoInputBox>
                <div>
                  <label htmlFor="title">제목</label>
                  <TodoUpdateInput
                    type="text"
                    id="title"
                    onChange={titleChangeHandler}
                    value={todoInputValue.title}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="content">내용</label>
                  <TodoUpdateInput
                    type="text"
                    id="content"
                    onChange={contentChangeHandler}
                    value={todoInputValue.content}
                    required
                  />
                </div>
              </TodoInputBox>
              <SubmitUpdateTodoButton>수정하기</SubmitUpdateTodoButton>
              <CancelUpdateTodoButton
                type="button"
                onClick={() => setIsEditing(!isEditing)}
              >
                취소하기
              </CancelUpdateTodoButton>
            </>
          )}
        </fieldset>
      </TodoDetailLayout>
    </>
  );
};

export default TodoDetail;

const TodoDetailLayout = styled.form`
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

const TodoInputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const TodoUpdateInput = styled.input`
  margin: 5px 10px;
`;

const SubmitUpdateTodoButton = styled.button`
  width: 6rem;
  height: 2rem;
  padding: 2px 0;
  border-radius: 5px;
  border: 0;
  background-color: #2f5fef;
  color: #fff;
  font-weight: bold;
  margin-right: 5px;
`;

const CancelUpdateTodoButton = styled.button`
  width: 6rem;
  height: 2rem;
  padding: 2px 0;
  border-radius: 5px;
  border: 0;
  background-color: lightgray;
  color: #fff;
  font-weight: bold;
`;
