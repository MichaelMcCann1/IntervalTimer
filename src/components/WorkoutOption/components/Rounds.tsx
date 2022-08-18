import React from "react";
import { Container, IconWrapper, Title, Count } from "./WorkoutOptionsElements";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";

export default function Rounds() {
  return (
    <Container backgroundColor="rgba(0, 0, 255, 0.1)">
      <IconWrapper>
        <RefreshRoundedIcon sx={{ color: "royalblue" }} />
      </IconWrapper>
      <Title>Rounds</Title>
      <Count fontColor="royalblue">1X</Count>
    </Container>
  );
}
