import { useState } from "react";
import styled from "styled-components";

import { LoginButton } from "../atoms/LoginButton";
import { useLogin } from "../../hooks/useLogin";

export const LoginPart = (props) => {
  const { setLogin, className } = props;
  const { login } = useLogin();
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
    login({ user, setLogin });
  };

  return (
    <SDiv className={className}>
      <SP>ログイン</SP>
      <div>
        <SInputDiv>
          ユーザーID
          <SInput
            placeholder="ユーザーID"
            value={user.id}
            onChange={onChangeUserId}
          />
        </SInputDiv>
        <SInputDiv>
          パスワード
          <SInput
            placeholder="パスワード"
            value={user.pass}
            onChange={onChangeUserPass}
          />
        </SInputDiv>
        <SLoginButton onClick={onClickLogin} />
      </div>
    </SDiv>
  );
};

const SDiv = styled.div`
  border: solid 1px black;
  border-radius: 10px;
`;

const SP = styled.p`
  font-size: 20px;
`;

const SInputDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 30px;
  height: 30px;
  margin: 10px 0;
  @media (max-width: 600px) {
    display: block;
    height: 60px;
  }
`;

const SInput = styled.input`
  margin-left: 20px;
  @media (max-width: 600px) {
    margin: 0;
  }
`;

const SLoginButton = styled(LoginButton)`
  margin: 10px 0 20px 0;
  background-color: #d4dcd6;
  color: black;
  border: solid 1px black;
  border-radius: 3px;
`;
