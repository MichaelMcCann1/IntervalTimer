import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { workoutDataState } from "../atoms/workoutData";
import { calculateTotalWorkoutTime } from "../utils/calculateTotalWorkoutTime";
import { formatTime } from "../utils/formatTime";
import { workoutData } from "../Types";
import { selectedWorkoutDataState } from "../atoms/selectedWorkoutData";
import { defaultWorkoutData } from "../constants/workoutData";
import { selectedWorkoutIndexState } from "../atoms/selectedWorkoutDataIndex";

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
  const navigate = useNavigate();
  const workoutData = useRecoilValue(workoutDataState);
  const setSelectedWorkoutData = useSetRecoilState(selectedWorkoutDataState);
  const setSelectedWorkoutIndex = useSetRecoilState(selectedWorkoutIndexState);

  const openWorkout = (workout: workoutData, index: number) => {
    setSelectedWorkoutData(workout);
    setSelectedWorkoutIndex(index);
    navigate("/workout-options");
  };

  const addNewWorkout = () => {
    setSelectedWorkoutData(defaultWorkoutData);
    setSelectedWorkoutIndex(workoutData.length);
    navigate("/workout-options");
  };

  return (
    <Container>
      <Title>Interval Timer</Title>
      <WorkoutListWrapper>
        {workoutData.map((workout: workoutData, index: number) => (
          <WorkoutListItem onClick={() => openWorkout(workout, index)}>
            <WorkoutButtonText>{workout.name}</WorkoutButtonText>
            <WorkoutButtonText>
              {formatTime(calculateTotalWorkoutTime(workout))}
            </WorkoutButtonText>
          </WorkoutListItem>
        ))}
      </WorkoutListWrapper>
      <AddWorkoutButton>
        <AddIcon sx={{ fontSize: "40px", color: "rgb(249, 12, 83)" }} />
        <ButtonText onClick={addNewWorkout}>Add Workout</ButtonText>
      </AddWorkoutButton>
    </Container>
  );
}
