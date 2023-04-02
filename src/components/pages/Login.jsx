import React from "react";
import { useState } from "react";
import styled from "styled-components";

import { PlayButton } from "../atoms/PlayButton";
import { AfterLoginPart } from "../molecules/AfterLoginPart";
import { LoginPart } from "../molecules/LoginPart";
import { LoginButton } from "../atoms/LoginButton";
import { useBgColor } from "../../hooks/useBgColor";

export const Login = () => {
  const { bgColor, setBgColor } = useBgColor();
  const [login, setLogin] = useState(false);
  const array = [
    "97a791",
    "e8d3d1",
    "f6b894",
    "abced8",
    "59b9c6",
    "867ba9"
  ];

  const onClickColorChange = (index) => {
    setBgColor(array[index]);
  };

  return (
    <SDiv bgColor={bgColor}>
      <STitle>Hit&Blow</STitle>
      <SImage>
        {array.map((a, index) => {
          return (
            <SColorChangeButton
              key={a}
              onClick={() =>
                onClickColorChange(index)
              }
              color={a}
            >
              {index}
            </SColorChangeButton>
          );
        })}
      </SImage>
      {login ? (
        <SAfterLoginPart />
      ) : (
        <SLoginPart setLogin={setLogin} />
      )}

      <SPlayButton>ゲストでPLAY!!</SPlayButton>
    </SDiv>
  );
};

const SDiv = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #${(props) => props.bgColor};
`;

const STitle = styled.p`
  font-size: 30px;
  padding: 10px 0;
  margin: 0;
`;

const SImage = styled.div`
  margin: 50px 0;
`;

const SColorChangeButton = styled(LoginButton)`
  border: solid 1px black;
  padding: 0 5px;
  margin: 0 3px;
  background-color: #${(props) => props.color};
`;

const SAfterLoginPart = styled(AfterLoginPart)`
  width: 60%;
  margin: 0 auto;
`;

const SLoginPart = styled(LoginPart)`
  margin: 0 auto;
  width: 60%;
`;

const SPlayButton = styled(PlayButton)`
  margin: 30px 0;
  background-color: #d4dcd6;
  color: black;
  border: solid 1px black;
  border-radius: 3px;
`;
