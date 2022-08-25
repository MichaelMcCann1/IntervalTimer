import React, { useState } from "react";
import styled from "styled-components";
import WorkoutControls from "../components/WorkoutOption";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import TimerPage from "../components/TimerPage";
import { workoutDataState } from "../atoms/workoutData";
import { useRecoilState, useRecoilValue } from "recoil";
import { calculateTotalWorkoutTime } from "../utils/calculateTotalWorkoutTime";
import { formatTime } from "../utils/formatTime";
import { useNavigate } from "react-router-dom";
import { selectedWorkoutDataState } from "../atoms/selectedWorkoutData";

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
  display: grid;
  place-content: center;
`;

const WorkoutName = styled.input`
  background: inherit;
  border: none;
  color: white;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  padding: 5px 0;
  width: 100%;
  margin: 0 10px;

  :focus {
    outline: none;
    background: rgba(0, 0, 0, 0.2);
  }
`;

const Timer = styled.p`
  font-size: 70px;
  font-weight: 600;
`;

export default function WorkoutSetup() {
  const navigate = useNavigate();
  const [workoutData, setWorkoutData] = useRecoilState(workoutDataState);
  const [selectedWorkoutData, setSelectedWorkoutData] = useRecoilState(
    selectedWorkoutDataState
  );
  const [nameText, setNameText] = useState(workoutData.name);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setNameText((event.target as HTMLInputElement).value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      (event.target as HTMLInputElement).blur();
      handleBlur();
    }
  };

  const handleBlur = () => {
    if (!nameText) {
      setNameText(selectedWorkoutData.name);
      return;
    }

    setWorkoutData({
      ...selectedWorkoutData,
      name: nameText,
    });
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <Header>
        <IconWrapper onClick={handleClick}>
          <KeyboardBackspaceRoundedIcon sx={{ fontSize: "30px" }} />
        </IconWrapper>
        <WorkoutName
          value={selectedWorkoutData.name}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
        />
        <IconWrapper>
          <DeleteRoundedIcon sx={{ fontSize: "30px" }} />
        </IconWrapper>
      </Header>
      <Timer>
        {formatTime(calculateTotalWorkoutTime(selectedWorkoutData))}
      </Timer>
      <WorkoutControls />
      <TimerPage />
    </Container>
  );
}
