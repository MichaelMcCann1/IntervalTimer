import React from "react";
import { Container, IconWrapper, Title, Count } from "./WorkoutOptionsElements";
import PauseCircleOutlineRoundedIcon from "@mui/icons-material/PauseCircleOutlineRounded";

export default function Rest() {
  return (
    <Container backgroundColor="rgba(255, 0, 0, 0.2)">
      <IconWrapper>
        <PauseCircleOutlineRoundedIcon sx={{ color: "red" }} />
      </IconWrapper>
      <Title>Rest</Title>
      <Count fontColor="red">00:30</Count>
    </Container>
  );
}
