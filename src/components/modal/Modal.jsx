import React from 'react';
import styled from 'styled-components';
import ModalPortal from './ModalPortal';
import useDeleteTodo from '../../hooks/todo/useDeleteTodo';

const Modal = ({ toggleModal, id }) => {
  const { mutate: deleteTodo } = useDeleteTodo();

  const submitHandler = () => {
    deleteTodo(id);
  };
  return (
    <ModalPortal>
      <ModalBox>
        <ModalComment>정말 삭제하시겠습니까?</ModalComment>
        <ModalSubmitButton onClick={submitHandler}>삭제하기</ModalSubmitButton>
        <ModalCancelButton type="button" onClick={() => toggleModal()}>
          취소하기
        </ModalCancelButton>
      </ModalBox>
      <ModalOverlay></ModalOverlay>
    </ModalPortal>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 50%;
`;

const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 200px;
  background-color: #fff;
  z-index: 1;
  text-align: center;
  border-radius: 5px;
`;

const ModalComment = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const ModalSubmitButton = styled.button`
  width: 4rem;
  height: 1.5rem;
  border: 0;
  border-radius: 5px;
  background-color: #2f5fef;
  color: #fff;
  margin-right: 10px;
`;

const ModalCancelButton = styled.button`
  width: 4rem;
  height: 1.5rem;
  border: 0;
  border-radius: 5px;
  background-color: gray;
  color: #fff;
`;
