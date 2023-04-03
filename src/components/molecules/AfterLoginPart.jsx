import React from "react";
import styled from "styled-components";

import { useSettingUser } from "../../hooks/useSettingUser";
import { PlayButton } from "../atoms/PlayButton";

export const AfterLoginPart = (props) => {
  const { className } = props;
  const { userData } = useSettingUser();
  return (
    <SDiv className={className}>
      <SName>こんにちは{userData}さん!!</SName>
      <div>
        <STable>
          <caption>ランキング</caption>
          <thead>
            <tr>
              <td>順位</td>
              <td>スコア</td>
              <td>ID</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>4</td>
              <td>top1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>6</td>
              <td>tom</td>
            </tr>
            <tr>
              <td>3</td>
              <td>7</td>
              <td>potato</td>
            </tr>
          </tbody>
        </STable>
      </div>
      <SPlayButton>PLAY!!</SPlayButton>
    </SDiv>
  );
};

const SDiv = styled.div`
  border: solid 1px black;
  border-radius: 10px;
  height: 50%;
`;

const SName = styled.div`
  margin-top: 20px;
`;

const STable = styled.table`
  margin: 0 auto;
`;

const SPlayButton = styled(PlayButton)`
  background-color: #d4dcd6;
  color: black;
  border: solid 1px black;
  border-radius: 3px;
  margin: 10px 0 20px 0;
`;
