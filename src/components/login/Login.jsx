import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useLogin from "../../hooks/auth/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  useEffect(() => {
    email.includes("@") && email.includes(".")
      ? setValidEmail(true)
      : setValidEmail(false);
  }, [email]);

  useEffect(() => {
    password.length >= 8 ? setValidPassword(true) : setValidPassword(false);
  }, [password]);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const { mutate } = useLogin();

  const loginHandler = (e) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return (
    <LoginForm onSubmit={loginHandler}>
      <LoginLayout>
        <legend className="sr-only">로그인</legend>
        <LoginTitle>로그인</LoginTitle>
        <div>
          <InputLabel htmlFor="id">아이디</InputLabel>
          <input
            type="text"
            name="id"
            id="id"
            placeholder="이메일 형식으로 입력하세요."
            onChange={emailChangeHandler}
            autoComplete="off"
          />
        </div>
        {email.length > 0 && !validEmail && (
          <InvalidMessage>
            이메일 형식으로 입력해주세요. (@과 .이 포함)
          </InvalidMessage>
        )}
        <div>
          <InputLabel htmlFor="password">비밀번호</InputLabel>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="8자 이상 입력하세요."
            autoComplete="off"
            onChange={passwordChangeHandler}
          />
        </div>
        {password.length > 0 && !validPassword && (
          <InvalidMessage>8자 이상 입력해주세요.</InvalidMessage>
        )}
        <LoginButton disabled={!validEmail || !validPassword ? true : false}>
          로그인
        </LoginButton>
        <SignUpButton to="/signup">회원가입</SignUpButton>
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
  background-color: ${(props) => (props.disabled ? "gray" : "#2f5fef")};
  color: #fff;
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;

const InvalidMessage = styled.span`
  width: 378px;
  font-size: 14px;
  color: #2962ff;
  font-weight: 600;
`;

const SignUpButton = styled(Link)`
  width: 378px;
  height: 2rem;
  padding: 2px 0;
  border-radius: 50px;
  border: 0;
  background-color: #2f5fef;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  line-height: 2rem;
  vertical-align: middle;
  text-decoration: none;
  font-size: 13px;
`;
