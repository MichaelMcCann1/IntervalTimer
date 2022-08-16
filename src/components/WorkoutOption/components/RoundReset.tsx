import React from "react";
import { Container, IconWrapper, Title, Count } from "./WorkoutOptionsElements";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

export default function RoundReset() {
  return (
    <Container backgroundColor="rgba(255, 255, 0, 0.15)">
      <IconWrapper>
        <AccessTimeRoundedIcon sx={{ color: "rgb(204,204,0)" }} />
      </IconWrapper>
      <Title>Round Reset</Title>
      <Count fontColor="rgb(204,204,0)">00:10</Count>
    </Container>
  );
}
