import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginForm>
      <LoginLayout>
        <legend className="sr-only">로그인</legend>
        <LoginTitle>로그인</LoginTitle>
        <div>
          <InputLabel htmlFor="id">아이디</InputLabel>
          <input name="id" id="id" />
        </div>
        <div>
          <InputLabel htmlFor="password">비밀번호</InputLabel>
          <input name="password" id="password" />
        </div>
        <LoginButton>로그인</LoginButton>
      </LoginLayout>
    </LoginForm>
  );
};

export default Login;

const LoginForm = styled.form`
  width: 500px;
  height: 300px;
  padding: 10px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoginLayout = styled.fieldset`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const LoginTitle = styled.h1`
  margin: 0;
`;

const InputLabel = styled.label`
  display: inline-block;
  width: 80px;
`;

const LoginButton = styled.button`
  width: 378px;
  height: 2rem;
  padding: 2px 0;
  border-radius: 50px;
  border: 0;
  background-color: #2f5fef;
  color: #fff;
  font-weight: bold;
`;
