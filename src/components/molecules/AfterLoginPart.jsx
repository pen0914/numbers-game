import styled from "styled-components";

import { useSettingUser } from "../../hooks/useSettingUser";
import { PlayButton } from "../atoms/PlayButton";

export const AfterLoginPart = (props) => {
  const { className } = props;
  const { userData } = useSettingUser();
  return (
    <SDiv className={className}>
      <div>こんにちは{userData}さん!!</div>
      <PlayButton>PLAY!!</PlayButton>
    </SDiv>
  );
};

const SDiv = styled.div`
  border: solid 1px black;
`;
