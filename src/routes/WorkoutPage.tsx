import React from "react";
import styled from "styled-components";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import WorkoutCounter from "../components/WorkoutCounter";
import Timer from "../components/Timer";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import { useRecoilValue } from "recoil";
import { workoutDataState } from "../atoms/workoutData";
import { selectedWorkoutIndexState } from "../atoms/selectedWorkoutDataIndex";
import { Navigate, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(111, 209, 111);
  padding: 60px 20px 40px 20px;
  color: white;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const IconWrapper = styled.button`
  cursor: pointer;
  background: inherit;
  border: none;
  color: white;
  display: grid;
  place-content: center;
`;

const WorkoutName = styled.pattern`
  font-size: 24px;
  font-weight: 500;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const TimeRemaining = styled.p`
  font-size: 18px;
`;

const Time = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

const ButtonsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px 0;
`;

export default function WorkoutPage() {
  const navigate = useNavigate();
  const workoutData = useRecoilValue(workoutDataState);
  const selectedWorkoutIndex = useRecoilValue(selectedWorkoutIndexState);

  const selectedWorkout = workoutData[selectedWorkoutIndex];

  const goBack = () => {
    navigate("/workout-options");
  };

  return (
    <Container>
      <Header>
        <IconWrapper
          onClick={goBack}
          style={{ position: "absolute", left: "0px" }}
        >
          <KeyboardBackspaceRoundedIcon sx={{ fontSize: "30px" }} />
        </IconWrapper>
        <WorkoutName>{selectedWorkout.name}</WorkoutName>
      </Header>
      <WorkoutCounter />
      <Timer />
      <ButtonsRow>
        <IconWrapper>
          <PlayCircleRoundedIcon sx={{ fontSize: "90px" }} />
        </IconWrapper>
      </ButtonsRow>
      <Footer>
        <IconWrapper>
          <AccessTimeRoundedIcon sx={{ fontSize: "30px" }} />
        </IconWrapper>
        <TimeRemaining>Time Remaining:</TimeRemaining>
        <Time>01:34</Time>
      </Footer>
    </Container>
  );
}
