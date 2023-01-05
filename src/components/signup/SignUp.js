import React from "react";

const SignUp = () => {
  return (
    <form>
      <fieldset>
        <legend className="sr-only">회원가입</legend>
        <label for="id">아이디</label>
        <input name="id" id="id" />
        <label for="password">비밀번호</label>
        <input name="password" id="password" />
        <button>회원가입</button>
      </fieldset>
    </form>
  );
};

export default SignUp;
