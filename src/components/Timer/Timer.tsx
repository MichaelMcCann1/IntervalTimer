import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 1;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const Time = styled.p`
  font-size: 60px;
  font-weight: 700;
`;

export default function Timer() {
  return (
    <Container>
      <Text>Work</Text>
      <Time>00:08</Time>
      <Text>Exercise 2</Text>
    </Container>
  );
}
