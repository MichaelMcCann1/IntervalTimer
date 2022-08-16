import React from "react";
import { Container, IconWrapper, Title, Count } from "./WorkoutOptionsElements";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";

export default function Work() {
  return (
    <Container backgroundColor="rgba(0, 255, 0, 0.2)">
      <IconWrapper>
        <PlayCircleOutlineRoundedIcon sx={{ color: "green" }} />
      </IconWrapper>
      <Title>Work</Title>
      <Count fontColor="green">00:20</Count>
    </Container>
  );
}
