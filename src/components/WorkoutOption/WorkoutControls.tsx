import React from "react";
import styled from "styled-components";
import Work from "./components/Work";
import Rest from "./components/Rest";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import Exercises from "./components/Exercises";
import Rounds from "./components/Rounds";
import RoundReset from "./components/RoundReset";

const Container = styled.div`
  width: 100%;
  background: white;
  margin-top: 50px;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  position: relative;
  padding:65px 15px 30px 15px;
  gap: 10px;
`;

const StartButton = styled.button`
  padding: 10px;
  background: white;
  border-radius: 100%;
  border: 10px solid rgb(249, 12, 83);
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default function WorkoutControls() {
  return (
    <Container>
      <StartButton>
        <PlayArrowRoundedIcon
          sx={{
            fill: "rgb(249, 12, 83);",
            width: "60px",
            height: "60px",
          }}
        />
      </StartButton>
      <Work />
      <Rest />
      <Exercises />
      <Rounds />
      <RoundReset />
    </Container>
  );
}
