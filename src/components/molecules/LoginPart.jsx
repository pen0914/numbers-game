import { useState } from "react";
import styled from "styled-components";

import { LoginButton } from "../atoms/LoginButton";
import { UseLogin } from "../hooks/UseLogin";

export const LoginPart = () => {
  const { login } = UseLogin();
  const [user, setUser] = useState({
    id: "",
    pass: ""
  });
  const onChangeUserId = (e) =>
    setUser((preUser) => ({
      ...preUser,
      id: e.target.value
    }));

  const onChangeUserPass = (e) =>
    setUser((preUser) => ({
      ...preUser,
      pass: e.target.value
    }));

  const onClickLogin = () => {
    login(user);
  };

  return (
    <SDiv>
      <div>ログイン</div>
      <div>
        <SInputDiv>
          <p>ユーザー名</p>
          <input
            placeholder="ユーザー名"
            value={user.id}
            onChange={onChangeUserId}
          />
        </SInputDiv>
        <SInputDiv>
          <p>パスワード</p>
          <input
            placeholder="パスワード"
            value={user.pass}
            onChange={onChangeUserPass}
          />
        </SInputDiv>
        <LoginButton onClick={onClickLogin} />
      </div>
    </SDiv>
  );
};

const SDiv = styled.div`
  border: solid 1px black;
`;

const SInputDiv = styled.div`
  display: flex;
  justify-content: center;
`;
