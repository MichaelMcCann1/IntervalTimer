import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(249, 12, 83);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 40px 100px 40px;
  gap: 100px;
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 600;
`;

const WorkoutListWrapper = styled.div`
  width: 100%;
  height: 500px;
  border: 3px solid white;
  border-radius: 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 8px;
`;

const WorkoutListItem = styled.div`
  display: flex;
  width: 100%;
  background: white;
  color: rgb(249, 12, 83);
  border-radius: 6px;
  padding: 4px 8px;
  justify-content: space-between;
  align-items: center;
`;

const WorkoutButtonText = styled.p`
  font-size: 20px;
`;

const AddWorkoutButton = styled.button`
  display: flex;
  align-items: center;
  background: white;
  border: none;
  outline: none;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 6px;
  gap: 10px;
`;

const ButtonText = styled.p`
  color: rgb(249, 12, 83);
  font-size: 24px;
  font-weight: 600;
`;

export default function Home() {
  return (
    <Container>
      <Title>Interval Timer</Title>
      <WorkoutListWrapper>
        <WorkoutListItem>
          <WorkoutButtonText>Workout Name</WorkoutButtonText>
          <WorkoutButtonText>4:30</WorkoutButtonText>
        </WorkoutListItem>
      </WorkoutListWrapper>
      <AddWorkoutButton>
        <AddIcon sx={{ fontSize: "40px", color: "rgb(249, 12, 83)" }} />
        <ButtonText>Add Workout</ButtonText>
      </AddWorkoutButton>
    </Container>
  );
}
