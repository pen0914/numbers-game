import React from "react";
import styled from "styled-components";
import { useBgColor } from "../../hooks/useBgColor";

export const Main = () => {
  const { bgColor } = useBgColor();
  return (
    <SDiv bgColor={bgColor}>
      <div>
        <button>□</button>
        <button>□</button>
        <button>□</button>
      </div>
      <SUnder>
        <SNumberFlame>
          <SNumber>0</SNumber>
          <SNumber>1</SNumber>
          <SNumber>2</SNumber>
          <SNumber>3</SNumber>
          <SNumber>4</SNumber>
          <SNumber>5</SNumber>
          <SNumber>6</SNumber>
          <SNumber>7</SNumber>
          <SNumber>8</SNumber>
          <SNumber>9</SNumber>
          <SNumber></SNumber>
          <SNumber>×</SNumber>
        </SNumberFlame>
      </SUnder>
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

const SUnder = styled.div`
  display: flex;
  width: 50%;
  height: 50%;
`;

const SNumberFlame = styled.div`
  display: grid;
  grid-template-columns: repeat(
    3,
    minmax(0, 1fr)
  );
`;

const SNumber = styled.button`
  display: grid;
`;
