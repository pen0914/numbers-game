import React from "react";
import styled from "styled-components";

import { useSettingUser } from "../../hooks/useSettingUser";
import { PlayButton } from "../atoms/PlayButton";

export const AfterLoginPart = (props) => {
  const { className } = props;
  const { userData } = useSettingUser();
  return (
    <SDiv className={className}>
      <div>こんにちは{userData}さん!!</div>
      <SPlayButton>PLAY!!</SPlayButton>
    </SDiv>
  );
};

const SDiv = styled.div`
  border: solid 1px black;
`;

const SPlayButton = styled(PlayButton)`
  background-color: #d4dcd6;
  color: black;
  border: solid 1px black;
  border-radius: 3px;
`;
