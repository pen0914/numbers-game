import React from "react";
import styled from "styled-components";
import { useBgColor } from "../../hooks/useBgColor";

export const Main = () => {
  const { bgColor } = useBgColor();
  return (
    <SDiv bgColor={bgColor}>
      <SUpper>
        <SCardBox>
          <button>□</button>
          <button>□</button>
          <button>□</button>
        </SCardBox>
      </SUpper>
      <SUnder>
        <SNumberFlame>
          <SNumber>1</SNumber>
          <SNumber>2</SNumber>
          <SNumber>3</SNumber>
          <SNumber>4</SNumber>
          <SNumber>5</SNumber>
          <SNumber>6</SNumber>
          <SNumber>7</SNumber>
          <SNumber>8</SNumber>
          <SNumber>9</SNumber>
          <SNumber>0</SNumber>
          <SNumber></SNumber>
          <SNumber>×</SNumber>
        </SNumberFlame>
      </SUnder>
    </SDiv>
  );
};

const SDiv = styled.div`
  height: 100vh;
  text-align: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #${(props) => props.bgColor};
`;

const SUpper = styled.div`
  height: 50%;
`;

const SCardBox = styled.div``;

const SUnder = styled.div`
  width: 50%;
  height: 50%;
`;

const SNumberFlame = styled.div`
  display: grid;
  background-color: green;
  padding: 3px;
  margin: 0 auto;
  width: 30%;
  gap: 1px 1px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const SNumber = styled.button`
  display: grid;
  aspect-ratio: 1/1;
  place-items: center;
`;
