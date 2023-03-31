import styled from "styled-components";

import { PlayButton } from "../atoms/PlayButton";
import { LoginPart } from "../molecules/LoginPart";

export const Login = () => {
  return (
    <SDiv>
      <div>Hit&Blow</div>
      <div>1.2.3.4.5.</div>
      <LoginPart />
      <PlayButton>ゲストでPLAY!!</PlayButton>
    </SDiv>
  );
};

const SDiv = styled.div`
  text-align: center;
`;
