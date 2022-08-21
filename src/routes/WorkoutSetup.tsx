import React from "react";
import styled from "styled-components";
import WorkoutControls from "../components/WorkoutOption";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import TimerPage from "../components/TimerPage";
import { workoutDataState } from "../atoms/workoutData";
import { useRecoilValue } from "recoil";
import { calculateTotalWorkoutTime } from "../utils/calculateTotalWorkoutTime";
import { formatTime } from "../utils/formatTime";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(249, 12, 83);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 500px;
  margin-top: 50px;
`;

const IconWrapper = styled.button`
  cursor: pointer;
  background: inherit;
  border: none;
  color: white;
`;

const WorkoutName = styled.p`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin: 0 20px;
`;

const Timer = styled.p`
  font-size: 70px;
  font-weight: 600;
`;

export default function WorkoutSetup() {
  const workoutData = useRecoilValue(workoutDataState);

  return (
    <Container>
      <Header>
        <IconWrapper>
          <KeyboardBackspaceRoundedIcon sx={{ fontSize: "30px" }} />
        </IconWrapper>
        <WorkoutName>Workout Name</WorkoutName>
        <IconWrapper>
          <DeleteRoundedIcon sx={{ fontSize: "30px" }} />
        </IconWrapper>
      </Header>
      <Timer>{formatTime(calculateTotalWorkoutTime(workoutData))}</Timer>
      <WorkoutControls />
      <TimerPage />
    </Container>
  );
}
