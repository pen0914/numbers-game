import React from "react";
import styled from "styled-components";
import { useBgColor } from "../../hooks/useBgColor";

export const Main = () => {
  const { bgColor } = useBgColor();
  return (
    <SDiv bgColor={bgColor}>Homeページです</SDiv>
  );
};

const SDiv = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #${(props) => props.bgColor};
`;
