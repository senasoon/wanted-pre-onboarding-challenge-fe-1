import React from "react";
import styled from "styled-components";

const SignUp = () => {
  return (
    <SignUpForm>
      <SignUpLayout>
        <legend className="sr-only">회원가입</legend>
        <SignUpTitle>회원가입</SignUpTitle>
        <div>
          <InputLabel htmlFor="id">아이디</InputLabel>
          <input name="id" id="id" />
        </div>
        <div>
          <InputLabel htmlFor="password">비밀번호</InputLabel>
          <input name="password" id="password" />
        </div>
        <SignUpButton>회원가입</SignUpButton>
      </SignUpLayout>
    </SignUpForm>
  );
};

export default SignUp;

const SignUpForm = styled.form`
  width: 500px;
  height: 300px;
  padding: 10px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SignUpLayout = styled.fieldset`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const SignUpTitle = styled.h1`
  margin: 0;
`;

const InputLabel = styled.label`
  display: inline-block;
  width: 80px;
`;

const SignUpButton = styled.button`
  width: 378px;
  height: 2rem;
  padding: 2px 0;
  border-radius: 50px;
  border: 0;
  background-color: #2f5fef;
  color: #fff;
  font-weight: bold;
`;
