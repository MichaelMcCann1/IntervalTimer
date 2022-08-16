import React from "react";
import styled from "styled-components";
import WorkoutControls from "../components/WorkoutOption";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(249, 12, 83);
  color: white;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const WorkoutName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const Timer = styled.p`
  font-size: 50px;
  font-weight: 600;
  margin: 50px auto;
`;

export default function WorkoutSetup() {
  return (
    <Container>
      <Header>
        <WorkoutName>Workout Name</WorkoutName>
      </Header>
      <Timer>07:50</Timer>
      <WorkoutControls />
    </Container>
  );
}
