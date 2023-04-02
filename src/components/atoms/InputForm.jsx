import React from "react";
import styled from "styled-components";

export const InputForm = (props) => {
  const { value, onChange, children } = props;

  return (
    <SInputDiv>
      {children}
      <SInput
        placeholder={children}
        value={value}
        onChange={onChange}
      />
    </SInputDiv>
  );
};

const SInputDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 30px;
  height: 30px;
  margin: 10px 0;
  @media (max-width: 500px) {
    flex-direction: column;
    height: 60px;
  }
`;

const SInput = styled.input`
  margin-left: 20px;
  @media (max-width: 500px) {
    margin: 0 auto;
    width: 70%;
  }
`;
