import React from "react";
import { useState } from "react";
import styled from "styled-components";

import { LoginButton } from "../atoms/LoginButton";
import { useLogin } from "../../hooks/useLogin";
import { InputForm } from "../atoms/InputForm";
import { useOnChangeUser } from "../../hooks/useOnChangeUser";

export const LoginPart = (props) => {
  const { setLogin, className } = props;
  const { login } = useLogin();

  const [id, onChangeId] = useOnChangeUser("");
  const [pass, onChangePass] = useOnChangeUser(
    ""
  );

  const onClickLogin = () => {
    login({ id, pass, setLogin });
  };

  return (
    <SDiv className={className}>
      <SText>
        <p>ログイン</p>
      </SText>
      <SinputArea>
        <InputForm
          type="text"
          onChange={onChangeId}
          value={id}
        >
          ユーザーID
        </InputForm>
        <InputForm
          type="password"
          onChange={onChangePass}
          value={pass}
        >
          パスワード
        </InputForm>
        <SLoginButton onClick={onClickLogin}>
          ログイン
        </SLoginButton>
      </SinputArea>
    </SDiv>
  );
};

const SDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  border-radius: 10px;
`;

const SText = styled.div`
  flex-basis: 20%;
`;

const SinputArea = styled.div`
  flex-basis: 80%;
`;

const SLoginButton = styled(LoginButton)`
  margin: 10px 0 20px 0;
  background-color: #d4dcd6;
  color: black;
  border: solid 1px black;
  border-radius: 3px;
`;
