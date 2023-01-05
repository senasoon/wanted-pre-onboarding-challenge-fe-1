import React from "react";

const Login = () => {
  return (
    <form>
      <fieldset>
        <legend>로그인</legend>
        <label for="id">아이디</label>
        <input name="id" id="id" />
        <label for="password">비밀번호</label>
        <input name="password" id="password" />
        <button>로그인</button>
      </fieldset>
    </form>
  );
};

export default Login;
