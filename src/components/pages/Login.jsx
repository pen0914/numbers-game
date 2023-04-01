import { useState } from "react";
import styled from "styled-components";

import { PlayButton } from "../atoms/PlayButton";
import { AfterLoginPart } from "../molecules/AfterLoginPart";
import { LoginPart } from "../molecules/LoginPart";

export const Login = () => {
  const [login, setLogin] = useState(false);
  const array = [0, 1, 2, 3, 4, 5];
  return (
    <SDiv>
      <STitle>Hit&Blow</STitle>
      <SImage>
        {array.map((a) => {
          return <SCard>{a}</SCard>;
        })}
      </SImage>
      {login ? (
        <SAfterLoginPart />
      ) : (
        <SLoginPart setLogin={setLogin} />
      )}

      <PlayButton>ゲストでPLAY!!</PlayButton>
    </SDiv>
  );
};

const SDiv = styled.div`
  text-align: center;
`;

const STitle = styled.p`
  font-size: 30px;
  padding: 10px 0;
`;

const SImage = styled.div`
  margin: 50px 0;
`;

const SCard = styled.span`
  border: solid 1px black;
  padding: 0 5px;
  margin: 0 3px;
`;

const SAfterLoginPart = styled(AfterLoginPart)`
  width: 60%;
`;

const SLoginPart = styled(LoginPart)`
  margin: 0 auto;
  width: 60%;
`;
